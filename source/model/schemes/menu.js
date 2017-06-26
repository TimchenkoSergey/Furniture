import mongoose from 'mongoose';

const MenuItemSchema = new mongoose.Schema({
    text : String,
    link : String
});

export default MenuItemSchema;