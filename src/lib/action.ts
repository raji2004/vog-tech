import { LoginFormSchema } from "./definitions";
import { FormState } from "./types";
import prisma from '../lib/db/prisma'
import { redirect } from "next/navigation";

export async function signin(state:FormState,formData: FormData) {
    const validatedFields = LoginFormSchema.safeParse({
        email: formData.get('email'),
        password: formData.get('password'),
      })

      if (!validatedFields.success) {
        return {
          errors: validatedFields.error.flatten().fieldErrors,
        }
      }
    const {email,password} = validatedFields.data
    const user = await prisma.admin.findFirst({
        where:{
            email:email
        }
    })
    if (!user) {
        return {
          message: 'user not found.',
        }
      }
    if (user.password !== password) {
        return {
          message: 'password is incorrect.',
        }
      }
     



}

