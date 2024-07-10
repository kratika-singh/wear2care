import express from "express";
import { isAdmin, requireSignIn } from "./../middleware/authMiddleware.js";
import {
  categoryController,
  createCategoryController,
  deleteCategoryController,
  SingleCategoryController,
  updateCategoryController,
} from "../controllers/categoryController.js";
import categoryModel from "../models/categoryModel.js";

const router = express.Router();

//route
//create category
router.post(
  "/create-catergory",
  requireSignIn,
  isAdmin,
  createCategoryController
);

//update category
router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategoryController
);

//getAll category

router.get("/get-category", categoryController);

//single category
router.get("/single-category/:slug", SingleCategoryController);

//delete Category
router.delete(
  "/delete-category/:id",
  requireSignIn,
  isAdmin,
  deleteCategoryController
);

export default router;
