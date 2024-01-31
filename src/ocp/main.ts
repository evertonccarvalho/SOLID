/*
Open Closes principle
Entidades devem estar abertas para extensão, mas fechado para modificação
*/
import { Messaging } from './services/messaging';
import { Order } from './entities/order';
import { Persistency } from './services/persistency';
import { Product } from './entities/products';
import { ShoppingCart } from './entities/shopingcart';
import {
  // FiftyPercenteDiscount,
  NoDiscount,
  // TenPercenteDiscount,
} from './entities/discount';

const noDiscount = new NoDiscount();
// const tenPercenteDiscount = new TenPercenteDiscount();
// const fiftyPercenteDiscount = new FiftyPercenteDiscount();
const shoppingCart = new ShoppingCart(noDiscount);
const messaging = new Messaging();
const persistency = new Persistency();

const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product('Camiseta', 49.9));
shoppingCart.addItem(new Product('Caderno', 9.9));
shoppingCart.addItem(new Product('Lapis', 1.59));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
