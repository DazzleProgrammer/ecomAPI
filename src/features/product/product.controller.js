// 2. import product model for apis
import ProductModel from "./product.model.js";

// 1. Have a class, then inside class we will have different methods

export default class ProductController{

    getAllProducts(req, res){
 
      const products = ProductModel.getAll();
      res.status(200).send(products);
    }



    addProduct(req, res){
      // console.log(req.body);
      // console.log("This is post request");
      // res.status(200).send("Post req. received");

      const { name, price, sizes} = req.body;
      const newProduct = {
        name,
        price: parseFloat(price),
        sizes: sizes.split(','),
        imageUrl: req.file.filename,
      };

      const createRecord = ProductModel.add(newProduct);
      res.status(201).send(createRecord);
    }

    rateProduct(req, res){

    }


    getOneProduct(req, res){
      const id = req.params.id;
      const product = ProductModel.get(id);
      if(!product) {
        res.status(404).send('Opps! Product not found');
      } else {
        return res.status(200).send(product);
      }
    }

    
    filterProducts(req, res){
      const minPrice = req.query.minPrice;
      const maxPrice = req.query.maxPrice;
      const category = req.query.category;
      const result = ProductModel.filter(
        minPrice,
        maxPrice,
        category
        );
      res.status(200).send(result);
    }
}


