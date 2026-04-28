import express from 'express';
import cors from 'cors';
import cookieParser from "cookie-parser";
import authRoute from './auth/auth.route.js';


const app = express();

app.use(cors({
    origin:
      process.env.NODE_ENV === "production"
        ? "https://dek-nek-project-henna.vercel.app"
        : "http://localhost:5173",
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoute);

app.get('/', (req, res) => {
    res.send("hello ji");
});

export default app;