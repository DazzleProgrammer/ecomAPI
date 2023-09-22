// Manage routes/paths to ProductController

// 1. Import Express
import express from 'express'

// 1.1 Import Controller
import ProductController from './product.controller.js';

// 1.3 Import uploads

import {upload} from "../../middlewares/fileupload.middleware.js"



// 2. Initialize Express Router
const productRouter = express.Router();      // The goal of this Router is to specify paths when this path matches please call this controller method

const productController = new ProductController();

// 3. To call getAllProducts API we can mention Routes here


productRouter.get('/filter', productController.filterProducts);


productRouter.get('/', productController.getAllProducts);


productRouter.post('/',upload.single('imageUrl'), productController.addProduct);


productRouter.get('/:id', productController.getOneProduct);


export default productRouter;

// server.get("/products", ProductController.getAllProducts)
