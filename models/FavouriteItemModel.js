import mongoose from 'mongoose';

const FavouriteSchema = new mongoose.Schema({
    idCategory: { type: String, unique: true },
    strCategory: { type: String, required: true, unique: true },
    strCategoryThumb: { type: String, required: true, unique: true },
    strCategoryDescription: { type: String, required: true, unique: true },
});


const FavouriteItems = mongoose.model('FavouriteItem', FavouriteSchema);
export default FavouriteItems;
