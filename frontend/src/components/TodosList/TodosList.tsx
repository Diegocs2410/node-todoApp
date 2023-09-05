import { ITodosListProps } from "@/types";
import React from "react";
import CardTodo from "../CardTodo";

const TodosList = ({ todos }: ITodosListProps) => {
  return (
    <div className="grid gap-2 grid-cols-3 max-w-7xl mx-auto lg:grid-cols-4">
      {todos?.map((todo) => (
        <CardTodo todo={todo} key={todo._id} />
      ))}
    </div>
  );
};

export default TodosList;
