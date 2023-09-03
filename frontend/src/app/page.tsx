import { TodoCreate } from "@/components/TodoCreate";
import { Todos } from "@/components/TodosList";

export default function Home() {
  return (
    <main className="h-screen">
      <Todos />
      <TodoCreate />
    </main>
  );
}
