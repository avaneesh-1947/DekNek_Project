import express from 'express';
import cors from 'cors';
import cookieParser from "cookie-parser";
import authRoute from './auth/auth.route.js';


const app = express();

app.use(cors({
    origin: true,
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoute);

app.get('/', (req, res) => {
    res.send("hello ji");
});

export default app;