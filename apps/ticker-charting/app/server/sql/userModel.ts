import express, { Router } from "express";
import { Model, Sequelize } from "sequelize";
import { Contact } from "./contact";
import { Info } from "./info";
const router: Router = express.Router();

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite",
});

class User extends Model {}
User.init({}, { sequelize, modelName: "user" });

Contact.belongsTo(User);
Info.belongsTo(User);
User.hasOne(Contact);
User.hasOne(Info);

sequelize.sync();

// CRUD routes for User model
router.get("/", async (req, res) => {
  try {
    /**
     * 
     * Underlying sql query:
     * SELECT 
        "User".*, 
        "Contact"."email", 
        "Contact"."phone", 
        "Contact"."userId" 
      FROM 
          "users" AS "User" 
      LEFT JOIN 
          "contact" AS "Contact" 
      ON 
          "User"."id" = "Contact"."userId";
     * 
     * This query selects all columns from the user table and the specified columns from the contact table, performing a left join on the contact table where the id of a user matches the userId in the contact table.
     */

    const usersWithContacts = await User.findAll({
      include: [
        {
          model: Contact, // Ensure Contact is imported and available
          as: "contact", // Optional: Use if you have defined an alias in your association
        },
        {
          model: Info,
          as: "info",
        },
      ],
    });

    res.json({
      message: `${usersWithContacts.length} users found`,
      payload: usersWithContacts,
    });
  } catch (error) {
    console.error("Failed to fetch users with contacts:", error);
    res.status(500).json({ message: "Failed to fetch users" });
  }
});

router.get("/:id", async (req, res) => {
  const user = await User.findByPk(req.params.id, {
    include: [Contact, Info],
  });
  if (user) {
    res.json({
      message: "User found",
      payload: user,
    });
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

router.get("/:id/contact", async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (user) {
    res.json({
      message: "Contact found",
      payload: user,
    });
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

router.post<{
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  abbreviation: string;
  dob: string;
}>("/create", async (req, res) => {
  const input = req.body;
  const user = await User.create(
    {
      contact: {
        email: input.email,
        phone: input.phone,
      },
      info: {
        firstName: "John",
        lastName: "Doe",
        abbreviation: "JD",
        dob: new Date("1990-01-01"),
      },
    },
    {
      include: [Contact, Info],
    }
  );
  res.json(user);
});

router.put("/:id/edit", async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (user) {
    await user.update(req.body);
    res.json({
      message: `Updated ${Object.keys(req.body)
        .filter((item) => item !== "id")
        .join(", ")} for user ${req.params.id}`,
      payload: user,
    });
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

router.delete("/:id/delete", async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (user) {
    await user.destroy();
    res.json({ message: "User deleted" });
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

export default router;
