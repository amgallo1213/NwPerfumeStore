import express from 'express'
import mongoose from 'mongoose'
import Product from '../models/product.model.js'
import { createNewProduct, deleteProduct, getAllProducts, updateProduct } from '../controllers/product.controller.js'

const router = express.Router()

router.get("/products", getAllProducts)
router.post("/products", createNewProduct)
router.put("/products/:id", updateProduct)
router.delete("/products/:id", deleteProduct)

export default router;