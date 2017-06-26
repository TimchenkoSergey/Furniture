import mongoose from 'mongoose';

const SocialWebLinkSchema = new mongoose.Schema({
    icon : String,
    link : String
});

export default SocialWebLinkSchema;