import Product from "../../../modals/Product"
export default async (req, res) => {
    switch(req.method){
        case "GET":
            await getProduct(req,res)
            break;
        case "DELETE":
            await deleteProduct(req,res)
            break;
    }
}

const getProduct = async(req,res)=>{
    const { pid } = req.query

    //    quering in mongo database 
    const productData = await Product.findOne({ _id: pid });

    res.status(200).json(productData);
}

const deleteProduct = async (req,res)=>{
    const { pid } = req.query

    //    quering in mongo database 
    await Product.findOneAndDelete({ _id: pid });

    res.status(200).json({});
}