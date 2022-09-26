import express from "express";
import {
  createRoom,
  deleteRoom,
  getRoom,
  getRooms,
  updateRoom,
} from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

//create
router.post("/:hotelId", verifyAdmin, createRoom);

//update
router.put("/:id", verifyAdmin, updateRoom);
//delete
router.delete("/:id/:hotelId", verifyAdmin, deleteRoom);
//get
router.get("/:id", getRoom);
//getAll
router.get("/", getRooms);

export default router;
