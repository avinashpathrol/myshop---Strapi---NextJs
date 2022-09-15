// path: ./src/api/restaurant/routes/custom-restaurant.js

module.exports = {
    routes: [
    //   {
    //     method: 'POST',
    //     path: '/orders/pretransaction',
    //     handler: 'custom.pre', 
    //   },
      {
        method: 'GET',
        path: '/orders/pretransaction',
        handler: 'custom.exampleAction', 
      },
    //   {
    //     method: 'POST',
    //     path: '/orders/posttransaction',
    //     handler: 'custom.post', 
    //   },
    ],
  };