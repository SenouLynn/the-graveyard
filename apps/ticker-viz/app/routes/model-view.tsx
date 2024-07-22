import { MyResponsiveNetwork } from "~/components/charts/TickerView";

export default function ModelView() {
  const _done = async () => {
    const res = await fetch(
      "http://localhost:3001/api/streams/gov/debt_to_penny"
    );

    console.log("res", res);
  };
  return (
    <div>
      <button onClick={_done}>Test</button>
      <MyResponsiveNetwork />
    </div>
  );
}
