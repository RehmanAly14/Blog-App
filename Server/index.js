import "dotenv/config";
import express from "express";
import cors from 'cors';
const app = express();
import connectDB from "./config/db.js";
import authRouter from "./routes/authRouter.js";
import blogRouter from "./routes/blogRouter.js";
const PORT =process.env.PORT || 3008;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


connectDB()

app.get("/", (req, res) => {
    res.send("Hello, World!");
});

 app.use('/api/admin',authRouter)
 app.use('/api/blog',blogRouter)


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});