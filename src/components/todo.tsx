import {Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import Link from "next/link";

type TodoDTO = {
    name: string
    description: string
    done: boolean
}


export function Todo(props: {todo: TodoDTO}) {
    return (
        <Card className="w-full max-w-sm">
            <CardHeader>
                <CardTitle>{props.todo.name}</CardTitle>
                <CardAction>
                    <Button variant="link">
                        <Link href={`/1`}>
                            View
                        </Link>
                        </Button>
                </CardAction>
            </CardHeader>
        </Card>
    )
}