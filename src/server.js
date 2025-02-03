import express from 'express';
import routes from './routes.js';

const app = express();

// Middleware 
app.use(express.json());


app.use('/', routes);


app.use('*', (req, res) => {
    res.status(404).send({ message: "La ruta que intenta consultar no existe" });
});

export default app;