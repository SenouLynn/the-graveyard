import { Link } from "@remix-run/react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Table } from "~/components/table/Table";

export default function UserList() {
  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["userList"],
    queryFn: () =>
      fetch("http://localhost:3001/api/users/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => res.json()),
  });

  const { mutate } = useMutation({
    mutationFn: (newUser) =>
      fetch("http://localhost:3001/api/users/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "All Info",
          phone: "1234",
          firstName: "First",
          lastName: "Last",
          abbreviation: "FL",
          dob: "",
        }),
      }).then((res) => res.json()),
    onSettled: () => refetch(),
  });

  console.log(data);
  return (
    <div>
      <Table
        data={[...(data?.payload || [])]}
        columns={[
          {
            id: "info",
            header: "Info",
            columns: [
              {
                id: "firstName",
                accessorFn: (row) => row.firstName,
                cell: (info) => (
                  <Link to={`/user/${info.row.original.id}`}>
                    {info.getValue()}
                  </Link>
                ),
                header: () => <span>First Name</span>,
              },
              {
                accessorFn: (row) => row.info.lastName,
                id: "lastName",
                cell: (info) => info.getValue(),
                header: () => <span>Last Name</span>,
              },
            ],
          },
          {
            id: "contact",
            header: "Contact",
            columns: [
              {
                accessorKey: "email",
                header: () => "Email",
                accessorFn: (row) => row.contact?.email,
              },
              {
                accessorKey: "phone",
                header: () => "Phone",
                accessorFn: (row) => row.contact?.phone,
              },
            ],
          },
        ]}
      />
      <button onClick={() => mutate()}>Create mock User</button>{" "}
    </div>
  );
}
