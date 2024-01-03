// Actions must be use server
"use server"
import * as z from "zod";
import { LoginSchema } from "@/schemas";

export const login = async (values: z.infer<typeof LoginSchema>) => {
    // Validate fields
    const validatedFields = LoginSchema.safeParse(values);

    // If fields are not valid
    if(!validatedFields.success) {
        return { error: "Invalid fields 😞"};
    }
    // If fields are valid
    return { success: "Email sent 📫"}
};