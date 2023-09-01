export interface Todo {
  _id: string;
  title: string;
  description: string;
  done: boolean;
  created_at: string;
  __v: number;
}

export interface ITodosListProps {
  todos: Todo[];
}
