import Image from "next/image";
import { H2, P } from "@/components/typography";
import { Input } from "@/components/input";
import { Button } from "@/components/button";
import { CheckBox } from "@/components/input";
import Link from "next/link";

export const LoginForm = () => {
    return (
        <form className=" flex flex-col justify-between space-y-8 items-center">
            <Image
                src={'/icon/user.svg'}
                alt="user"
                width={300}
                height={300}
                className=" w-36 h-auto"
            />
            <H2>Sign in</H2>
            <div className=" md:w-[40%] space-y-8 ">
                <Input type="email" placeholder="Enter your email" label="Email address" />
                <Input type="password" placeholder="Enter your password" label="Password" />
            </div>
            <div className="flex flex-col md:flex-row ml-8 md:ml-0 space-y-2 self-start md:self-center md:w-[40%] justify-between">
                <CheckBox label="Remember me" />
                <Link href="/forgot-password" className="text-primary">
                    Forgot password?
                </Link>
            </div>

            <Button className=" rounded-3xl px-9">Sign in</Button>

        </form>
    )
}
export const ForgotForm = () => {
    return (
        <form className="  flex flex-col justify-between space-y-8 items-center">
            <Image
                src={'/icon/user.svg'}
                alt="user"
                width={300}
                height={300}
                className=" w-36 h-auto"
            />
            <H2>Forgot Password</H2>
            <div className=" md:w-[40%]  ">
                <Input type="email" placeholder="Enter your email" label="Email address" />
            </div>

            <Button className=" rounded-3xl px-9">Send Reset Link</Button>

        </form>
    )
}