"use client";
import { TODOS_URL } from "@/constants";
import React, { useState } from "react";

const TodoCreate = () => {
  const [todoData, setTodoData] = useState({
    title: "",
    description: "",
  });
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { title, description } = todoData;
    try {
      const res = await fetch(TODOS_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
        }),
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTodoData({
      ...todoData,
      [e.target.name]: e.target.value,
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
          />
        </div>
        <div className="mb-3 flex flex-col">
          <label htmlFor="description">Description</label>
          <textarea
            onChange={handleChange}
            className="ml-3 p-2 text-gray-500 font-sans rounded-sm"
            name="description"
            id="description"
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
