import express from 'express';
const router = express.Router();
import FavouriteItems from '../models/FavouriteItemModel.js';

router.post('/save', async (req, res) => {
    try {
      const { idCategory, strCategory, strCategoryThumb, strCategoryDescription } = req.body;
  
      // Check if the category already exists in the favorites
      const existingFavorite = await FavouriteItems.findOne({ idCategory });
      if (existingFavorite) {
        return res.status(400).json({ message: 'Category is already in your favorites' });
      }
      const newFavorite = new FavouriteItems({
        idCategory,
        strCategory,
        strCategoryThumb,
        strCategoryDescription,
      });
      await newFavorite.save();
  
      res.status(201).json({ message: 'Category added to favorites', favorite: newFavorite });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error adding category to favorites' });
    }
  });



  // DELETE method: Remove a category from favorites
router.delete('/:idCategory', async (req, res) => {
    try {
      const { idCategory } = req.params;
      const deletedFavorite = await FavouriteItems.findOneAndDelete({ idCategory });
  
      if (!deletedFavorite) {
        return res.status(404).json({ message: 'Category not found in favorites' });
      }
  
      res.status(200).json({ message: 'Category removed from favorites', favorite: deletedFavorite });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error removing category from favorites' });
    }
  });


  // GET method: Retrieve all favorite categories
router.get('/getAll', async (req, res) => {
    try {
      const favoriteItems = await FavouriteItems.find();
      res.json(favoriteItems);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error fetching favorite categories' });
    }
  });

export default router;

