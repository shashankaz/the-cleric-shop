import Newsletter from "@/utils/models/newsletter";
import { connectToDB } from "@/utils/db";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    await connectToDB();

    const { email } = await request.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    const existingSubscription = await Newsletter.findOne({ email });
    if (existingSubscription) {
      return NextResponse.json(
        { message: "Email already subscribed" },
        { status: 409 }
      );
    }

    const newSubscription = new Newsletter({ email });
    await newSubscription.save();

    return NextResponse.json(
      { message: "Thanks for Subscribing!" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};
