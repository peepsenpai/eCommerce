// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import initDB from "../../helpers/initDB"

import Product from "../../modals/Product";

initDB()

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }

export default async function handler(req, res) {
  switch(req.method){
    case 'GET':
      await getAllProducts(req,res);
      break
    case 'POST':
      await SaveProduct(req,res);
      break
  }
}

const getAllProducts = async(req,res)=>{
  Product.find().then(product => {
    res.status(200).json(product)
  })
}

const SaveProduct = async(req,res)=>{
  const {name,price, desc, mediaUrl} = req.body;

  // if any of them is not exist than we will sent 400 error 
  if(!name || !price || !desc || !mediaUrl){
    return  res.status(200).json({err: "please fill all fields", status: 400})
  }

 const addedProduct = await new Product({
    name,
    price,
    desc,
    mediaUrl
  }).save()

  // we sending 201 status code cause a new product is created 
  res.status(201).json(addedProduct);
}