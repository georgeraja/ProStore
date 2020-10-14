const express=require('express')
const products=require('./data/products')

const app=express()

//Creating routes
app.get('/',(req,res)=>{
    res.send('API is running...')
})

app.get('/api/products',(req,res)=>{
    res.json(products)
})

app.get('/api/products/:id',(req,res)=>{
    const product=products.find(p=>p._id===req.params.id)
    res.send(product)
})


app.get('/',(req,res)=>{
    res.send('API is running...')
})



app.listen(5000,console.log('Server running on port 5000'))

