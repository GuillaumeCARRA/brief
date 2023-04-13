import express  from "express";

import getHomePage from "../controller/homePageController.js";

const router = express.Router();

router.get('/', getHomePage);

export default router;