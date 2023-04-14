import express  from "express";


import getAllCategories from "../controller/categoryController.js"
import getOneCategory from "../controller/categoryController.js"
import createCategory from "../controller/categoryController.js"
import updateCategory from "../controller/categoryController.js"
import deleteCategory from "../controller/categoryController.js"


const router = express.Router();

router.get('/categories', getAllCategories.getAllCategories);
router.get('/categories/:id', getOneCategory.getOneCategory);
router.post('/categories', createCategory.createCategory);
router.patch('/categories/:id', updateCategory.updateCategory);
router.delete('/categories/:id', deleteCategory.deleteCategory);


export default router;