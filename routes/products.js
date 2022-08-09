const ex= require("express");

const { route } = require("express/lib/application");


const Product=require("../models/product")


const router = ex.Router();


// get all the products
router.get("/",async (req,res) => {
   
    try {
        const products = await Product.find()
        res.json(products);

    } catch (err) {
        
        res.json(err);
    }
});

// To get data single product
router.get("/:productID", async(req,res)=>{

const productID=req.params.productID;

try{
    const c= await Product.findById(productId)
    res.json(c);

}catch(error){
    res.json(error);
}
});



// create product
router.post("/", async(req,res) => {

   const product=await Product.create(req.body)

   res.json(product);
})


// delete product

router.delete("/:productId", async (req,res) => {
    try {

        await Product.remove({_id:req.params.productId})
        res.status(200).json({
            message:"done"
        })
    } catch (error) {
        res.json(error);
    }
})


// update product
router.put("/:productId",async (req,res) =>{
    const productId=req.params.productId

    try{
       const product= await Product.updateOne(
            {
                "_id":productId
            },
            req.body
        )
        res.json(product)

    }catch(error){
     res.json(error)
    }
})


module.exports= router; 
