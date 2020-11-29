exports.getProducts = (req, res, next) => {
  res.status(200).json([
    {
      imageSource: './../assets/food-product.png',
      productTitle: 'TestProduct1',
      productPrice: '20',
      productCategory: 'groceries',
      topProduct: false,
      id: 0,
    },
    {
      imageSource: './../assets/food-product.png',
      productTitle: 'TestProduct2',
      productPrice: '30',
      productCategory: 'groceries',
      topProduct: true,
      id: 1,
    },
    {
      imageSource: './../assets/food-product.png',
      productTitle: 'TestProduct3',
      productPrice: '50',
      productCategory: 'groceries',
      topProduct: true,
      id: 2,
    },
    {
      imageSource: './../assets/sandisk-pendrive.jpg',
      productTitle: 'Sandisk Pendrive',
      productPrice: '60',
      productCategory: 'electronics',
      topProduct: true,
      id: 3,
    },
    {
      imageSource: './../assets/food-product.png',
      productTitle: 'TestProduct4',
      productPrice: '10',
      productCategory: 'groceries',
      topProduct: false,
      id: 4,
    },
    {
      imageSource: './../assets/food-product.png',
      productTitle: 'TestProduct5',
      productPrice: '30',
      productCategory: 'groceries',
      topProduct: false,
      id: 5,
    },
    {
      imageSource: './../assets/food-product.png',
      productTitle: 'TestProduct6',
      productPrice: '150',
      productCategory: 'groceries',
      topProduct: false,
      id: 6,
    },
    {
      imageSource: './../assets/food-product.png',
      productTitle: 'TestProduct7',
      productPrice: '67',
      productCategory: 'groceries',
      topProduct: false,
      id: 7,
    },
    {
      imageSource: './../assets/food-product.png',
      productTitle: 'TestProduct8',
      productPrice: '88',
      productCategory: 'groceries',
      topProduct: false,
      id: 8,
    },
    {
      imageSource: './../assets/food-product.png',
      productTitle: 'TestProduct9',
      productPrice: '92',
      productCategory: 'groceries',
      topProduct: true,
      id: 9,
    },
  ])
}

exports.filterByCategory = (req, res, next) => {
  console.log(req.body);
  res.status(200).json(req.body);
}
