import { getTodos } from "@/utils/getTodos";
import React from "react";
import TodosList from "./TodosList";
import Link from "next/link";

const Todos = async () => {
  const todos = await getTodos();

  return (
    <>
      <Link
        href="/new"
        className="bg-gray-100 hover:scale-95 inline-block font-semibold text-slate-800 text-lg p-2 mb-4 rounded-lg hover:bg-gray-300 transition-all duration-300"
      >
        Create Todo
      </Link>
      <TodosList todos={todos} />
    </>
  );
};

export default Todos;
