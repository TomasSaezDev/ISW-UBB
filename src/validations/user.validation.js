'use strict'
import Joi from 'joi';

//VALIDACION CUSTOM PARA EL EMAIL
const domainEmailValidator = (value,helper) => {
    if(!value.endsWith('@gmail.com')) {
        return helper.message(
            'El email debe ser del dominio @gmail.com'
        )
    }
    return value;
}





export const userSchemaValidator = Joi.object({
    nombre: Joi.string()
    .min(3)
    .max(30)
    .pattern(new RegExp('^[a-zA-Z\\s]+$'))
    .required()
    .messages({
        'string.empty' : 'El nombre no puede estar vacio.',
        'any.required' : 'El nombre es un campo obligatorio',
        'string.base' : 'El nombre debe ser de tipo texto',
        'string.min' : 'El nombre debe tener al menos 3 caracteres',
        'string.max' : 'El nombre debe tener como maximo 30 caracteres',
        'string.pattern.base' : 'El nombre solo permite letras de la a-z'
    }),
    rut: Joi.string()
    .min(9)
    .max(12)
    /*RegEx rut: 
    (?:(?:[1-9]\d{0}|[1-2]\d{1}) => el numero puede comenzar con un numero del 1al9 seguido de 0 numeros
    o puede empezar con un 1 o un 2 seguido de cualquier numero del 1al9. 
    (\.\d{3}){2}|[1-9]\d{6}|[1-2]\d{7})-[\dkK] => luego lo sigue un punto seguido de 3 digitos del 1 al 9 (esto dos veces)
    xx.xxx.xxx | x.xxx.xxx o la opcion sin punto digito 1-9 seguido de 6 numeros o digito 1-2 seguido de 7
    luego sigue un guion en cualquiera opcion y luego un numero del 1-9 o k-K.
     */
    .pattern(new RegExp(/^(?:(?:[1-9]\d{0}|[1-2]\d{1})(\.\d{3}){2}|[1-9]\d{6}|[1-2]\d{7})-[\dkK]$/))
    .required()
    .messages({
        'string.empty' : 'El rut no puede estar vacio.',
        'any.required' : 'El rut es un campo obligatorio',
        'string.base' : 'El rut debe ser de tipo texto',
        'string.min' : 'El rut debe tener al menos 9 caracteres',
        'string.max': 'El rut debe tener como maximo 12 caracteres',
        'string.pattern.base' : 'El rut debe ser del formato xx.xxx.xxx-x o xxxxxxxx-x'
    }),
    email : Joi.string()
    .custom(domainEmailValidator,'validacion email')
    .email()
    .min(15)
    .max(30)
    .messages({
        'string.empty' : 'El email no puede estar vacio.',
        'any.required' : 'El email es un campo obligatorio',
        'string.base' : 'El email debe ser de tipo texto',
        'string.min' : 'El email debe tener al menos 15 caracteres',
        'string.max': 'El email debe tener como maximo 30 caracteres',
        'string.pattern.base' : 'El rut debe ser del formato example@gmail.com'
    })
    .required()
    
})
