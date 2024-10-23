import User from "@/models/user.model";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

interface RequestBody {
    email: string;
    password: string;
}

export const POST = async (req: Request) => {
    const { email, password }: RequestBody = await req.json();

    await connect();

    try {
        const newUser = await User.create({ email, password });
        await newUser.save();
        return new NextResponse("User created", { status: 200 });
    } catch (error: unknown) {
        // Check if error is an instance of Error to safely access the message
        if (error instanceof Error) {
            return new NextResponse(error.message, { status: 500 });
        }
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}
