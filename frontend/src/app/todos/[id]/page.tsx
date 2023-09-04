import Link from "next/link";
import React from "react";

const Todo = () => {
  return (
    <>
      <p>Todo</p>
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
