import { Router } from "express";
import {
    createUser,
    getUser,
    getUsers,
    updateUser
} from '../controllers/user.controller.js';

const router = Router();

router.post('/',createUser); //peticion http para crear usuario
router.get('/all',getUsers); //peticion http para obtener todos los usuarios
router.get('/:id',getUser); //peticion http para obtener usuario especifico
router.put('/:id',updateUser); //peticion http para actualizar contenido de usuario
export default router;