const raining = true;
const cold = true;

if (raining) {
  console.log("Don't forget your umbrella!");
}

if (cold) {
  console.log("Make sure you pick out a scarf!");
}

console.log("Now you're ready to go outside!");

//code no 2

const temperature = -12;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");

//code no 3

const isCitizen = true;
const age = 26;

if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}

//code no 4

if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea…");
}

//code no 5

if (!raining) {
  console.log("Leave your umbrella at home!");
}
