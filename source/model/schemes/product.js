import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    name        : String,
    year        : Number,
    mainImgSrc  : String,
    type        : String,
    designer    : String,
    description : [ String ]
});

export default ProductSchema;