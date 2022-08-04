const express = require('express');
const v1Router = require('./v1/routes');

const app = express();

const PORT = process.env.PORT || 3000;

//esto es una ruta
app.use("/api/v1",v1Router);

app.listen(PORT, () => { console.log('server on port 3000') });