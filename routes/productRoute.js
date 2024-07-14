import express from "express";
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";
import { createCategoryController } from "../controllers/categoryController.js";
import {
  createProductController,
  deleteProductController,
  getProductController,
  getSingleProductController,
  ProductPhotoController,
  updateProductController,
} from "../controllers/productController.js";
import formidable from "express-formidable";

const router = express.Router();

//route
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);

//get products
router.get("/get-product", getProductController);

//single product
router.get("/get-product/:slug", getSingleProductController);

//get photo
router.get("/product-photo/:pid", ProductPhotoController);

//delete product
router.delete("/delete-product/:pid", deleteProductController);

//update product
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);
export default router;
