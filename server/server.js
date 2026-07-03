import express from 'express'
import dotenv  from 'dotenv';
import connectDB from './config/config.js'
import router from './routes/index.js';

dotenv.config();

const app = express()
const port = process.env.PORT || 3000;



app.use(express.json());
app.use('/api',router)


connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server started on port: ${port}`); 
    });
  })
  .catch((err) => {
    console.log("Database connection failed!", err);
  });