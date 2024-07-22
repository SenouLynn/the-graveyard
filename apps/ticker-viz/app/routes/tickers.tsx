import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Table } from "~/components/table/Table";

function DeleteTicker(props: {
  id: string;
  onSubmit?: (props?: { message: string }) => void;
}) {
  const { mutate } = useMutation({
    mutationFn: async () => {
      const res = await fetch(
        "http://localhost:3001/api/tickers/" + props.id + "/delete",
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return res.json();
    },
    onSettled: (data) => {
      props?.onSubmit?.({ message: data.message });
    },
  });
  return <button onClick={() => mutate()}>Delete</button>;
}

function EditTicker(props: {
  initialValue: string;
  id: string;
  field: string;
  onSubmit?: () => void;
}) {
  const [editing, setEditing] = useState(false);
  const [val, setVal] = useState(props.initialValue);

  const { mutate } = useMutation({
    mutationFn: async (vals: any) => {
      console.log(vals);
      const res = await fetch(
        "http://localhost:3001/api/tickers/" + props.id + "/info/edit",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(vals),
        }
      );
      return res.json();
    },
    onSettled: () => {
      props?.onSubmit?.();
    },
  });
  return (
    <>
      <input
        value={val}
        onChange={(e) => setVal(e.target.value)}
        onFocus={() => setEditing(true)}
      />
      {editing && (
        <button
          onClick={() =>
            mutate({
              id: props.id,
              [props.field]: val,
            })
          }
        >
          Submit
        </button>
      )}
    </>
  );
}
function CreateTicker(props: { onSubmit?: () => void }) {
  const [submitState, setSubmitState] = useState({
    symbol: "",
    name: "",
    exchange: "",
  });
  const { mutate, data } = useMutation({
    mutationFn: async () => {
      const res = await fetch("http://localhost:3001/api/tickers/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          symbol: submitState.symbol,
          name: submitState.name,
          exchange: submitState.exchange,
        }),
      });
      return res.json();
    },
    onSettled: () => {
      props?.onSubmit?.();
    },
  });
  return (
    <div>
      <h3>Create Ticker</h3>
      {data?.message && <code>{data?.message}</code>}
      <div className="grid grid-cols-3 gap-3 divide-x border rounded-sm p-3">
        <span>
          <label htmlFor="symbol">Symbol</label>
          <input
            className="border rounded-sm px-2 py-1"
            id="symbol"
            name="symbol"
            type="text"
            value={submitState.symbol}
            onChange={(e) =>
              setSubmitState((prev) => ({
                ...prev,
                symbol: e.target.value,
              }))
            }
          />
        </span>{" "}
        <span>
          <label htmlFor="symbol">Name</label>
          <input
            className="border rounded-sm px-2 py-1"
            id="name"
            name="name"
            type="text"
            value={submitState.name}
            onChange={(e) =>
              setSubmitState((prev) => ({
                ...prev,
                name: e.target.value,
              }))
            }
          />
        </span>{" "}
        <span>
          <label htmlFor="symbol">Exchange</label>
          <input
            className="border rounded-sm px-2 py-1"
            id="exchange"
            name="exchange"
            type="text"
            value={submitState.exchange}
            onChange={(e) =>
              setSubmitState((prev) => ({
                ...prev,
                exchange: e.target.value,
              }))
            }
          />
        </span>
      </div>

      <button onClick={() => mutate()}> Submit</button>
    </div>
  );
}
export default function Tickers() {
  const { data, refetch } = useQuery({
    queryKey: ["tickerList"],
    queryFn: async () => {
      const res = await fetch("http://localhost:3001/api/tickers");
      return res.json();
    },
  });

  return (
    <div>
      <h1>Tickers</h1>
      <CreateTicker onSubmit={() => refetch()} />

      <hr></hr>
      {data?.message && <code>{data?.message}</code>}
      <Table
        data={[...(data?.payload || [])]}
        columns={[
          {
            id: "name",
            accessorFn: (row) => row?.info?.name,
            cell: ({ row }) => (
              <EditTicker
                id={row.original.id}
                field={"name"}
                initialValue={row.original.info.name}
              />
            ),
          },
          {
            id: "symbol",
            accessorFn: (row) => row?.info?.symbol,
          },
          {
            id: "exchange",
            accessorFn: (row) => row?.info?.exchnage,
          },
          {
            id: "action",
            cell: ({ row }) => {
              const id = row.original.id;
              return (
                <DeleteTicker
                  id={id}
                  onSubmit={(props) => {
                    refetch();
                    console.log(props);
                  }}
                />
              );
            },
          },
        ]}
      />
    </div>
  );
}
