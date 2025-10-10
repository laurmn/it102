// simple arithmatic 

let x = 27;
let y = 45;
// the values assigned to x and y are read as numbers rather than strings because they aren't in quotes
z = x - y;

let a = 46;
let b = 13;
c = a / b;

let d = 30;
let e = 15;
let f = 12;
total = f * (d + e);

// the modulus (%) will represent the absolute value of the remainder after dividing by the specified number

let militarySpecific = 23;
normalTime = militarySpecific % 12;

// we are going to use a for loop (that will display all the hours)
for(let militaryTime = 0; militaryTime <= 24; militaryTime++) // loops the code for hours from 0 to 24 in increasing incriments of one
{normalTime2 = militaryTime % 12; // normalTime2 will return the net remainer of military time minus 12
console.log(militaryTime + ":00 military time is the same as " + normalTime2 + ":00 in 12-hour time!");}

for(let tempC = 0; tempC <= 100; tempC++) { // do not put semicolon after parentheses! need to open into the braces for more info
    tempF = tempC * 9 / 5 + 32; // statements inside {} are on a seperate level (?) so ending statements will not affect anything externally (still part of loop)
    console.log(tempC + "°C is equal to " + tempF + "°F");
}

// price of item plus tax and total

let price = 80;
let tax = 0.10
taxTotal = price * tax;
totalWithTax = taxTotal + price;

// assignment operator

let price2 = 150;
price2 *= 1.10; // Multiply and assign

