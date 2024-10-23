import User from "@/models/user.model"
import connect from "@/utils/db"
import { NextResponse } from "next/server"

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
        console.log("========> User Created successfully");
        return new NextResponse("User created", { status: 200 });
    } catch (error) {
        console.log("failed to save user");
        return new NextResponse("Failed to create user", { status: 500 });
    }
}
