import type { MetaFunction } from "@remix-run/node";
import { useEffect, useState } from "react";
import { MyResponsiveNetwork } from "~/components/charts/ModelView";

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

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <MyResponsiveNetwork />
    </div>
  );
}
