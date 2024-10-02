'use strict';
import {fileURLtoPath} from "url";
import path from 'path';
import dotenv from 'dotenv';

const _filename = fileURLtoPath(import.meta.url); // ruta de mi archivo configEnv
const _dirname = path.dirname(_filename); // ruta de mi directorio donde esta el configEnv

//ruta donde se encuentra mi archivo .env
const envFilePath = path.resolve(_dirname,".env");

dotenv.config({path: envFilePath})


//Exporto todas las variables de entorno para ser utilizadas en los demas archivos
export const PORT = process.env.PORT;
export const HOST = process.env.HOST;
export const DATABASE = process.env.DATABASE;
export const DB_USERNAME = process.env.DB_USERNAME;
export const PASSWORD = process.env.PASSWORD;
