import mongoose from "mongoose";

const { Schema } = mongoose;

const cartSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    items: [
      {
        product: {
          _id: {
            type: String,
            required: true,
          },
          name: {
            type: String,
            required: true,
          },
          price: {
            type: Number,
            required: true,
          },
          size: {
            type: String,
            required: true,
          },
          color: {
            type: String,
            required: true,
          },
          freeDelivery: {
            type: Boolean,
            required: true,
          },
        },
        quantity: {
          type: Number,
          required: true,
          min: 1,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Cart = mongoose.models.Cart || mongoose.model("Cart", cartSchema);

export default Cart;
