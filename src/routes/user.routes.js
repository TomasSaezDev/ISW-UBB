import { Router } from "express";
import {
    createUser,
    getUser,
    getUsers
} from '../controllers/user.controller.js';

const router = Router();

router.post('/',createUser); //peticion http para crear usuario
router.get('/all',getUsers); //peticion http para obtener todos los usuarios
router.get('/:id',getUser); //peticion http para obtener usuario especifico

export default router;