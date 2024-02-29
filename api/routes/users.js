// Dans users.js
import express from "express";
import { updateUser, deleteUser, getUser, getUsers } from "../controllers/user.js"; // Assurez-vous d'ajouter .js à la fin du chemin
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/checkauthentification",verifyToken,(req,res,next)=>{
    res.send("hello users , you are logged in")
})
router.get("/checkuser/:id",verifyUser,(req,res,next)=>{
    res.send("hello users , you are logged in and you can delete your account")
})
router.get("/checkadmin/:id",verifyAdmin,(req,res,next)=>{
    res.send("hello Admin , you are logged in and you can delete all accounts")
})
//UPDATE
router.put("/:id", updateUser);

//DELETE
router.delete("/:id", deleteUser);

//GET
router.get("/:id", getUser);

//GET ALL
router.get("/", getUsers);

export default router;
