import { Product, taxCalculator } from "./06-function-destructuring";

const shoppingCart: Product[] = [
  {
    description: "Nokia 1",
    price: 150.0,
  },
  {
    description: "Samsung Galaxy Tab",
    price: 350.0,
  },
];

const tax = 0.15;

const result = taxCalculator({ tax, products: shoppingCart });

console.log(result);
