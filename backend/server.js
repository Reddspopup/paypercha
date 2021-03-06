import express from 'express';
import Mongoose from 'mongoose';
import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js';

const app = express();

Mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/papercha');

// app.get('/api/products/:id', (req, res) => {
//   const product = data.products.find((x)=> x._id === req.params.id);
//   if(product){
//       res.send(product);
//    } else{
//       res.status(404).send({message: 'The product not found sucker pie'});
//  }
//});

//app.get('/api/products', (req, res) => {
//  res.send(data.products);

//});

app.use('/api/users', userRouter);

app.use('/api/products', productRouter);

//app.get('/api', (req, res) => {
//    res.send( data.products[4] );
//})

app.get('/', (req, res) => {
  res.send('hello server is ready');
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`serve at the best http://localhost:${port}`);
});
