const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT;
const cors = require('cors');
require('./config/mongoose.config')

app.use( express.json() ); //Allows app to accept json
app.use( express.urlencoded({ extended: true }) ); //Allows app to read json
app.use(cors())

//connects ther server to the routes section. Therefore, attaching all of the routes.
const routeBridge = require("./routes/product.routes")
routeBridge(app)

app.listen(port, () => console.log("----> SERVER IS ONLINE!!!"));