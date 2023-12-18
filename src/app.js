const express = require('express');
const app  = express();
require('dotenv').config();
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const mid = require('./middleware')

const rutas = require('./routes')

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan('dev'));
app.use(helmet());


//ROUTE
app.use('/api',rutas)

//my mddws
app.use(mid.notFound)
app.use(mid.errorHandler)
//SERVeR
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listening: http://localhost:${port}`);
});
