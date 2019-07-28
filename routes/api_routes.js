const router = require('express').Router();
const { Shop, Coffee } = require('../db');
const { isAuthenticated } = require('../auth');

// // localhost:5000/api/test
// router.get('/test', (req, res) => {
//   res.send('This is a test.');
// });

// // localhost:5000/api/notes
// router.get('/notes', (req, res) => {
//   // Get all the notes and send to the front
// });

// localhost:5000/api/shops -- GET

// Shop.find({}).deleteMany({}).then(() => console.log('Shops removed'));
// Coffee.find({}).deleteMany({}).then(() => console.log('Coffee removed'));

// Shop.create({ name: 'Dunkin' }).then(shop => {
//   let coffee = new Coffee({
//     name: 'Columbian',
//     type: 'dark',
//     shopId: shop._id
//   });

//   coffee.save().then(coffee => {
//     shop.coffees.push(coffee);
//     shop.save().then(() => {
//       console.log('worked');
//     })
//   });
// });

Shop.find({})
  .populate('coffees')
  .then(shops => {
    console.log(shops[0].coffees[0]);
  })

// router.get('/shops', (req, res) => {
//   Shop.find({})
//     .then(shops => {
//       res.json({
//         shops: shops
//       });
//     });
// });


// localhost:5000/api/shop -- POST
router.post('/shop', isAuthenticated, (req, res) => {
  Shop.create({
    name: req.body.name
  }).then(shop => {
    res.json({
      message: 'Shop created successfully!',
      shop: shop
    });
    // res.redirect('/');// Handlebars
  }).catch(err => res.status(500).send({ message: err }));
});


module.exports = router;










// function routes(app) {
//   app.get('/', (req, res) => {

//   })
// }

// module.exports = routes;