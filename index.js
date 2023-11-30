class Product {
 constructor(name, price, category) {
  this.name = name;
  this.price = price;
  this.category = category;
 }

 getInfo() {
  return (
   `${this.name} - ${this.category} - $${this.price}` +
   (this.brand ? ` - Brand: ${this.brand}` : "") +
   (this.processor ? ` - Processor: ${this.processor}` : "") +
   (this.ram ? ` - RAM: ${this.ram}` : "") +
   (this.brewingMethod ? ` - Brewing Method: ${this.brewingMethod}` : "") +
   (this.capacity ? ` - Capacity: ${this.capacity}` : "") +
   (this.gender ? ` - Gender: ${this.gender}` : "") +
   (this.size ? ` - Size: ${this.size}` : "")
  );
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

class LaptopBuilder extends ProductBuilder {
 setBrand(brand) {
  this.product.brand = brand;
  return this;
 }

 setProcessor(processor) {
  this.product.processor = processor;
  return this;
 }

 setRAM(ram) {
  this.product.ram = ram;
  return this;
 }
}

class CoffeeMakerBuilder extends ProductBuilder {
 setBrewingMethod(brewingMethod) {
  this.product.brewingMethod = brewingMethod;
  return this;
 }

 setCapacity(capacity) {
  this.product.capacity = capacity;
  return this;
 }
}

class RunningShoesBuilder extends ProductBuilder {
 setGender(gender) {
  this.product.gender = gender;
  return this;
 }

 setSize(size) {
  this.product.size = size;
  return this;
 }
}

class Director {
 constructor(builder) {
  this.builder = builder;
 }
 setBuilder(builder) {
  this.builder = builder;
 }

 constructProduct(name, price, category) {
  return this.builder
   .setName(name)
   .setPrice(price)
   .setCategory(category)
   .build();
 }
 constructLaptop(category, brand, processor, ram, price) {
  return this.builder
   .setName("Laptop")
   .setCategory(category)
   .setBrand(brand)
   .setProcessor(processor)
   .setRAM(ram)
   .setPrice(price)
   .build();
 }

 constructCoffeeMaker(category, brewingMethod, capacity, price) {
  return this.builder
   .setName("Coffee Maker")
   .setCategory(category)
   .setBrewingMethod(brewingMethod)
   .setCapacity(capacity)
   .setPrice(price)
   .build();
 }

 constructRunningShoes(category, gender, size, price) {
  return this.builder
   .setName("Running Shoes")
   .setCategory(category)
   .setGender(gender)
   .setSize(size)
   .setPrice(price)
   .build();
 }
}

const createData = () => {
 const laptopBuilder = new LaptopBuilder();
 const coffeeMakerBuilder = new CoffeeMakerBuilder();
 const runningShoesBuilder = new RunningShoesBuilder();
 const director = new Director();

 director.setBuilder(laptopBuilder);
 const laptop = director.constructLaptop(
  "Technics",
  "Dell",
  "Intel i7",
  "16GB",
  "100$"
 );

 director.setBuilder(coffeeMakerBuilder);
 const coffeeMaker = director.constructCoffeeMaker(
  "Device for a coffee shop",
  "Drip",
  "8 cups",
  "100$"
 );

 director.setBuilder(runningShoesBuilder);
 const runningShoes = director.constructRunningShoes(
  "Clothes",
  "Men",
  "10",
  "100$"
 );

 const data = [laptop, coffeeMaker, runningShoes];
 data.forEach((item) => {
  console.log(item.getInfo());
 });

 return data;
};

createData();
