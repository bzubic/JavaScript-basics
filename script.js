// BMI Calculator with IF/ELSE statements
function bmiCalculator(weight, height) {
  var bmi = weight / Math.pow(height, 2);
  var interpretation;

  if (bmi < 18.5) {
    interpretation = "Your BMI is " + bmi + ", so you are underweight.";
  } else if (bmi > 18.5 && bmi < 24.9) {
    interpretation = "Your BMI is " + bmi + ", so you have a normal weight.";
  } else if (bmi > 24.9) {
    interpretation = "Your BMI is " + bmi + ", so you are overweight.";
  }
  return interpretation;
}

// Leap Year checker
function isLeap(year) {
  var leapYear = year % 4 === 0 && (year % 100 > 0 || year % 400 === 0);
  var alsoLeapYear = year % 4 === 0 && year % 100 > 0;

  if (leapYear || alsoLeapYear) {
    return "Leap year.";
  } else {
    return "Not leap year.";
  }
}

// Are you invited to the party?
var guestList = [
  "Martin",
  "Jan",
  "Viliam",
  "Robert",
  "Peter",
  "Boris",
  "Frantisek",
];

var guestCheck = prompt("Ako sa volas?");

if (guestList.includes(guestCheck)) {
  alert("Vitaj na party");
} else {
  console.log("Prepac, ale nie si pozvany 😥");
}

// Fizz Buzz game
var output = [];
var count = 1;

function fizzBuzz() {
  do {
    if (count < 100 && count % 3 !== 0 && count % 5 !== 0) {
      output.push(count);
      count++;
    } else if (count % 3 === 0 && count % 5 !== 0) {
      output.push("fizz");
      count++;
    } else if (count % 5 === 0 && count % 3 !== 0) {
      output.push("buzz");
      count++;
    } else if (count % 3 === 0 && count % 5 === 0) {
      output.push("fizzBuzz");
      count++;
    }
  } while (count <= 100);
  console.log(output);
}

// Who is buying lunch?
function whosPaying(names) {
  var randomPerson = Math.floor(Math.random() * names.length);
  var pickOnePerson = names[randomPerson];

  return pickOnePerson + " is going to buy lunch today!";
}

// 99 bottles song
var count = 99;

function beer() {
  while (count >= 0) {
    if (count > 1) {
      console.log(
        count +
          " bottles of beer on the wall, " +
          count +
          " bottles of beer. Take 1 down and pass it around, " +
          (count - 1) +
          " bottles of beer on the wall."
      );
    } else if (count === 1) {
      console.log(
        count +
          " bottle of beer on the wall, " +
          count +
          " bottle of beer. Take one down and pass it around, no more bottles of beer on the wall."
      );
    } else if (count === 0) {
      console.log(
        "No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall."
      );
    }
    count--;
  }
}
