import "./index.css";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

// const columns: ColumnDef<Person>[] = [
//   {
//     header: "Name",
//     footer: (props) => props.column.id,
//     columns: [
//       {
//         accessorKey: "firstName",
//         cell: (info) => info.getValue(),
//         footer: (props) => props.column.id,
//       },
//       {
//         accessorFn: (row) => row.lastName,
//         id: "lastName",
//         cell: (info) => info.getValue(),
//         header: () => <span>Last Name</span>,
//         footer: (props) => props.column.id,
//       },
//     ],
//   },
//   {
//     header: "Info",
//     footer: (props) => props.column.id,
//     columns: [
//       {
//         accessorKey: "age",
//         header: () => "Age",
//         footer: (props) => props.column.id,
//       },
//       {
//         header: "More Info",
//         columns: [
//           {
//             accessorKey: "visits",
//             header: () => <span>Visits</span>,
//             footer: (props) => props.column.id,
//           },
//           {
//             accessorKey: "status",
//             header: "Status",
//             footer: (props) => props.column.id,
//           },
//           {
//             accessorKey: "progress",
//             header: "Profile Progress",
//             footer: (props) => props.column.id,
//           },
//         ],
//       },
//     ],
//   },
// ];

export function Table<Row>({
  data,
  columns,
}: {
  data: Row[];
  columns: ColumnDef<Row>[];
}) {
  const table = useReactTable({
    data,
    columns,
    enableColumnResizing: true,
    columnResizeMode: "onChange",
    getCoreRowModel: getCoreRowModel(),
    debugTable: false,
    debugHeaders: false,
    debugColumns: false,
  });

  return (
    <div className="p-2 block max-w-full overflow-x-scroll overflow-y-hidden">
      <div className="h-2" />
      <table className="w-full ">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <th
                    key={header.id}
                    colSpan={header.colSpan}
                    style={{ position: "relative", width: header.getSize() }}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                    {header.column.getCanResize() && (
                      <div
                        onMouseDown={header.getResizeHandler()}
                        onTouchStart={header.getResizeHandler()}
                        className={`resizer ${
                          header.column.getIsResizing() ? "isResizing" : ""
                        }`}
                      ></div>
                    )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => {
            return (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td key={cell.id} style={{ width: cell.column.getSize() }}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="h-4" />
    </div>
  );
}
