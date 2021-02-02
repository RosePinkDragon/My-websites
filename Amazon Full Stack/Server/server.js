import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import productRouter from './Routers/productRouter.js';
import userRouter from './Routers/userRouter.js';
import orderRouter from './routers/orderRouter.js';


dotenv.config();

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 5000;
const uri = "mongodb+srv://netninja:Asdf1123@nodeninja.afwxy.mongodb.net/AmazonClone?retryWrites=true&w=majority";

//helps the server read data else will throm error "cant read value of undefined"
app.use(express.json())

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
const connection = mongoose.connection
connection.once('open', () => {
    console.log("MongoDB Conncetion Succesfull YEEEEE")
})

app.use('/api/users/', userRouter)
app.use('/api/products', productRouter)
app.use('/api/orders', orderRouter)


app.get('/api/config/paypal', (req,res) => {
    res.send(process.env.PAYPAL_CLIENT_ID || 'sb')
})
app.get('/', (req, res) => {
    res.send('Server is ready')
})

app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
  });

app.listen(port,()=>{
    console.log(`Serving at ${port}`)
})

