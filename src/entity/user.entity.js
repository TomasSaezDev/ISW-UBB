/*configuracion de las entidades de nuestra base de datos (tablas como usuario,etc). 
para ello usaremos typeorm*/
"use strict";
import { EntitySchema } from "typeorm";

//Tabla usuarios
const UserSchema = new EntitySchema({
    name: 'User',
    tableName: 'users',
    columns: {
        //ATRIBUTOS DE NUESTRO USUARIO
        id: {
            type: 'int',
            primary: true,
            generated: true,
        },
        nombre: {
            type: 'varchar',
            length: 255,
            nullable: false,
        },
        rut: {
            type: 'varchar',
            length: 12,
            nullable: false,
            unique: true
        },
        email: {
            type: 'varchar',
            length : 255,
            nullable: false,
            unique: true,
        },
        //Campos para saber cuanto fue creado el usuario y actualizado
        createdAt: {
            type :'time with time zone',
            default:()=> 'CURRENT_TIMESTAMP',
            nullable: false,
        },
        uptadedAt: {
            type: 'time with time zone',
            default:()=> 'CURRENT_TIMESTAMP',
            onUpdate: 'CURRENT_TIMESTAMP',
            nullable: false,
        }
    }
});

export default UserSchema;