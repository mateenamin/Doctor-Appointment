import express from 'express'
import dotenv  from 'dotenv';
import dbconnect from './config/config.js'

dotenv.config();

const app = express()
const port = process.env.PORT || 3000;



app.use(express.json());


app.get('/',(req, res )=>{

    res.json({
        message : "Welcome Brother"
    })
})
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server started on port: ${PORT}`); 
    });
  })
  .catch((err) => {
    console.log("Database connection failed!", err);
  });