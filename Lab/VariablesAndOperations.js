//create a variable to hold the quantity of available plane seats left on a flight
var availablePlaneSeats = 20;
		
//create a variable to hold the cost of groceries at checkout
var groceriesCost = 122.55;

//create a variable to hold a person's middle initial
var middleInitial = 'S';

//create a variable to hold true if it's hot outside and false if it's cold outside
var isHotOutside = true;

//create a variable to hold a customer's first name
var customerFirstName = 'Daniel';

//create a variable to hold a street address
var streetAddress = '209 West Cambridge Road';

//print all variables to the console
console.log(availablePlaneSeats);
console.log(groceriesCost);
console.log(middleInitial);
console.log(isHotOutside);
console.log(customerFirstName);
console.log(streetAddress);

//a customer booked 2 plane seats, remove 2 seats from the available seats variable
availablePlaneSeats = availablePlaneSeats - 2;

//impulse candy bar purchase, add 2.15 to the grocery total
groceriesCost = groceriesCost + 2.15;


//birth certificate was printed incorrectly, change the middle initial to something else
var middleInitial = 'E';

//the season has changed, update the hot outside variable to be opposite of what it was
var isHotOutside = false;

//create a new variable called full name using the customer's first name, the middle initial, and a last name of your choice
var nameFull = customerFirstName +' ' +  middleInitial + ' ' + 'Plainview';

//print a line to the console that introduces the customer and says they live at the address variable
console.log('Introducing ' + nameFull + ', who lives at ' + streetAddress + '.');