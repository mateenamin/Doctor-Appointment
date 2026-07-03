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
dbconnect()
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});