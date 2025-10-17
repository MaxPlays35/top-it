import {Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";

type TodoDTO = {
    name: string
    description: string
    done: boolean
}


export function TodoView(props: {todo: TodoDTO}) {

    return (
        <Card className="w-full max-w-sm">
            <CardHeader>
                <CardTitle>{props.todo.name}</CardTitle>
            </CardHeader>
            <CardContent>
                {props.todo.description}
            </CardContent>
        </Card>
    )
}