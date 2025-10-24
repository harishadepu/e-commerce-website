const express = require('express');
const mongoose = require('mongoose');
const app = express();
const jwt = require('jsonwebtoken');
const port = process.env.PORT || 3000;
const multer = require('multer');
const path = require('path');
app.use(express.json());
const cors = require('cors');
require('dotenv').config();

const originName = ['http://localhost:5173', 'http://localhost:5174']

app.use(cors({
  origin: originName,
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(error => console.error("MongoDB connection error:", error));

app.get('/', (req, res) => {
    res.send('Hello World!')
})

const storage = multer.diskStorage({
    destination: './upload/images',
    filename: function (req, file, cb) {
       return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage:storage})
app.use('/images', express.static('upload/images'))


app.post('/upload', upload.single('image'), (req, res) => {
    console.log(req.file)
    res.json({success:1, image_url: `https://localhost:3000/images/${req.file.filename}`})
})

const Product = mongoose.model('product',{
    id:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    new_price:{
        type:Number,
        required:true
    },
    old_price:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    available:{
        type:Boolean,
        default:true
    }
})

app.post('/addproduct',async(req,res)=>{
    let products = await Product.find({});
    let id ;
    if(products.length >0){
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id +1;
    }else{
        id =1;
    }
    const product = new Product({
        id:id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        new_price:req.body.new_price,
        old_price:req.body.old_price
    })
    console.log(product);
    await product.save()
    console.log("saved")
    res.json({
        success:true,
        name:req.body.name
    })
})
// create  an api remove product
app.post('/removeproduct',async(req,res)=>{
    const product = await Product.findOneAndDelete({id:req.body.id})
    console.log("removied")
    res.json({
        success:true,
        name:req.body.name
    })
})

// create an api to get all products
app.get('/allproducts',async(req,res)=>{
    let products = await Product.find({});
    console.log('all products fetched')
    res.send(products)
})

const User = mongoose.model('user',{
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String,
    },
    cartData:{
        type:Object
    },
    date:{
        type:Date,
        default:Date.now
    }
})

// creating emdpoint user 

app.post('/signup',async(req,res)=>{
    let check = await User.findOne({email:req.body.email});
    if(check){
        return res.status(400).json({success:false,error:"User already exists"})
    }
    let cart = {};
    for(let i=0; i<300; i++){
        cart[i] = 0;
    }
    const user = new User({
        name:req.body.username,
        email:req.body.email,
        password:req.body.password
    })
    await user.save()
    const data = {
        user:{
            id:user.id
        }
    }
    const token = jwt.sign(data, process.env.JWT_SECRET);
    res.json({
        success:true,token
    })
})

//create an endpoint for login

app.post('/login',async(req,res)=>{
    let user = await User.findOne({email:req.body.email});
    if(user){
        const passcompare = req.body.password === user.password;
        if(passcompare){
            const data = {
                user:{
                    id:user.id 
                }
            }
            const token = jwt.sign(data, process.env.JWT_SECRET);
            res.json({
                success:true,
                token
            })
        }
        else{
            res.status(400).json({success:false,error:"Invalid password"})
        }
    }
    else{
        return res.status(400).json({success:false,error:"Invalid email"})
    }
})

app.listen(port,(error)=>{
    if(error){
        console.log('Error in starting the server', error)
    }
    else{
    console.log(`Server is running on port ${port}`)}
})