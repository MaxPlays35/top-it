import {Input} from "@/components/ui/input";
import {CreateDialog} from "@/components/create";
import {TodoView} from "@/components/todoView";

type TodoDTO = {
    name: string
    description: string
    done: boolean
}

export default function TodoPage() {
    const todo: TodoDTO = {
        name: "Test",
        description: "Test",
        done: false
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-center space-y-2">
            <div className="text-3xl">
                TODO App
            </div>
            <TodoView todo={todo}/>
        </main>
    );
}
