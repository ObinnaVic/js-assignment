// 1.  
let string = 'string';
let number = 123;
let boolean = true;
let hello;
let x = {};
let obj = {
    name: 'Victor'
}

// 2.
typeof string;
typeof number;
typeof boolean;
typeof hello;
typeof x;
typeof obj

// 3.
let value1;
let value2 = ""

// 4.
const firstName = "Victor", lastName = "Nkire", MaritaLStatus = "Single", age = "22", Country = "Nigeria"; 

// 5.
0 == '';
0 == '0';
undefined == null;

// 6.
0 === "0"
undefined === null;
2 + 2 == 5

// 7.
8 + 3 == 11;
8 - 3 == 5;
8 * 3 == 24;
8 / 3 == 2.66667;
8 % 3 == 2;
8 ** 3 == 512;

// 8.
4 % 2 == 0 //even
5 % 2 == 1 //odd

// 9.
4 > 3 //true
4 >= 3 // false
4 < 3 //false
4 <= 3 //false
4 == 4 //true
4 === 4 //true
4 != 4 //false
4 !== 4 //false
4 != '4' //false
4 == '4' //true
4 === '4' //false
4 > 3 && 10 < 12 //true
4 > 3 && 10 > 12 //false
4 > 3 || 10 < 12 //true
4 > 3 || 10 > 12 //true
!(4 > 3) //false
!(4 < 3) //true
!(false) //true
!(4 > 3 && 10 < 12) //false
!(4 > 3 && 10 > 12) //true
!(4 === '4') //true

//10 .
const myArray = ["javascript", "will", "not", "kill", "me"];

myArray.length;
myArray[2] = "third";
myArray[4] = 5;
console.log(myArray[1]);

// 11.
let myObject = {
    firstName: 'Victor',
    lastName: 'Nkire',
    maritalStatus: 'Single',
    age: 22,
    country: 'Nigeria'
}

myObject['country'] = 'Jand';
console.log(myObject)

// 12.
function solution(a, b) {
  a > b ? "a is greater than b" : "a is less than b";
}

function solution2(a, b) {
  if (a > b) {
    return "a is greater than b";
  } else {
    return "a is less than b";
  }
}

// 13.
const scores = (score) =>
  score > 80 || score == 100
    ? "A"
    : score <= 79 && score > 70
    ? "B"
    : score <= 69 && score > 60
    ? "C"
    : score <= 59 && score > 50
    ? "D"
    : score <= 49
    ? "F"
    : ""; 


// 14.
function seasons(season) {
    switch (season) {
        case "September", "October", "November":
            return 'Autumn'
            break;
        case "December", "January", "February":
            return 'Winter'
            break;
        case "March", "April", "May":
            return "Spring"
            break;
        case "June", "July","August":
            return "Summer"
            break;
      default:
        break;
    }
}

// 15.
const arr = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 'SATURDAY' || 'SUNDAY') {
        return 'Week-End';
    } else {
        return 'Week-Day';
    }
}


// 16.
