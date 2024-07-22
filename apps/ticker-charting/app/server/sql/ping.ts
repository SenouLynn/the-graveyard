import express, { Request, Response, Router } from "express";

const router: Router = express.Router();

router.get("/hello-world", (req: Request, res: Response) => {
  console.log("Fetching: /api/test/hello-world");
  res.send({ status: "success", message: "hello world" });
});

router.get("/login", (req: Request, res: Response) => {
  console.log("Fetching: /api/login");
  res.send({ status: "success" });
});

router.get("/get", (req: Request, res: Response) => {
  console.log("Fetching: /api/test/get");
  res.send({ status: "success", message: "GET request received" });
});

router.post("/post", (req: Request, res: Response) => {
  console.log("Fetching: /api/test/post");
  res.send({ status: "success", message: "POST request received" });
});

router.put("/put", (req: Request, res: Response) => {
  console.log("Fetching: /api/test/put");
  res.send({ status: "success", message: "PUT request received" });
});

router.delete("/delete", (req: Request, res: Response) => {
  console.log("Fetching: /api/test/delete");
  res.send({ status: "success", message: "DELETE request received" });
});

export default router;
