// Write your code here

class Breakfast {
    constructor(food, drink) {
        this.food = food;
        this.drink = drink;
    }
}

let oatMeal = new Breakfast('Oatmeal', 'Milkshake');
let omelette = new Breakfast('Eggs', 'Coffee');

class Lunch {
    constructor(salad, soup, drink) {
        this.salad = salad;
        this.soup = soup;
        this.drink = drink;
    }
}

let ceasar = new Lunch('Ceasar salad', 'Mercimek', 'Orange juice');
let entree = new Lunch('Samsa', 'Lamb soup', 'Green tea');
let mainMeal = new Lunch('Chicken salad', 'Bean soup', 'Mango juice');

class Dinner {
    constructor(salad, soup, entree, dessert) {
        this.salad = salad;
        this.soup = soup;
        this.entree = entree;
        this._dessert = dessert;
    }
}

let ceasarMeal = new Lunch('Ceasar salad', 'Mercimek', 'Orange juice', 'Cheesecake');
let entreeMeal = new Lunch('Samsa', 'Lamb soup', 'Green tea', 'Chocolate');
let mainMealServe = new Lunch('Chicken salad', 'Bean soup', 'Mango juice', 'Carrot Cake');
