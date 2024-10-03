//ENRUTADOR PRINCIPAL para ello express ya cuenta con su propio router
import { Router } from "express";
import userRoutes from './user.routes.js';
const router = Router();

// http://localhost:3000/api/user
router.use('/user',userRoutes);
export default router;
