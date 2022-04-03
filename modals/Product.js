import mongoose from "mongoose";

// creating modal to tell mongodb, which type of data we want to store
const productsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    mediaUrl: {
        type: String,
        required: false
    }
});

export default mongoose.models.product || mongoose.model('product', productsSchema);