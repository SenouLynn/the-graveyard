import remix from "@remix-run/express";
import { type ServerBuild } from "@remix-run/node";
import cors from "cors";
import express from "express";

const viteDevServer =
  process.env.NODE_ENV === "production"
    ? null
    : await import("vite").then((vite) =>
        vite.createServer({ server: { middlewareMode: true } })
      );

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

app.all(
  "*",
  remix.createRequestHandler({
    build: viteDevServer
      ? () =>
          viteDevServer.ssrLoadModule(
            "virtual:remix/server-build"
          ) as Promise<ServerBuild>
      : async () => {
          const build = await import("./build/server/index.js");
          return build as unknown as ServerBuild;
        },
  })
);

app.listen(3040, () => {
  console.log("App listening on http://localhost:3001");
});
