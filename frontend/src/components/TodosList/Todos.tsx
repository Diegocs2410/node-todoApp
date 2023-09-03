import { getTodos } from "@/utils/getTodos";
import React from "react";
import TodosList from "./TodosList";

const Todos = async () => {
  const todos = await getTodos();

  return (
    <>
      <TodosList todos={todos} />
    </>
  );
};

export default Todos;
