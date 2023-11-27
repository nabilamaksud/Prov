// 4. Shoppingcart med separata priser (3p)
// Skriv klart funktionen calculateTotalPrice2 som tar en array med produkter
// och ett objekt med priser som input och returnerar det totala priset

const modelPrices = {
  EOS_70D: 100,
  D3400: 120,
  Hero_4: 80,
  Phantom: 50,
  Karma: 200,
};

const shoppingCart = [
  { name: "Camera", brand: "Canon", model: "EOS_70D" },
  { name: "Camera", brand: "Nikon", model: "D3400" },
  { name: "Camera", brand: "GoPro", model: "Hero_4" },
  { name: "Drone", brand: "DJI", model: "Phantom" },
  { name: "Drone", brand: "GoPro", model: "Karma" },
];

function calculateTotalPrice2(shoppingCart, prices) {
  // Din kod här
}


function calculateTotalPrice2(products, prices) {
  return products.reduce((total, product) => {
     const { model } = product;
     const productPrice = prices[model] || 0; // If the model is not found, default to 0
     return total + productPrice;
  }, 0);
}
products.forEach(function(shoppingCart) {
  console.log(`Name: ${shoppingCart.name}, Brand: ${shoppingCart.brand}`);})



const totalPrice = calculateTotalPrice2(shoppingCart, modelPrices);
console.log(totalPrice); // This will log the total price of the items in the shopping cart


console.log(calculateTotalPrice2(shoppingCart, modelPrices)); // Ska logga 550
