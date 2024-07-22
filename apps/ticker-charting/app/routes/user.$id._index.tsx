import { useParams } from "@remix-run/react";
import { useQuery } from "@tanstack/react-query";

export default function UserDetail() {
  const { id } = useParams();

  const { data } = useQuery({
    queryKey: ["user", id],
    queryFn: async () => {
      const response = await fetch(`http://localhost:3001/api/users/${id}`);
      return response.json();
    },
  });
  return <div>{JSON.stringify(data)}</div>;
}
