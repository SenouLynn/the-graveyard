import cors from "cors";
import express from "express";

const app = express();

app.use(
  cors({
    origin: "*", //allow cross-origin cross-talk (for dev purposes)
  })
);

app.get("/api/hello-world", (req, res) => {
  console.log("Fetching: /api/hello-world");
  res.send({ payload: "hello world" });
});

app.listen(3001, () => {
  console.log("App listening on http://localhost:3001");
});
