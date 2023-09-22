// 1. Import Express 
import express from 'express';

// 1.1 Import Router 
import productRouter from './src/features/product/product.routes.js';
import userRouter from './src/features/user/user.routes.js';

// 1.2 Import body parser
import bodyParser from 'body-parser'


// 2. Create Server

const server = express()
server.use(express.json())
server.use(bodyParser.json())



// 3. Default Request Handler
server.get('/', (req, res) => {
    res.send('Welcome to Ecommerce APIs')
})

// 4. Specify Port
server.listen(3200, ()=> {
    console.log('Server is listening on port http://localhost:3200')


// For all requests related to product, rediirect to product routes.
server.use('/api/products', productRouter)  
server.use('/api/users', userRouter)  

})
