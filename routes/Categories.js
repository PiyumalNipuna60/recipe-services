import express from 'express';
const router = express.Router();
import axios from 'axios';


router.get('/getAll', async (req, res) => {
    try {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
      const categories = response.data.categories; // Extract categories data
      res.json(categories); // Send the data back to the client
    } catch (error) {
      console.error('Error fetching categories from TheMealDB API:', error);
      res.status(500).json({ error: 'Failed to fetch categories' });
    }
  });


export default router;

