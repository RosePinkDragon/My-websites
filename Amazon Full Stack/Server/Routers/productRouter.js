import expressAsyncHandler from "express-async-handler";
import data from "../data.js";
import Product from "../models/productModel.js";
import express from 'express'

const productRouter = express.Router()

productRouter.get('/seed', expressAsyncHandler(async(req, res) =>{
  const createdProducts = await Product.insertMany(data.products)
  res.send({createdProducts})
}))

productRouter.get('/', expressAsyncHandler(async(req, res) => {
  const products = await Product.find({})
  res.send(products)
}))

//alwapys keep this below or /seed will be carried out as :id
productRouter.get('/:id', expressAsyncHandler(async(req, res) => {
  const product = await Product.findById(req.params.id)
  if(product){
    res.send(product)
  } else {
    res.status(404).send({message: 'Product Not Found '})
  }
}))



export default productRouter