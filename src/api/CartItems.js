import delay from './delay';

// Mock API call
const cart = [
    {
    productId: "123-456",
    productTitle: "BOOKS",
    quantity: 5,
  },
  {
    productId: "987-123",
    productTitle: "IPAD",
    quantity: 1,
  }
];

class CartItems {
  static getAllCartItems() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], cart));
      }, delay);
    });
  }
}

export default CartItems;
