function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum:', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var minutes = convertHoursToMinutes(2);
console.log('2 hours in minutes:', minutes);

function getGreeting(name) {
  return 'Hello ' + name;
}

var myGreeting = getGreeting('James');
console.log('My greeting:', myGreeting);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var sumAndProduct = addAndMultiplyBy5(10, 5);
console.log('10 and 5 added together then multiplied by 5: ', sumAndProduct);

function mulitplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

var productAndQuotient = mulitplyAndDivideBy5(35, 10);
console.log('The product of 35 and 10 divided by 10: ', productAndQuotient);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var difference = subtractTwoNumbers(22, 7);
console.log('The difference between 22 and 7: ', difference);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

var circumferenceOfCircle = getCircleCircumference(5);
console.log('Circumference of a circle with radius 5: ', circumferenceOfCircle);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var myFullName = getFullName('James', 'Kato');
console.log('My full name is: ', myFullName);

function cube(number) {
  return number * number * number;
}

var cubeOfNumber = cube(5);
console.log('Cube of 5: ', cubeOfNumber);
