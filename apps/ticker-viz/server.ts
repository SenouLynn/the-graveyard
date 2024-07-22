import bodyParser from "body-parser";
import cors from "cors";

import express from "express";
import { streams, tickerRouter } from "~/server";

const app = express();

app.use(
  cors({
    origin: "*", //allow cross-origin cross-talk (for dev purposes)
  })
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/tickers", tickerRouter);
app.use("/api/streams/gov", streams.gov);

app.listen(3001, () => {
  console.log("App listening on http://localhost:3001");
});
