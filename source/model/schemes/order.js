import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
    purchaserName    : String,
    purchaserEmail   : String,
    purchaserComment : String,
    orderPrice       : String,
    productsId       : [ String ]
});

export default OrderSchema;