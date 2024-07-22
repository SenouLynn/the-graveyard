import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import TimeLineChart from "~/components/chart/TimeLineChart";
import { Table } from "~/components/table/Table";

type returnType<
  ExpectedModel extends Record<string, string | number | null | undefined>,
> = {
  message: string;
  payload: {
    data: ExpectedModel[];
    meta: unknown;
    columns: Array<{
      label: string;
      format: string;
      type: string;
      field: keyof ExpectedModel;
    }>;
  };
};

export const TableChartTemplate = <T extends Record<string, string>>(props: {
  id: string;
  title: string;
  endpoint: string;
}) => {
  const { title, id, endpoint } = props;

  const [timeSeriesChart, setTimeSeriesChart] = useState({
    x: "record_date",
    y: "tot_pub_debt_out_amt",
  });

  //Fetch data for generic api endpoint
  const { data } = useQuery<returnType<T>>({
    queryKey: [id],
    queryFn: async () => {
      const res = await fetch(endpoint);
      return res.json();
    },
    initialData: {
      message: "Loading...",
      payload: {
        data: [],
        meta: {},
        columns: [],
      },
    },
  });

  const { message, payload } = data;

  return (
    <>
      <h2>{title}</h2>
      {message && <code>{message}</code>}
      <TimeLineChart
        height={"50vh"}
        dataSets={[
          {
            id: "debt_held_public_amt",
            color: "red",
            data: data.payload.data.map((d) => ({
              x: d[timeSeriesChart.x],
              y: parseInt(d[timeSeriesChart.y]),
            })),
          },
        ].sort((a, b) => a.id.localeCompare(b.id))}
      />
      <Table
        data={[...data.payload.data]}
        columns={payload.columns?.map((c) => ({
          id: c.field,
          accessorKey: c.field,
          accessorFn: (row) => row[c.field],
          header: (row) => (
            <div>
              {c.label}{" "}
              <button
                onClick={() =>
                  setTimeSeriesChart((prev) => ({
                    ...prev,
                    y: c.field,
                  }))
                }
              >
                Chart
              </button>
            </div>
          ),
        }))}
      />
    </>
  );
};
