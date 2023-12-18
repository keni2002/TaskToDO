const express = require('express');
const app  = express();
require('dotenv').config();
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const mid = require('./middleware')
//database
const db = require('./database')
const rutas = require('./routes')

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan('dev'));
app.use(helmet());


//ROUTE
app.get('/', (req, res) => {
  res.json({
    message: "Hi",
  });
});
app.use('/api',rutas);

//my mddws
app.use(mid.notFound);
app.use(mid.errorHandler);

//SERVeR
(async () => {
  try {
      await db.authenticate();
      console.log("Connection has been established successfully")

  } catch (error) {
      console.log("Unable");
  }
})();


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listening: http://localhost:${port}`);
});
