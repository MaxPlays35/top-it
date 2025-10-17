"use client"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import {Plus} from "lucide-react";
import {z} from "zod";
import {Controller, useForm} from "react-hook-form";
import {Field, FieldDescription, FieldError, FieldGroup, FieldLabel} from "@/components/ui/field";
import {InputGroup, InputGroupAddon, InputGroupText, InputGroupTextarea} from "@/components/ui/input-group";

const formSchema = z.object({
    name: z.string().min(5),
    description: z.string().min(1),
    done: z.boolean()
})

type TodoDTO = {
    name: string
    description: string
    done: boolean
}

export function EditDialog(todo : TodoDTO) {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: todo.name,
            description: todo.description,
            done: todo.done
        }
    })

    async function onSubmit(form: z.infer<typeof formSchema>) {

    }

    return (
        <Dialog>
            <form>
                <DialogTrigger asChild>
                    <Button variant="outline" onClick={() => form.reset()}>
                        <Plus/>
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Create TODO</DialogTitle>
                        <DialogDescription>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, labore?
                        </DialogDescription>
                    </DialogHeader>
                    <form id="create-todo-form" onSubmit={form.handleSubmit(onSubmit)}>
                        <FieldGroup>
                            <Controller
                                name="name"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor="create-todo-form-name">
                                            Name
                                        </FieldLabel>
                                        <Input
                                            {...field}
                                            id="create-todo-form-name"
                                            aria-invalid={fieldState.invalid}
                                            placeholder="Name for TODO"
                                            autoComplete="off"
                                        />
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field>
                                )}
                            />
                            <Controller
                                name="description"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor="create-todo-form-description">
                                            Description
                                        </FieldLabel>
                                        <InputGroup>
                                            <InputGroupTextarea
                                                {...field}
                                                id="create-todo-form-description"
                                                placeholder="Such a good description"
                                                rows={6}
                                                className="min-h-24 resize-none"
                                                aria-invalid={fieldState.invalid}
                                            />
                                            <InputGroupAddon align="block-end">
                                                <InputGroupText className="tabular-nums">
                                                    {field.value.length}/100 characters
                                                </InputGroupText>
                                            </InputGroupAddon>
                                        </InputGroup>
                                        <FieldDescription>
                                            Some useful information for TODO
                                        </FieldDescription>
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field>
                                )}
                            />
                        </FieldGroup>
                    </form>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline" onClick={() => form.reset()}>Cancel</Button>
                        </DialogClose>
                        <Button type="submit">Save</Button>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
}
