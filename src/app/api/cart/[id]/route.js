import Cart from "@/utils/models/cart";
import { connectToDB } from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    let cart = await Cart.findOne({ userId: params.id });

    if (!cart) {
      cart = new Cart({ userId: params.id, items: [] });
      await cart.save();
      return NextResponse.json(
        { message: "Cart is empty", cart },
        { status: 200 }
      );
    }

    if (cart.items.length === 0) {
      return NextResponse.json(
        { message: "Cart is empty", cart },
        { status: 200 }
      );
    }

    return NextResponse.json({ cart }, { status: 200 });
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

    const { _id, name, price, size, color, freeDelivery, quantity } =
      await request.json();

    if (
      !_id ||
      !name ||
      !price ||
      !size ||
      !color ||
      typeof freeDelivery !== "boolean" ||
      !quantity
    ) {
      return NextResponse.json(
        { error: "Invalid product data" },
        { status: 400 }
      );
    }

    let cart = await Cart.findOne({ userId: params.id });

    if (!cart) {
      cart = new Cart({ userId: params.id, items: [] });
    }

    const itemIndex = cart.items.findIndex(
      (item) =>
        item.product._id === _id &&
        item.product.size === size &&
        item.product.color === color
    );

    if (itemIndex > -1) {
      cart.items[itemIndex].quantity += quantity;
    } else {
      cart.items.push({
        product: {
          _id,
          name,
          price,
          size,
          color,
          freeDelivery,
        },
        quantity,
      });
    }

    await cart.save();

    return NextResponse.json(
      { message: "Item added to cart", cart },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in POST /api/cart:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};

export const PATCH = async (request, { params }) => {
  try {
    await connectToDB();

    const { _id, quantity } = await request.json();

    if (!_id || typeof quantity !== "number" || quantity < 1) {
      return NextResponse.json(
        { error: "Invalid input data" },
        { status: 400 }
      );
    }

    let cart = await Cart.findOne({ userId: params.id });

    if (!cart) {
      return NextResponse.json({ error: "Cart not found" }, { status: 404 });
    }

    const itemIndex = cart.items.findIndex((item) => item.product._id === _id);

    if (itemIndex === -1) {
      return NextResponse.json(
        { error: "Item not found in cart" },
        { status: 404 }
      );
    }

    cart.items[itemIndex].quantity = quantity;

    await cart.save();

    return NextResponse.json(
      { message: "Item quantity updated", cart },
      { status: 200 }
    );
  } catch (error) {
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

    let cart = await Cart.findOne({ userId: params.id });

    if (!cart) {
      return NextResponse.json({ error: "Cart not found" }, { status: 404 });
    }

    cart.items = cart.items.filter(
      (item) => item.product._id.toString() !== productId
    );

    await cart.save();

    return NextResponse.json(
      { message: "Item removed from cart", cart },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};
