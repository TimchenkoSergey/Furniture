import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    name        : String,
    year        : Number,
    mainImgSrc  : String,
    type        : String,
    designer    : String,
    material    : String,
    price       : Number,
    description : [ String ]
});

export default ProductSchema;