//falsy values - false, 0, null, NaN, undefined

let cartQuantity = 0;

if(cartQuantity) {
  console.log("Cart has Products");
} else {
  console.log("Cart is empty");
}


//tarnary operator
cartQuantity ? console.log("Cart has Products") : console.log("Cart is empty");


calculateTax = (cartAmt, taxPercent) => {
  cartAmt > 1999 ? taxPercent = 1 : taxPercent;
  console.log(cartAmt * taxPercent);
}

calculateTax(2001, 0.25);

calculateTax(1500, 0.15);

greet = (name) => {
 name ? console.log(`Hello ${name}!`) : console.log(`Hi there!`)
}

greet()