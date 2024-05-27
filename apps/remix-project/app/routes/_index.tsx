import type { MetaFunction } from "@remix-run/node";
import { useEffect, useState } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("http://localhost:3001/api/hello-world")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  console.log("Response", data);
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix</h1>
      <ul>
        <li></li>
        <li></li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/docs"
            rel="noreferrer"
            className="text-black"
          >
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
