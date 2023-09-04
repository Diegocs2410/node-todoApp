import { TODOS_URL } from "@/constants";
import { Todo } from "@/types";

export const getTodos = async (): Promise<Todo[]> => {
  const response = await fetch(TODOS_URL, {
    next: {
      revalidate: 1000,
    },
  });

  if (!response.ok) {
    throw new Error("Something went wrong!");
  }

  return response.json();
};
