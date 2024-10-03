//Aqui se manejaran todas las consultas a la base de datos que se haran en la ruta especificada
//Nos permite interactuar con nuestra entidad
"use strict";
import User from "../entity/user.entity.js";
import { AppDataSource } from "../config/configBd.js";

//FUNCIONES PARA INTERACTUAR (createUser,getUsers,getUser)

//POST -> crear nuevo usuario
export async function createUser(req,res){
    try {
        //Instancia que permite interactuar con mi entidad de usuario
        const userRepository = AppDataSource.getRepository(User);
        //almacenar en user todo lo que enviemos en nuestra peticion
        const user = req.body;
        if(!user){
            return res.status(400).json({
                message : 'Es necesario ingresar los datos del usuario',
                data:null
            })
        }
        //Creamos nuevo usuario con datos enviados en la peticion
        const newUser = userRepository.create({
            nombre : user.nombre,
            rut : user.rut,
            email : user.email
        });

        //Agregar nuevo usuario a la base de datos
        const userSaved = await userRepository.save(newUser);
        res.status(201).json({
            message: 'usuario creado exitosamente',
            data: userSaved
        });

    } catch (error) {
        console.error("Error al crear un usuario: ",error);
    }
}


export async function getUsers(req,res){
    try {
        const userRepository = AppDataSource.getRepository(User);
        const users = await userRepository.find();
        if(!users) {
            return res.status(404).json({
                message: 'No se encontraron usarios en la base de datos',
                data: null
            })
        }

        res.status(200).json({
            message: 'Usuarios encontrados',
            data: users
        })
    } catch (error) {
        console.error("Error al obtener usuarios: ",error);
    }
}

export async function getUser(req,res){
    try {
        const userRepository = AppDataSource.getRepository(User);
        const id = req.params.id;
        const userFound = await userRepository.findOne({
            where: {
                id: id
            }
        })

        if(!userFound) {
            return res.status(404).json({
                message: 'usuario no encontrado',
                data : null
            })
        }

        res.status(200).json({
            message: 'Usuario encontrado exitosamente!',
            data: userFound
        })
    } catch (error) {
        console.error("Ocurrio un error al buscar el usuario: ",error);
    }
}


//IMPLEMENTAR UPDATE USER Y DELETE USER