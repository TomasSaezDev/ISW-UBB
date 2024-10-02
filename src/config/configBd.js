"use strict";

//Instanciamos TypeOrm que nos ayuda con todo relacionado a la conexion y consulta a la base de datos
import { DataSource } from "typeorm";
//VARIABLES DE ENTORNO A USAR
import {DATABASE,DB_USERNAME,HOST,PASSWORD} from './configEnv';

export const AppDataSource = new DataSource({
    type : 'postgres', //tipo de base de datos
    host: `${HOST}`, //dirreccion  que utiliza la base datos
    port: 5432,
    //username and password -> autentificar al intentar conexion a base de datos
    username: `${DB_USERNAME}`, 
    password: `${PASSWORD}`,
    database: `${DATABASE}`, // nombre de la base de datos a conectar
    entities: ["src/entity/**/*.js"], //define ruta de archivos que contiene a las entidades
    synchronize: true,//opcion para que typeorm se encargue de gestionar nuestra bbdd
    logging: false, //Muestra las consultas que se realizan por debajo de la aplicacion
});

//funcion que intenta conectar a la base de datos con los valores especificados
//funcion asincrona ya que nuestra app sigue corriendo mientras esperamos la respuesta de la base de datos al conectarnos
export async function connectDB() {
    try {
        await AppDataSource.initialize(); //Antes de conectar configura conexion con datos
        console.log("conexion exitosa a la base de datos");
    }catch(error) {
        console.error("error al conectarse a la Base de datos:  ",error);
    }
}