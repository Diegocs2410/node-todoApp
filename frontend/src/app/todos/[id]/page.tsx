import todosApi from "@/axios";
import CardTodo from "@/components/CardTodo";
import { TODOS_URL } from "@/constants";
import { ITodo } from "@/types";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Link from "next/link";
import React from "react";

const getTodos = async ({ id }: { id: string }) => {
  const { data } = await todosApi.get<ITodo>(`${TODOS_URL}/${id}`);
  return data;
};
const Todo = async ({ params }: { params: Params }) => {
  const { id } = params;
  const todo = await getTodos({ id });
  return (
    <>
      <CardTodo todo={todo} />
      <Link
        href="/"
        className="bg-slate-200 p-4 text-center text-gray-800 font-semibold mt-6 inline-block rounded-lg hover:bg-slate-300 transition-all duration-300"
      >
        Back
      </Link>
    </>
  );
};

export default Todo;
