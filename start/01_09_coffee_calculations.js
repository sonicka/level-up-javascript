const coffeePrice = 1.25;
const coffeeList = [1,3,4,2,1];

const getTotalBill = (list) => {
  let sumCoffee = coffeeList.reduce((acc, val)=>acc = acc + val * coffeePrice)
  console.log(`Total bill is ${sumCoffee}$.`)
}

getTotalBill(coffeeList)