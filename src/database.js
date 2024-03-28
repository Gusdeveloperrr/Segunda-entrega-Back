const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://tavito:andajaran@cluster0.n6cfiqy.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => console.log("Conectado a MongoDB"))
    .catch(() => console.log("Fallo la conexion a la DB"))
