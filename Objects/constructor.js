function Product(name, price, quantity, description) {
  this.name = name;
  this.price = price;
  this.quantity = quantity;
  this.description = description;
}

const phone = new Product("iPhone 15", 999.99, 100, "newest iphone")

console.log(phone)