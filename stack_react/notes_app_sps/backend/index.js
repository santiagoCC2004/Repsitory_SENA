const express = require ('express');
const mongoose = require('mongoose');
const cors = require('cors');
const noteRouter = require('./routes/noteRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT ||5000;

app.use(cors());
app.use(express.json());

// Conexion a MongoDB Atlas
mongoose.connect('mongodb://localhost:27017',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Rutas
app.use('/servicio/api_notes_app/notes', noteRouter);
app.use('/servicio/api_notes_app/users', userRouter);

app.listen(PORT, () => {
    console.log(`Servidor en ejecucion en el puerto ${PORT}`);
});