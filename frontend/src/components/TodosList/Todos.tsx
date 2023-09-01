import { getTodos } from "@/utils/getTodos";
import React from "react";
import TodosList from "./TodosList";

const Todos = async () => {
  const todos = await getTodos();

  return (
    <main>
      <TodosList todos={todos} />
    </main>
  );
};

export default Todos;
