//First
const currentDay = new Date().getDay();

switch (currentDay) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
}

//Second
for (let i = 0; i < 100; i++) {
  console.log(i);
}

//Third
let i = 0;
while (i < 50) {
  i++;
  console.log(i);
}

//Fourth
let j = 0;
do {
  console.log("Example Text");
  j++;
} while (j < 150);

//Fifth
let myArray = [];
for (let i = 0; i < 1000; i++) {
  let myPush = myArray.push(i * i);
}
console.log(myArray);
