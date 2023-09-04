import { ITodosListProps } from "@/types";
import Link from "next/link";
import React from "react";

const TodosList = ({ todos }: ITodosListProps) => {
  return (
    <div className="flex justify-between max-w-lg items-center w-full mx-auto gap-4 flex-wrap">
      {todos?.map((todo) => (
        <Link
          href={`/todos/${todo._id}`}
          key={todo._id}
          className="bg-gray-500 text-slate-200 p-4 hover:bg-slate-600 transition-all duration-300 rounded-lg "
        >
          <h3>{todo.title}</h3>
          <p>{todo.description}</p>
          <p>{new Date(todo.created_at).toLocaleDateString()}</p>
        </Link>
      ))}
    </div>
  );
};

export default TodosList;
