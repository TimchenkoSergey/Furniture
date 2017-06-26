import mongoose from 'mongoose';

const NewsSchema = new mongoose.Schema({
    title      : String,
    date       : Date,
    mainImgSrc : String,
    text       : [ String ]
});

export default NewsSchema;