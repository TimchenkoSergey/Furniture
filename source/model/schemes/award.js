import mongoose from 'mongoose';

const AwardSchema = new mongoose.Schema({
    name : String,
    link : String
});

export default AwardSchema;