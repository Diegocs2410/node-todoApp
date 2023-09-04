"use client";
import todosApi from "@/axios";
import { TODOS_INITIAL_STATE, TODOS_URL } from "@/constants";
import React, { useState } from "react";

const TodoCreate = () => {
  const [todoData, setTodoData] = useState(TODOS_INITIAL_STATE);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { title, description } = todoData;
    try {
      await todosApi.post(TODOS_URL, {
        title,
        description,
      });
      setTodoData({
        title: "",
        description: "",
      });
      setTodoData(TODOS_INITIAL_STATE);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTodoData({
      ...todoData,
      [target.name]: target.value,
    });
  };

  return (
    <div className="mt-5 p-2">
      <h2>Create a new todo</h2>
      <form className="w-80" onSubmit={handleSubmit}>
        <div className="mb-3 flex flex-col">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="ml-3 p-2 text-gray-500 font-sans rounded-sm"
            name="title"
            id="title"
            onChange={handleChange}
            value={todoData.title}
          />
        </div>
        <div className="mb-3 flex flex-col">
          <label htmlFor="description">Description</label>
          <textarea
            onChange={handleChange}
            className="ml-3 p-2 text-gray-500 font-sans rounded-sm"
            name="description"
            id="description"
            value={todoData.description}
          />
        </div>
        <button
          type="submit"
          className="p-2 bg-blue-500 text-white font-semibold rounded-lg"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default TodoCreate;
