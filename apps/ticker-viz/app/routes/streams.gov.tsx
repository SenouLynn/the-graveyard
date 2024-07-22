import { TableChartTemplate } from "~/components/templates/TableChart";

export default function GovStream() {
  return (
    <div>
      <div>
        <TableChartTemplate
          id="debt_to_penny"
          title="Debt to Penny"
          endpoint={"http://localhost:3001/api/streams/gov/debt_to_penny"}
        />
      </div>
    </div>
  );
}
