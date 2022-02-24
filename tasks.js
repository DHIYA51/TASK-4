//Task 1: Simple Programs todo for variables
//Declare four variables without assigning values and print them in console
let a
let b
let c
let d
console.log(10, 20, 30, 40)


//How to get value of the variable myvar as output
var myvar = 1;
console.log(myvar);

//Declare variables to store your first name, last name, marital status, country and age in multiple lines
let e = {
    first_name: "Dhiyanesh",
    last_name: "kannan",
    marital_status: "Single",
    country: "India",
    age: "26"
}
console.log(e)

//Declare variables and assign string, boolean, undefined and null data types
let f = "guvi"
let g = true
let h
let l = null
console.log(typeof(f))
console.log(typeof(g))
console.log(typeof(h))
console.log(typeof(l))

//Convert the string to integer
let y = "i am 26 years old"
var yy = "you are 16 years old"
console.log(parseInt(y))
console.log(Number(y))
console.log(+(y))
console.log(parseInt(yy))
console.log(Number(yy))
console.log(+(yy))


//Write 6 statement which provide truthy & falsey values.
let v = 1
v = "1"
v = [1]
console.log(1 == "1")
console.log("1" == [1])
console.log([1] == 1)
console.log(1 === "1")
console.log("1" === [1])
console.log([1] === 1)

//TASK 2:Square of a number
var a = Math.pow(5, 2);
var b = Math.pow(8, 2);
console.log(a, b);

//Swapping 2 numbers
var a = 15;
var b = 10;
[a, b] = [b, a];
console.log(a);
console.log(b);

//Addition of 3 numbers
var a1 = 13;
var b1 = 15;
var c1 = 17;
console.log(a + b + c);

//Celsius to Fahrenheit conversion
let cel = 36
let fah = cel * 1.8 + 32
console.log(fah)


//Meter to miles
let me = 32
let miles = me * 0.00062137
console.log(miles)


//Pounds to kg
let pound = 50
let kilo = pound * 0.45
console.log(kilo)


//Calculate Batting Average
let runs = 10000;
let matches = 550;
let notout = 50;
let avg = runs / (matches - notout);
console.log(avg)

//Calculate five test scores and print their average
let a2 = 100
let b2 = 98
let c2 = 99
let d2 = 98
let e2 = 100
let average = (a2 + b2 + c2 + d2 + e2) / 5
console.log(average)


//Power of any number x ^ y
let x = 5
let y = 3
let power = x ** y
console.log(power)


//Calculate Simple Interest
let p = 36000
let n = 12
let r11 = 12.6
let SI = (p * n * r11) / 100
console.log(SI)


//Calculate area of an equilateral triangle
let a3 = 5
let arequilateralTriangle = (1.73 * a3 * a3) / 4
console.log(arequilateralTriangle)


//Area Of Isosceles Triangle
let a4 = 2
let b4 = 3
let AltitudeOfIsoscelesTriangle = Math.sqrt(Math.pow(a4, 2) - (Math.pow(b4, 2) / 4));
let h = AltitudeOfIsoscelesTriangle
let AreaOfIsoscelesTriangle = ((1 * b4 * h) / 2)
console.log(AreaOfIsoscelesTriangle)


//Volume Of Sphere
let radius = 5;
let volumePOfSphere = (4 / 3) * Math.PI * Math.pow(radius, 3);
console.log(volumePOfSphere)


//Volume Of Prism
let b5 = 4.5
let h5 = 6
let volumeOfPrism = b5 * h5
console.log(volumeOfPrism)


//Find area of a triangle.
let b6 = 5
let h6 = 7
let areaOfTriangle = (1 / 2) * b6 * h6
console.log(areaOfTriangle)


//Task 3
//Write a loop that makes seven calls to console.log to output the following triangle:
let n = 7;
let string = "";
for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
        string += "*";
    }
    string += "\n";
}
console.log(string);

//Iterate through the string array and print it contents
var strArray = ["Jazz", "Blues", "New Age", "Classical", "Opera"];
console.log(strArray);

//write a code to count the elements in the array
var a = [11, 22, 33, 44, 55];
console.log(a.length);

//Create an array called foods holds the names of your top 20 favorite foods, starting with the best food.
let foods = ["rice", "dhal", "parotta", "chappati", "milkshake", "juice", "meat", "chicken", "biriyani", "dosa",
        "poori", "idly", "samosa", "egg", "fish", "potato", "mushroom", "pasata", "noodles", "prawn"
    ]
    //Find the length of your foods array
let foods = ["rice", "dhal", "parotta", "chappati", "milkshake", "juice", "meat", "chicken", "biriyani", "dosa",
    "poori", "idly", "samosa", "egg", "fish", "potato", "mushroom", "pasata", "noodles", "prawn"
];
console.log(foods.length);
//Foods variable holds the names of your top 20 favorite foods, 
//starting with the best food. How can you find your fifth favorite food?
let food = ["rice", "dal", "chapathi", "biriyani", "pizza", "burger", "gheerice", "tandoori",
    "naan", "paneet pulao", "chettinadchicken", "poori", "dosa", "idly",
    "pongal", "curdrice", "panipoori", "muttoncurry", "fishfinger", "prawn65"
]

//e.Find the length of your foods array
console.log(food.length)
let a = [...food]
console.log(a[5])

//Starting from the existing friends variable below, 
//change the element that is currently “Mari” to “Munnabai”.
let friends = ["Mari", "MaryJane", "CaptianAmerica", "Munnabai", "Jeff", "AAK chandran"];

function dataHandling(input) {
    input.splice(0, 1, "Munnabai");
    console.log(input)
}
dataHandling(friends);