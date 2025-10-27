import express from "express";
import * as authController from "../controller/authController.js"
import * as restoranController from "../controller/restoranController.js";
import * as profileController from "../controller/profileController.js";
import { protect } from "../middlewares/authMiddleware.js";

const api = express.Router();

api.post('/register', authController.register);
api.post('/login', authController.login);

api.get("/restoran", restoranController.listRestoran)
api.get("/restoran/:id", restoranController.listRestoran)
api.post("/restoran", restoranController.createRestoran)
api.put("/restoran/:id", restoranController.updateRestoran)
api.delete("/restoran/:id", restoranController.deleteRestoran)

api.get('/me', protect, profileController.privateProfile)

export default api