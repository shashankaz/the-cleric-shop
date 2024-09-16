import Wishlist from "@/utils/models/wishlist";
import { connectToDB } from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    let wishlist = await Wishlist.findOne({ userId: params.id });

    if (!wishlist) {
      wishlist = new Wishlist({ userId: params.id, items: [] });
      await wishlist.save();
      return NextResponse.json(
        { message: "Wishlist is empty", wishlist },
        { status: 200 }
      );
    }

    if (wishlist.items.length === 0) {
      return NextResponse.json(
        { message: "Wishlist is empty", wishlist },
        { status: 200 }
      );
    }

    return NextResponse.json({ wishlist }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};

export const POST = async (request, { params }) => {
  try {
    await connectToDB();

    const { _id, name, price } = await request.json();

    if (!_id || !name || !price) {
      return NextResponse.json(
        { error: "Invalid product data" },
        { status: 400 }
      );
    }

    let wishlist = await Wishlist.findOne({ userId: params.id });

    if (!wishlist) {
      wishlist = new Wishlist({ userId: params.id, items: [] });
    }

    const itemExists = wishlist.items.some((item) => item.product._id === _id);

    if (!itemExists) {
      wishlist.items.push({
        product: { _id, name, price },
      });
      await wishlist.save();
      return NextResponse.json(
        { message: "Item added to wishlist", wishlist },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { message: "Item already in wishlist", wishlist },
        { status: 200 }
      );
    }
  } catch (error) {
    console.error("Error in POST /api/wishlist:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};

export const DELETE = async (request, { params }) => {
  try {
    await connectToDB();

    const { productId } = await request.json();

    let wishlist = await Wishlist.findOne({ userId: params.id });

    if (!wishlist) {
      return NextResponse.json(
        { error: "Wishlist not found" },
        { status: 404 }
      );
    }

    wishlist.items = wishlist.items.filter(
      (item) => item.product._id.toString() !== productId
    );

    await wishlist.save();

    return NextResponse.json(
      { message: "Item removed from wishlist", wishlist },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};
