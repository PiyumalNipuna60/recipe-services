import express from 'express';
import cors from 'cors';
const app = express();
import dotenv from 'dotenv';
import connectToDB from './database/db.js';
import authRoutes from './routes/auth.js';
import favoritesRoutes from './routes/FavouriteItem.js';
import categoriesRoutes from './routes/Categories.js';
import bodyParser from 'body-parser';


const PORT=process.env.port || 8000;
dotenv.config();
connectToDB();

app.use(bodyParser.json());

const corsOptions = {
    origin: 'https://www.recipe.tequilasl.com', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    allowedHeaders: ['Content-Type', 'Authorization'], 
    credentials: true, 
  };
  app.use(cors(corsOptions));


// Routes  
app.use('/api/auth', authRoutes);
app.use('/api/categories', categoriesRoutes);
app.use('/api/favorites', favoritesRoutes);

app.listen(PORT, ()=>{
    console.log('app is running on '+PORT);
});

