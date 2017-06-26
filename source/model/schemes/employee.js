import mongoose from 'mongoose';

import SocialWebLinkSchema from'./socialWebLink';

const EmployeeSchema = new mongoose.Schema({
    name     : String,
    lastName : String,
    position : String,
    links    : [ SocialWebLinkSchema ]
});

export default EmployeeSchema;