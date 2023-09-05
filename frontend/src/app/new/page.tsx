'use client'
import todosApi from '@/axios'
import { TODOS_INITIAL_STATE, TODOS_URL } from '@/constants'
import Link from 'next/link'
import React, { useState } from 'react'

const TodoCreate = () => {
  const [todoData, setTodoData] = useState(TODOS_INITIAL_STATE)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { title, description } = todoData
    try {
      await todosApi.post(TODOS_URL, {
        title,
        description,
      })
      setTodoData({
        title: '',
        description: '',
      })
      setTodoData(TODOS_INITIAL_STATE)
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTodoData({
      ...todoData,
      [target.name]: target.value,
    })
  }

  return (
    <div className="mt-5 p-2 flex justify-center items-center flex-col h-screen ">
      <h2 className="text-2xl uppercase">Create a new todo</h2>
      <form
        className="w-80 bg-gray-200 p-6 rounded-xl shadow-lg text-gray-700 mt-4"
        onSubmit={handleSubmit}
      >
        <div className="mb-3 flex flex-col">
          <label htmlFor="title" className="text-gray-600">
            Title
          </label>
          <input
            type="text"
            className=" p-2 text-gray-500 font-sans mt-2 shadow-sm rounded-lg"
            name="title"
            id="title"
            onChange={handleChange}
            value={todoData.title}
            required
          />
        </div>
        <div className="mb-3 flex flex-col">
          <label htmlFor="description" className="text-gray-600">
            Description
          </label>
          <textarea
            onChange={handleChange}
            className=" p-2 text-gray-500 font-sans mt-2 shadow-sm rounded-lg h-32"
            name="description"
            id="description"
            value={todoData.description}
            required
          />
        </div>
        <button
          type="submit"
          className="p-2 bg-blue-500 text-white font-semibold rounded-lg w-full hover:scale-95 transition-all duration-300"
        >
          Create
        </button>
      </form>
      <Link
        href="/"
        className="bg-gray-100 p-3 text-center rounded-lg font-semibold text-slate-800 mt-5 transition-all duration-300 hover:bg-gray-400 hover:scale-95 inline-block"
      >
        Back main
      </Link>
    </div>
  )
}

export default TodoCreate
