var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
 // write your code here
  var item = {}
  item.itemName = itemName
  item.itemPrice = Math.floor(Math.random()*(100) + 1)
  cart.push(item)
  return `${itemName} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if (cart.length === 0) {
    return 'Your shopping cart is empty.'
  } else if (cart.length === 1) {
    var tempName = cart[0].itemName
    var tempPrice = cart[0].itemPrice
    return `In your cart, you have ${tempName} at $${tempPrice}.`
  } else {
    for (var i = 0; i < cart.length; i++) {
      var cartName = cart[i].itemName
      var cartPrice = cart[i].itemPrice
      var string = 'In your cart, you have'
      if (i === (cart.length - 1)) {
        string += ` and ${cartName} at $${cartPrice}.`
      } else {
        string += ` ${cartName} at $${cartPrice},`
      }
    }
    return string
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
