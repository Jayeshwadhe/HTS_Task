import express,{Express, Request, Response} from 'express';
import mongoose, { mongo } from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import user from './model/user'

// Load environment variables from .env file
dotenv.config();

// Create Express app
const app = express();
const port = process.env.PORT

// Middleware
app.use(bodyParser.json());

// MongoDB Database connection
mongoose.connect('mongodb://0.0.0.0:27017/auth')
.then(() => console.log('DB Connected'))
.catch((err) => console.log(err))

// Routes
import userRoutes from './routes/user';
app.use('/api/users', userRoutes);

//get-api for testing purpose
app.get('/', (req: Request,res: Response) => {
  res.send('express and typescript server')
})

app.listen(port, () => {console.log(`server is running at port: ${port}`)})
