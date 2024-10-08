import mongoose from "mongoose";

const { Schema } = mongoose;

const imageSchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  src: {
    type: String,
    required: true,
  },
});

const productSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    oldPrice: {
      type: Number,
      default: null,
    },
    description: {
      type: String,
      required: true,
    },
    images: [imageSchema],
    colors: {
      type: [String],
      required: true,
    },
    sizes: {
      type: [String],
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    subcategory: {
      type: String,
      default: null,
    },
    tags: {
      type: [String],
      default: [],
    },
    brand: {
      type: String,
      default: null,
    },
    stock: {
      type: Number,
      required: true,
      default: 100,
    },
    views: {
      type: Number,
      default: 0,
    },
    shipping: {
      freeShipping: {
        type: Boolean,
        default: true,
      },
      returnPolicy: {
        type: Boolean,
        default: true,
      },
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    isOnSale: {
      type: Boolean,
      default: false,
    },
    saleEndDate: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
