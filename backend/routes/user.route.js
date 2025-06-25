import express from "express";
import {
  register,
  Login,
  Logout,
  updateProfile,
} from "../controllers/user.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { singleUpload } from "../middlewares/multer.js";

const router = express.Router();

router.post("/register", singleUpload, register);
router.post("/Login", Login);
router.post("/profile/update", isAuthenticated, updateProfile);
router.get("/logout", Logout);

export default router;
