# REST-API

## Task
***
Creating a REST(Representational State Transfer) API with the help of Node.js, Express.js and MongoDB and also serve them using a Thunder Client Extension. 
## Skills
***
Good Knowledge of Node.js, Express.js and MongoDB. 
## Technologies
***
* [Visual Studio Code](https://code.visualstudio.com/Download) :Version 1.69
* [Node.js](https://nodejs.org/en/download/) Version 16.16.0 (includes npm 8.11.0).
* [MongoDB](https://www.mongodb.com/docs/manual/administration/install-community/) Version 6.0.
* [Github](https://github.com/) Version 5.10.3 

## Installation
***
Steps to install Visual Studio code:

* Click on [Visual Studio Code](https://code.visualstudio.com/Download) and install according to your operating system.
* Install Thunder Client extention.
* Also install [Github Desktop](https://desktop.github.com/).
***
Steps to install Node.js and MongoDB:

* Click on [Node.js](https://nodejs.org/en/download/) and install according to your operating system.
* Click on [MongoDB Community Edition](https://www.mongodb.com/docs/manual/administration/install-community/) and install according to your operating system.

***
Packages:

* Open Terminal of VS Code write 'npm init' and press enter to install package.json file.
* After that write 'npm install express --save' and press enter to install express and package-lock.json file.
* For adding the node_modules folder write 'npm i' and press enter.
* Installing nodemon by writin 'npm install -g nodemon' for automatically restarting the node application when file changes in the directory are detected.
***
Dependencies:

* Following dependencies will be added to package.json file by writing to terminal 'npm install express nodemon body-parser dotenv mongoose'.
```bash
 "dependencies": {
    "body-parser": "^1.20.0",
    "dotenv": "^16.0.1",
    "express": "^4.18.1",
    "mongoose": "^6.5.1",
    "nodemon": "^2.0.19"
  }
```
***
Database:
* Open mongo and mongod on your windows powershell and create a database named mydb1.

### Creating a REST API Project
***
* Folder -> REST-API(models and routes).
* Files -> 
#### "index.js": Configure everything that has to do with Express application.
#### "product.js": For Connecting database and Schema.
#### "products.js": The goal of the route is to guide the request and perform CRUD operation in database mydb1.
#### ".env": Enviroment Varaiables for port number and database url.
* Finish

## Execution
***
* Make a sever and start a server in index.js file.
* Get a router from express in products.js file and use it in index.js file.
* Create .env file for for port number and database url.
* Connecting MongoDb data base in which we create a collection named product.
* In products.js file we create schema for for sending which data we want to send to database.
* For performing CRUD(Create, Read, Update,Delete) operation in products.js file.
```bash
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
}
```

* Open Thunder Client and add New Request and then perform our CRUD operation by giving data in json format.


## Result
***
* The CRUD operation is successfully done in our database by using our REST API.

![REST API](https://github.com/Adarsh00712/REST-API/blob/main/Screenshots/1.png)

***
![REST API](https://github.com/Adarsh00712/REST-API/blob/main/Screenshots/2.png)

***
![REST API](https://github.com/Adarsh00712/REST-API/blob/main/Screenshots/3.png)

***
![REST API](https://github.com/Adarsh00712/REST-API/blob/main/Screenshots/4.png)

***
![REST API](https://github.com/Adarsh00712/REST-API/blob/main/Screenshots/6.png)

## Support
***
For Support email at adarshdwivedi2@gmail.com

