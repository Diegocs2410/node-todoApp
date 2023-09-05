"use client";
import Link from "next/link";
import React from "react";
import { ITodo } from "@/types/index";
const CardTodo = ({ todo }: { todo: ITodo }) => {
  return (
    <Link
      href={`/todos/${todo._id}`}
      key={todo._id}
      className="bg-gray-500 text-slate-200 p-4 hover:bg-slate-600 transition-all duration-300 rounded-lg "
    >
      <h3>{todo.title}</h3>
      <p>{todo.description}</p>
      <p>{new Date(todo.created_at).toLocaleDateString()}</p>
    </Link>
  );
};

export default CardTodo;
