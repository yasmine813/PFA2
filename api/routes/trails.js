import express from "express";
import Trail from "../models/trail.js"; // Importez la classe `Trail` depuis le fichier `trail.js`
import  {createTrail, deleteTrail, getTrail, getTrails, updateTrail} from "../controllers/trail.js"

const router = express.Router();

//CREATE
router.post("/", createTrail);

//UPDATE
router.put("/:id", updateTrail);


//DELETE
router.delete("/:id", deleteTrail);

//GET
router.get("/:id", getTrail);
//GET ALL
router.get("/", getTrails);
export default router;
