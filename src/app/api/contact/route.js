import Contact from "@/utils/models/contact";
import { connectToDB } from "@/utils/db";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    await connectToDB();

    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const newMessage = new Contact({ name, email, message });

    await newMessage.save();

    return NextResponse.json(
      { message: "Thanks for contacting us" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};
