import { ITodosListProps } from "@/types";
import React from "react";

const TodosList = ({ todos }: ITodosListProps) => {
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo._id}>
          <h3>{todo.title}</h3>
          <p>{todo.description}</p>
          <p>{new Date(todo.created_at).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  );
};

export default TodosList;
