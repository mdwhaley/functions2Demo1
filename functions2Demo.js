const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;
const calculator = (num1, num2, callback) => {
  return callback(num1, num2);
};
console.log(calculator(9, 4, add));
console.log(calculator(5, 2, subtract));
console.log(calculator(9, 3, multiply));
console.log(calculator(36, 9, divide));

const dogProducts = [
  {
    name: "leash",
    colors: ["red", "blue", "green"],
    inventory: 30,
    basePrice: 13.99,
    displayPrice: 13.99,
  },
  {
    name: "chew toy",
    colors: ["brown"],
    category: 2,
    inventory: 120,
    basePrice: 6.0,
    displayPrice: 6.0,
  },
  {
    name: "rope",
    colors: ["blue & green", "red & yellow"],
    category: 2,
    inventory: 75,
    basePrice: 4.99,
    displayPrice: 4.99,
  },
];

const catProducts = [
  {
    name: "mouse toy",
    colors: ["pink", "grey", "black"],
    category: 2,
    inventory: 125,
    basePrice: 2.5,
    displayPrice: 2.5,
  },
  {
    name: "cat sweater",
    colors: "black",
    category: 1,
    inventory: 15,
    basePrice: 10.0,
    displayPrice: 10.0,
  },
  {
    name: "scratching post",
    colors: "tan",
    category: 2,
    inventory: 40,
    basePrice: 22.99,
    displayPrice: 22.99,
  },
];

const applyPercentDiscount = (product, discount) => {
  product.displayPrice = product.basePrice * (1 - discount);
};

const applyFlatRateDiscount = (product, discount) => {
  product.displayPrice = product.basePrice - discount;
};

const applyDiscounts = (arr, callback, discount) => {
  arr.forEach((product) => {
    callback(product, discount);
  });
};

applyDiscounts(catProducts, applyPercentDiscount, 0.27);
console.log(catProducts);

function makeSandwich(bread) {
  return function (ingredients) {
    let order = `You ordered a ${bread} sandwich with: `;

    for (let i = 0; i < ingredients.length; i++) {
      if (i === ingredients.length - 1 && i !== 0) {
        order += `and ${ingredients[i]},`;
      } else if (ingredients.length === 1) {
        order += `${ingredients[i]}`;
      } else {
        order += `${ingredients[i]},`;
      }
    }
    return order;
  };
}
const makeWheatSandwich = makeSandwich("wheat");
const makeWhiteSandwich = makeSandwich("white");

console.log(makeWheatSandwich(["avacado", "tomato", "onion"]));
