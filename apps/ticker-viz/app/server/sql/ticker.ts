import express, { Router } from "express";
import { DataTypes, Model, Sequelize } from "sequelize";
const router: Router = express.Router();

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite",
});
class PriceHistory extends Model {}
PriceHistory.init(
  {},
  { sequelize, modelName: "dataSets", freezeTableName: true }
);

class TickerInfo extends Model {}
TickerInfo.init(
  {
    symbol: DataTypes.STRING,
    name: DataTypes.STRING,
    exchange: DataTypes.STRING,
  },
  { sequelize, modelName: "info", freezeTableName: true }
);

class Tickers extends Model {}
Tickers.init({}, { sequelize, modelName: "dataSets", freezeTableName: true });

TickerInfo.belongsTo(Tickers);
Tickers.hasOne(TickerInfo);

PriceHistory.belongsTo(Tickers);
TickerInfo.hasMany(PriceHistory);

sequelize.sync();

router.get("/", async (req, res) => {
  try {
    const tickers = await Tickers.findAll({
      include: [
        {
          model: TickerInfo,
          as: "info",
        },
        // {
        //   model: PriceHistory,
        //   as: "priceHistory",
        // },
      ],
    });

    res.json({
      message: `${tickers.length} tickers found`,
      payload: tickers,
    });
  } catch (error) {
    console.error("Failed to fetch users with contacts:", error);
    res.status(500).json({ message: "Failed to fetch users" });
  }
});

router.get("/:ticker", async (req, res) => {
  const ticker = await Tickers.findByPk(req.params.ticker, {
    include: [TickerInfo, PriceHistory],
  });
  if (ticker) {
    res.json({
      message: "Ticker found: " + req.params.ticker,
      payload: ticker,
    });
  } else {
    res.status(404).json({ message: "Ticker not found: " + req.params.ticker });
  }
});

router.get("/:ticker/info", async (req, res) => {
  const ticker = await Tickers.findByPk(req.params.ticker);
  if (ticker) {
    res.json({
      message: "Ticker found: " + req.params.ticker,
      payload: ticker,
    });
  } else {
    res.status(404).json({ message: "Ticker not found: " + req.params.ticker });
  }
});

router.post<{
  symbol: string;
  name: string;
  exchange: string;
}>("/create", async (req, res) => {
  const input = req.body;
  const user = await Tickers.create(
    {
      info: {
        symbol: input.symbol,
        name: input.name,
        exchange: input.exchange,
      },
    },
    {
      include: [
        {
          model: TickerInfo,
          as: "info",
        },
      ],
    }
  );
  res.json(user);
});

router.put<{
  id: string;
}>("/:id/info/edit", async (req, res) => {
  console.log(req.body);
  const ticker = await Tickers.findByPk(req.params.id, {
    include: [TickerInfo],
  });
  if (ticker) {
    await ticker.update({
      info: req.body,
    });
    res.json({
      message: `Updated ${Object.keys(req.body)
        .filter((item) => item !== "id")
        .join(", ")} ${req.params.id}`,
      payload: ticker,
    });
  } else {
    res.status(404).json({ message: "Ticker not found" });
  }
});

router.delete("/:ticker/delete", async (req, res) => {
  const ticker = await Tickers.findByPk(req.params.ticker);
  if (ticker) {
    await ticker.destroy();
    res.json({ message: "Ticker deleted" });
  } else {
    res.status(404).json({ message: "Ticker not found: " + req.params.ticker });
  }
});

export default router;
