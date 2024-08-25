'use client';
import { LoginForm } from "@/components/form";
import { useActionState } from "react";
import { signin } from "@/lib/action";


export default function Page() {
    const [state, action, pending] = useActionState(signin, undefined)
 
    return (
        <div className=" h-dvh p-section-padding-sm md:p-section-padding ">
            <LoginForm state={state} action={action} pending={pending} />
        </div>
    )
}