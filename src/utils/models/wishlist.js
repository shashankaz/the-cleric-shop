import mongoose from "mongoose";

const { Schema } = mongoose;

const wishlistSchema = new Schema({
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
      },
    },
  ],
  addedAt: {
    type: Date,
    default: Date.now,
  },
});

const Wishlist =
  mongoose.models.Wishlist || mongoose.model("Wishlist", wishlistSchema);

export default Wishlist;
