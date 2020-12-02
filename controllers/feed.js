const getDb = require("../util/database").getDb;


exports.getProducts = async(req, res, next) => {
  const db = getDb();
   const allProducts = await db.collection('Products').find().toArray().then((res)=>{
    console.log("Data returned");
    console.log(res);
    return res;
  }).catch(err=>{
    console.log(err)
  })
  res.status(200).json(allProducts);
}

exports.filterByCategory = (req, res, next) => {
  console.log(req.body);
  res.status(200).json(req.body);
}
