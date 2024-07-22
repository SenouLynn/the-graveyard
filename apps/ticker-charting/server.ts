import bodyParser from "body-parser";
import cors from "cors";

import express from "express";
import { pingRouter, userRouter } from "~/server";

const app = express();

app.use(
  cors({
    origin: "*", //allow cross-origin cross-talk (for dev purposes)
  })
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/test", pingRouter);
app.use("/api/users", userRouter);

app.listen(3001, () => {
  console.log("App listening on http://localhost:3001");
});
