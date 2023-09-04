import { TodoCreate } from "@/app/new";
import { Todos } from "@/components/TodosList";

export default function Home() {
  return (
    <main className="h-screen p-10">
      <Todos />
    </main>
  );
}
