import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    id: {
        type: Number,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    keyWords: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    headNote: {
        type: String,
        required: true
    },
    heartNote: {
        type: String,
        required: true
    },
    baseNote: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    }
)

const Product = mongoose.model('Product', productSchema);

export default Product;