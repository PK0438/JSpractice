let item = 0;

showQty = () => {
  console.log("Cart quantity :", item);  
}

addOne = () => {
  item += 1;
  console.log("Cart quantity :", item);
}

addTwo = () => {
  item += 2;
  console.log("Cart quantity :", item);
}

addThree = () => {
  item += 3;
  console.log("Cart quantity :", item);
}

reset = () => {
  item = 0;
  console.log("Cart quantity :", item);
}