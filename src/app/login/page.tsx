'use client';
import { LoginForm } from "@/components/form";

// import { useFormState } from "react-dom";
// import { signin } from "@/lib/action";


export default function Page() {
    // const [state, action, pending] = useFormState(signin, undefined)
 
    return (
        <div className=" h-dvh p-section-padding-sm md:p-section-padding ">
            <LoginForm />
        </div>
    )
}