import Product from "@/utils/models/product";
import { connectToDB } from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    await connectToDB();

    const products = await Product.find({});

    return NextResponse.json({ products }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};

export const POST = async (request) => {
  try {
    await connectToDB();

    const productData = await request.json();

    const {
      title,
      price,
      description,
      shortDescription,
      images,
      colors,
      sizes,
      category,
      brand,
      isFeatured,
    } = productData;

    const newProduct = new Product({
      title,
      price,
      description,
      shortDescription,
      images,
      colors,
      sizes,
      category,
      brand,
      isFeatured,
    });

    await newProduct.save();

    return NextResponse.json({ product: newProduct }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};
