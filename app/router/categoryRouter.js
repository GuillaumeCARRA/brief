import express  from "express";


import getAllCategories from "../controller/categoryController.js"
import getOneCategory from "../controller/categoryController.js"
import createCategory from "../controller/categoryController.js"

const router = express.Router();


router.get('/categories', getAllCategories.getAllCategories);
router.get('/categories/:id', getOneCategory.getOneCategory);
router.post('/categories', createCategory.createCategory);

export default router;