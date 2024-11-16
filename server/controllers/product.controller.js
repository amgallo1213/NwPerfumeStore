import mongoose from "mongoose";
import Product from "../models/product.model.js"

export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({})
        res.status(200).json({success: true, data: products})
    }
    catch (error) {
        console.log("Error getting products", error.message)
        res.status(500).json({success: false, message: "Server unable to get all products"})
    }
}

export const createNewProduct = async (req, res) => {
    const product = req.body;

    const newProduct = new Product(product);

    try {
        await newProduct.save();
        res.status(201).json({success: true, data: newProduct})
    } 
    catch (error) {
        console.log("Error in create product", error.message)
        res.status(500).json({success: false, message: "Server error in create new product"})
    }
}

export const updateProduct = async (req, res) => {
    const { id } = req.params

    const product = req.body

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({success: false, message: "No product with that id exists"})
    }

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, {new: true})
        res.status(200).json({success: true, data: updatedProduct})
    }
    catch (error) {
        res.status(500).json({ success: false, message: "Server error in update product"})
    }
}

export const deleteProduct = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({success: false, message: "No prouduct with that id"})
    }
    try {
        await Product.findByIdAndDelete(id)
        res.status(200).json({success: true, message: "Product deleted from the database"})
    }
    catch (error) {
        console.log("Server error in delete product", error.message)
        res.status(500)
    }
}