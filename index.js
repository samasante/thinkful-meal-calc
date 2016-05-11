const TAX_PERCENTAGE = 0.2;

var Party = function() {
    this.diners = [];
};

Party.prototype.addDiner = function(diner) {
    this.diners.push(diner);
};
    
Party.prototype.getTotal = function(tip) {
    var total = 0;
    var tip = tip / 100;
    
    for (var i = 0; i < this.diners.length; i++) {
        total += this.diners[i].getMealTotal(); // Add meal price
        total += this.diners[i].getMealTotal() * tip; // Add tip
        total += this.diners[i].getTaxTotal(); // Add tax
    }
    
    return Math.round(total * 100) / 100; // Convert to 2 decimal places
}; 

Party.prototype.getDinerTotal = function(tip) {
    return Math.round((this.getTotal(tip) / this.diners.length) * 100) / 100;
};

var Diner = function() {
    this.orderItems = [];
    
};

Diner.prototype.addOrderItem = function(item) {
    this.orderItems.push(item);
};

Diner.prototype.getMealTotal = function() {
    var total = 0;

    for (var i = 0; i < this.orderItems.length; i++) {
        total += this.orderItems[i].price;
    }
    
    return Math.round(total * 100) / 100; // Convert to 2 decimal places
};


Diner.prototype.getTaxTotal = function() {
    var total = 0;

    for (var i = 0; i < this.orderItems.length; i++) {
        total += this.orderItems[i].price * TAX_PERCENTAGE;
    }
    
    return Math.round(total * 100) / 100; // Convert to 2 decimal places
};


var Dish = function(name, price) {
    this.name = name;
    this.price = price;
}

var party = new Party();

var sam = new Diner();
var joe = new Diner();

party.addDiner(sam);
party.addDiner(joe);

sam.addOrderItem(new Dish('Pizza', 0.99));
sam.addOrderItem(new Dish('Soup', 0.99));

joe.addOrderItem(new Dish('Salad', 0.99));
joe.addOrderItem(new Dish('Pasta', 0.99));

console.log('Total Meal Cost: ' + party.getTotal(15)); // 15% Tip

for (var i = 0; i < party.diners.length; i++) {
   console.log('Party Member ' + (i + 1) + ': ' + party.diners[i].getMealTotal());
   console.log('Party Member ' + (i + 1) + ' Tax: ' + party.diners[i].getTaxTotal());
   
}

// Create diner objects which represent a single diner. [x]
// Add dishes to a diner's meal [x]
// Total up the cost of all of the diners' meals [x]
// Add a fixed tax percentage to the total bill [x]
// Add a percentage tip to the total bill [x]
// Split the bill fairly among the diners [x]
// Each diner should pay the tax on their own food [x]
// Each diner should pay an equal share of the tip [x]
// If you choose to round the amounts, you may notice that the sum of the amounts does not equal the total bill amount anymore. Don't worry about that, or distribute the discrepancy in a fair way for an extra challenge.
// Print out a total bill [x]
// Print a breakdown for what each diner owes
