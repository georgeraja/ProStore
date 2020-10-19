import express from 'express'
import dotenv from'dotenv'
import connectDb from './config/db.js'
import colors from 'colors'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import {notFound,errorHandler} from './middleware/errorMiddleware.js'


dotenv.config()


connectDb()

const app=express()
app.use(express.json())

//Creating routes
app.get('/',(req,res)=>{
    res.send('API is running...')
})

app.use('/api/products',productRoutes)
app.use('/api/users',userRoutes)

app.use(notFound)
app.use(errorHandler)



app.get('/',(req,res)=>{
    res.send('API is running...')
})

const PORT=process.env.PORT || 5000

app.listen(PORT,console.log(`Server running in ${process.env.NODE_ENV} mode on port ${5000}`.yellow.bold))

