import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

export default function QueryExample() {
  const [title, setTitle] = useState("");
  const { mutate } = useMutation<{ title: string }>({
    /** Network call constructions */
    mutationFn: () => axios.post("/api/todos", { title }),

    /** Lifecycle handling methods */
    onSuccess: (data, variables, context) => {
      console.log("Data", data, variables, context);
    },
    onError: (error, variables, context) => {
      console.log("Error", error, variables, context);
    },
    onSettled: (data, error, variables, context) => {
      console.log("Settled", data, error, variables, context);
    },
  });

  /** Execute network call */
  const onSubmit = () => {
    mutate();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}
