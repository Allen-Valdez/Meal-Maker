//This is the menu
let menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
  //All these gets will gather the data in its respected name
  get appetizers() {
    return this._courses.appetizers;
  },
  get mains() {
    return this._courses.mains;
  },
  get desserts() {
    return this._courses.desserts;
  },
  //All the sets will not set the data in its respected names
  set appetizers(appetizers){
    this._courses.appetizers = appetizers;
  },
  set mains(mains) {
    this._courses.mains = mains;
  },
  set desserts(desserts){
    this._courses.desserts = desserts;
  },
  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
    }
  },
  //This function will add any course to whatever course you want
  addDishToCourse(courseName, dishName, dishPrice){
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    this._courses[courseName].push(dish);
  },
  //This will randomly gather dishes to make a full course meal
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex]
  },
  //Now this will be making the meal
  generateRandomMeal() {
    let appetizer = this.getRandomDishFromCourse('appetizers');
    let main = this.getRandomDishFromCourse('mains');
    let dessert = this.getRandomDishFromCourse('desserts')
    let totalPrice = appetizer.price + main.price + dessert.price;
    return `Your meal consists of ${appetizer.name} as your appetizer, ${main.name} as your main dish and ${dessert.name} as your dessert! Yummy! Your bill is ${totalPrice}`
  }
};
//This is the dishes I added as an example to the respected courses.
menu.addDishToCourse('appetizers', 'Chicken Noodle Soup', 5.50);
menu.addDishToCourse('mains', 'Steak & Potatoes', 25.00);
menu.addDishToCourse('desserts', 'New York Style CheeseCake', 5.00);

let meal = menu.generateRandomMeal();

console.log(meal); /* Should log 'Your meal consists of Chicken Noodle Soup as your appetizer, 
Steak & Potatoes as your main dish and New York Style CheeseCake as your dessert! Yummy! Your bill is 35.5' */