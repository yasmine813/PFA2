import express from "express";
import { register } from "../controllers/authentification.js";
import {login} from "../controllers/authentification.js";
const router=express.Router();


router.post("/register",register)
router.post("/login",login)

export default router 