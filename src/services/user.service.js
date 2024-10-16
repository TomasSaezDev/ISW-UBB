//

"use strict";
import User from "../entity/user.entity.js";
import { AppDataSource } from "../config/configBd.js";

export async function createUserService(dataUser){
    try {
         //Instancia que permite interactuar con mi entidad de usuario
         const userRepository = AppDataSource.getRepository(User);
         //Creamos nuevo usuario con datos enviados en la peticion
        const newUser = userRepository.create({
            nombre : dataUser.nombre,
            rut : dataUser.rut,
            email : dataUser.email
        });
        //Agregar nuevo usuario a la base de datos
        const userSaved = await userRepository.save(newUser);   
        return userSaved;
    } catch (error) {
        console.error("error al crear usuario : ",error);s
    }
}