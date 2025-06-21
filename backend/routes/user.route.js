import express from "express";
import {
  register,
  Login,
  Logout,
  updateProfile,
} from "../controllers/user.controller.js";

const router = express.Router();

router.post("/register", register);
router.post("/Login", Login);
router.post("/profile/update", updateProfile);
router.get("/logout", Logout);

export default router;
