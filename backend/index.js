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

/*let all_product = [
  {
    id: 1,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: 'https://drive.google.com/file/d/1gq-jFwKt7M0ymcUCXXOVPE_Ee-tVkbh5/view?usp=drive_link',
    new_price: 50.0,
    old_price: 80.5,
  },
  {
    id: 2,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: "https://drive.google.com/file/d/1DJxiM_T3-9wZZ6MeuYq4kgMJgJvSD1b_/view?usp=sharing",
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 3,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: "https://drive.google.com/file/d/1GhyyKsP98sOQ0oDwIncyVmY_in32jjjC/view?usp=sharing",
    new_price: 60.0,
    old_price: 100.5,
  },
  {
    id: 4,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: 'https://drive.google.com/file/d/1etlbefBwDeRo5wjX0ok7KxXYOrCmMxJd/view?usp=drive_link',
    new_price: 100.0,
    old_price: 150.0,
  },
  {
    id: 5,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: 'https://drive.google.com/file/d/1DxNrFTyQMUzj7VU4tPU1-60N5BuoQNzT/view?usp=drive_link',
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 6,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: 'https://drive.google.com/file/d/1KCUuq0RmM3LaDkR6ZJYqhC-d0EKhFCGC/view?usp=drive_link',
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 7,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: 'https://drive.google.com/file/d/18HXvs4blGWDuh6pFutXoYHHTaHRXXP8E/view?usp=drive_link',
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 8,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: 'https://drive.google.com/file/d/1HdMXgdd31HJooQTr8NX0pXuVKI-4YJm_/view?usp=drive_link',
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 9,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: 'https://drive.google.com/file/d/1-DRK-0TL1gaXfE_Aw3dTrmUBd2WPinal/view?usp=drive_link',
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 10,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: 'https://drive.google.com/file/d/1-jk6nY26Fj1Ah0Qv1j6iOHeU9jClUHX_/view?usp=drive_link',
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 11,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: 'https://drive.google.com/file/d/1pf7otDbL8NBO9HGI0z050teenxmsuWoV/view?usp=drive_link',
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 12,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: 'https://drive.google.com/file/d/12cYcAZBYpmrO67VrmgZg0yxuF4TE49YY/view?usp=drive_link',
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 13,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: 'https://drive.google.com/file/d/1tBVq9nlrAz8iSRG3J1wf6EPDxZSdvA04/view?usp=drive_link',
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 14,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: 'https://drive.google.com/file/d/11b1bScFkpUxtof91vCaEbpa9jkEn8lWk/view?usp=drive_link',
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 15,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: 'https://drive.google.com/file/d/1dbnN8Sfb-baO9iKL4zhFta0rPtvL0WJs/view?usp=drive_link',
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 16,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: 'https://drive.google.com/file/d/1raYp7Zqa--b-RlHv48Qv6_aJpq71q22-/view?usp=drive_link',
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 17,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: 'https://drive.google.com/file/d/1s85N2EcxJdWm5bbofL8f4X10ro8bpmRT/view?usp=drive_link',
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 18,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: 'https://drive.google.com/file/d/1gu4nFbUHovvPUoAriMLt2kIUShJMHgHj/view?usp=drive_link',
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 19,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: 'https://drive.google.com/file/d/1MPTRZndG7aqd3GotkazEcj08QNaCasA9/view?usp=drive_link',
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 20,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: 'https://drive.google.com/file/d/12GBH9zpyGJEsiGK2vanL-XMzppV0IxPq/view?usp=drive_link',
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 21,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: 'https://drive.google.com/file/d/1hO4w7hoFmXgI3ExWEzau0mHORBi-U03Y/view?usp=drive_link',
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 22,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: 'https://drive.google.com/file/d/1qOhoj3q7fh49j5gEOhuCYXhWbm6woAXf/view?usp=drive_link',
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 23,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: 'https://drive.google.com/file/d/1rVgx_refxuo4UGkRFibrxabVtEjKMOj4/view?usp=drive_link',
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 24,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: 'https://drive.google.com/file/d/12Y0aoNgdUSZNtSxi6DMROS8NbE-haBrL/view?usp=drive_link',
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 25,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: 'https://drive.google.com/file/d/13IQR-xabK6U-u4yh_1LGKz57jjhS8Us6/view?usp=drive_link',
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 26,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: 'https://drive.google.com/file/d/1bSvqVK5qK6HexytmH-GuBYctNX8qEiLr/view?usp=drive_link',
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 27,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: 'https://drive.google.com/file/d/1Zy0kIb7UecDbfnkIjhz-Tj8VREDykUQg/view?usp=drive_link',
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 28,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: 'https://drive.google.com/file/d/1gZx9gAdVZ1VWHQycKBZIExUTlRiRDbF8/view?usp=drive_link',
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 29,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: 'https://drive.google.com/file/d/1daenr1f3W-b2iyFs1_u7q-69I762XV2b/view?usp=drive_link',
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 30,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: 'https://drive.google.com/file/d/1ZuZ37TtgaSKtOpGyW6VWvTc4WXqVPl-y/view?usp=drive_link',
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 31,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: 'https://drive.google.com/file/d/1Psx3O7Mfec1LB1cyc5E9W3PkfePKTne6/view?usp=drive_link',
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 32,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: 'https://drive.google.com/file/d/102uUT8IHG8UjPHcZJwaayvX9DrqxooLW/view?usp=drive_link',
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 33,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: 'https://drive.google.com/file/d/1iP7oKdCQIkb9k42k4BQ6sdQG5t7P7MNd/view?usp=drive_link',
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 34,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: 'https://drive.google.com/file/d/1GvOwVikSCTqf0qz48J8yOg4ZTT-oKYqk/view?usp=drive_link',
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 35,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: 'https://drive.google.com/file/d/1b0nLBtYJm6lwMbwdTWzAPCDHkRXlZWv1/view?usp=drive_link',
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 36,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: 'https://drive.google.com/file/d/1EECO7-MeMDKPUtwTrTAuqRnLmsQA1mci/view?usp=drive_link',
    new_price: 85.0,
    old_price: 120.5,
  },
];
*/
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
    res.json({success:1, image_url: `http://localhost:3000/images/${req.file.filename}`})
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
app.get('/popular',async(req,res)=>{
    let products = await Product.find
({}).limit(8);
    console.log('popular products fetched')
    res.send(products)
})
app.get('/newCollection',async(req,res)=>{
    let products = await Product.find({}).sort({_id:-1}).limit(4);
    console.log('new collection fetched')
    res.send(products)
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