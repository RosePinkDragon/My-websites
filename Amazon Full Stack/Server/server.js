import express from 'express'
import mongoose from 'mongoose'
import productRouter from './Routers/productRouter.js';
import userRouter from './Routers/userRouter.js';


const app = express()
const port = process.env.PORT || 5000;
const uri = "mongodb+srv://netninja:Asdf1123@nodeninja.afwxy.mongodb.net/AmazonClone?retryWrites=true&w=majority";


mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
const connection = mongoose.connection
connection.once('open', () => {
    console.log("MongoDB Conncetion Succesfull YEEEEE")
})

app.use('/api/users/', userRouter)
app.use('/api/products', productRouter)

app.get('/', (req, res) => {
    res.send('Server is ready')
})

app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
  });

app.listen(port,()=>{
    console.log(`Serving at ${port}`)
})

