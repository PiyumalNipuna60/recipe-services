import mongoose from 'mongoose';

const CategoriesSchema = new mongoose.Schema({
    idCategory: { type: String, unique: true },
    strCategory: { type: String, required: true, unique: true },
    strCategoryThumb: { type: String, required: true, unique: true },
    strCategoryDescription: { type: String, required: true, unique: true },
});


const Categories = mongoose.model('categories', CategoriesSchema);
export default Categories;
