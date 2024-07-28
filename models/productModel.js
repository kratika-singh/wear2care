import mongoose from "mongoose";
import categoryModel from "./categoryModel.js";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    description: {
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
    brand: {
      type: String,
      required: true,
    },
    category: {
      type: mongoose.ObjectId,
      ref: "Catergory",
      required: true,
    },
    condition: {
      type: String,
      required: true,
    },
    photo: {
      data: Buffer,
      contentType: String,
    },

    donation: {
      type: Boolean,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Products", productSchema);
