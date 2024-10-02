//levantamiento del servidor
//llamada a la conexion a la base datos
import express, { json } from 'express';
import indexRoutes from './routes/index.routes.js';
import {PORT,HOST} from './config/configEnv.js' //variables de entorno a utilizar
import {connectDB} from './config/configBd.js'; // archivo con connectDb();


//funcion asincrona para montar setup del servidor
async function setupServer(){
    try {
        const app = express(); //instanciar express
        app.use(json()); // Middleware para manejar peticiones http al servidor con JSON
        app.use('/api',indexRoutes) //rutas a manejar
        app.listen(PORT,()=>{
            console.log(`servidor corriendo en http://${HOST}:${PORT}/api`);
        });

    }catch(error){
        console.error("error al crear servidor :",error);
    }
}

//funcion asincrona para monstar setup de la api que nos permite la conexion entre componentes de la app

async function setupAPI(){
    try {
        await connectDB(); //antes de setear establecer conexion con base de datos
        await setupServer(); // antes de setear establecer conexion con el servidor

    }catch(error) {
        console.log("error en archivo setupAPI: ",error);
    }
}

setupAPI()
    .then(()=> console.log("API iniciada correctamente"))
    .catch((error)=>{
        console.log(error);
    });