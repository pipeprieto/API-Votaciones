const swaggerjsdoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

//metadata info obout API
const options ={
    definition:{
        openapi:"3.0.0",
        info:{
            title:"API-Votaciones",
            version:"1.0.0"
        },
    },
    apis:['./Routes/Rutas.js']
}
//Docs en JSON format
const swaggerSpec = swaggerjsdoc(options);

//Función para configurar la documentación
 const swaggerDocs = (app,port)=>{
    app.use('/api/docs',swaggerUI.serve,swaggerUI.setup(swaggerSpec));
    app.get("/api/docs.json",(req,res)=>{
        res.setHeader('Content-Type','application/json');
        res.send(swaggerSpec)
    });
    console.log(`Version 1 de la documentación disponible en: http://localhost:${port}/api/docs`)
 }

 module.exports = {swaggerDocs}