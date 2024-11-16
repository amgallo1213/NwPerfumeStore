import express from 'express';
import dotenv from 'dotenv'
import { perfumeDB } from './config/db.js'


import router from './routes/product.route.js'

dotenv.config();

const app = express();
const PORT = 3000

app.use(express.json());
app.use("/api/products", router)


app.listen(PORT, () => {
    perfumeDB();
    console.log("Server started at http://localhost:" + PORT)
})