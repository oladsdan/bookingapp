import express from "express";
import Hotel from "../modals/Hotel.js";
import { createHotel, deleteHotel, getAllHotel, getHotelId, updatedHotel } from "../controllers/hotelsControllers.js";

const router = express.Router();

 //CREATE
 router.post("/", createHotel)
 //UPDATE
router.put("/:id", updatedHotel ) 


 //DELETE
 router.delete("/:id", deleteHotel)


 //GET
 router.get("/:id", getHotelId)


 //GET ALL 

 router.get("/", getAllHotel)



export default router