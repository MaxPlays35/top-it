import Link from "next/link";
import {Input} from "@/components/ui/input";
import {Plus} from "lucide-react";
import {Button} from "@/components/ui/button";
import {CreateDialog} from "@/components/create";
import {Todo} from "@/components/todo";

type TodoDTO = {
    name: string
    description: string
    done: boolean
}

const todos: TodoDTO[] = [
    {
        name: "Todo1",
        description: "Desc",
        done: false,
    },
    {
        name: "Todo2",
        description: "Asc",
        done: false,
    }
]

export default function HomePage() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center space-y-2">
            <div className="text-3xl">
                TODO App
            </div>
            <div className="flex flex-col">
                <div className="flex flex-row">
                    <Input placeholder="Seach an item"/>
                    <CreateDialog/>
                </div>
                <div className="flex flex-col">
                    {
                        todos.map((item, idx) =>
                            <Todo todo={item} key={idx}/>)
                    }
                </div>
            </div>
		</main>
	);
}
