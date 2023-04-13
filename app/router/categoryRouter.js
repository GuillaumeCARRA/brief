import express  from "express";

import getCategory from "../controller/categoryController.js";

const router = express.Router();

router.get('/category', getCategory);

export default router;