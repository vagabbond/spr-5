class Product {
 constructor(name, price, category) {
  this.name = name;
  this.price = price;
  this.category = category;
 }

 getInfo() {
  return `${this.name} - ${this.category} - $${this.price}`;
 }
}

class ProductBuilder {
 constructor() {
  this.product = new Product("", 0, "");
 }

 setName(name) {
  this.product.name = name;
  return this;
 }

 setPrice(price) {
  this.product.price = price;
  return this;
 }

 setCategory(category) {
  this.product.category = category;
  return this;
 }

 build() {
  const builtProduct = this.product;
  this.product = new Product("", 0, "");
  return builtProduct;
 }
}

class Director {
 constructor(builder) {
  this.builder = builder;
 }

 constructProduct(name, price, category) {
  return this.builder
   .setName(name)
   .setPrice(price)
   .setCategory(category)
   .build();
 }
}

const generateProducts = (configArray) => {
 const builder = new ProductBuilder();
 const director = new Director(builder);
 const res = configArray.map((config) =>
  director.constructProduct(
   config.name || "",
   config.price || 0,
   config.category || ""
  )
 );
 res.forEach((product) => console.log(product.getInfo()));
 return res;
};

const productConfigs = [
 { name: "Laptop", price: 1200, category: "Electronics" },
 { name: "Coffee Maker", price: 100, category: "Appliances" },
 { name: "Running Shoes", price: 80, category: "Footwear" },
];
generateProducts(productConfigs);
