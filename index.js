import express from 'express';
import session from 'express-session';
import dotEnv from 'dotenv';
import connectMongoDBDatabase from './src/database/connections/mongodb.js';
// import connectSequelizeDatabase from './src/database/connections/sequelize.js';
import indexRoutes from './src/routes/indexRoutes.js';
const app = express();
dotEnv.config();
const port = process.env.PORT || 3000;

//Using Express.JSON
app.use(express.json());

connectMongoDBDatabase();
// connectSequelizeDatabase();

global.app = express();
global.secretKey = process.env.JWT_SECRET;

app.use(session({
  secret: secretKey,
  resave: true,
  saveUninitialized: true
}));
//Routes
app.use("/", indexRoutes);

app.listen(port, () => {
  console.log(`=============Node js Express Connect========================`)
  console.log(`Server running on port: ${port}`);
  console.log(`Server running on url: http://localhost:${port}`);
  console.log(`============================================`)
})