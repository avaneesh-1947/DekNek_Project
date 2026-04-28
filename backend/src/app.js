import express from 'express';
import cors from 'cors';
import cookieParser from "cookie-parser";
import authRoute from './auth/auth.route.js';


const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "https://dek-nek-project-henna.vercel.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoute);

app.get('/', (req, res) => {
    res.send("hello ji");
});

export default app;