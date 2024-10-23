import User from "@/models/user.model"
import connect from "@/utils/db"
import { NextResponse } from "next/server"
// import bcrypt from "bcryptjs"

export const POST = async (req: any) => {

    const { email, password } = await req.json()

    await connect()



    try {
        const newUser = await User.create({ email, password })
        await newUser.save()
        console.log("========> User Created succeddfully",)
        return new NextResponse("User created", { status: 200 })
    } catch (error: any) {
        console.log("faild to save user")
        return new NextResponse(error, { status: 500 })
    }



}
