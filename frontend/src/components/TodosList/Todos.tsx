import { getTodos } from "@/utils/getTodos";
import React from "react";
import TodosList from "./TodosList";
import Link from "next/link";

const Todos = async () => {
  const todos = await getTodos();

  return (
    <>
      <Link href="/new">Create Todo</Link>
      <TodosList todos={todos} />
    </>
  );
};

export default Todos;
