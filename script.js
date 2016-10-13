/*
1. Write a JavaScript program to display the current day and time in the following format. Go to the editor
Sample Output : Today is : Friday.
Current time is : 4 PM : 50 : 22

var d = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][new Date().getDay()];
var h = new Date().getHours();
var m = new Date().getMinutes();
var ms = new Date().getMilliseconds();

console.log("Today is : " + d + "\n" + "Current time is : " + (h < 12 ? h + " AM : " : h - 12 + " PM : ") + m + " : " + ms);

2. Write a JavaScript program to print the contents of the current window.

window.print();

3. Write a JavaScript program to get the current date. Go to the editor
Expected Output :
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

var mm = new Date().getMonth() + 1;
var dd = new Date().getDate();
var yyyy = new Date().getFullYear();
console.log(mm + "-" + dd + "-" + yyyy + ", " +
 mm + "/" + dd + "/" + yyyy + ", " +
 dd + "-" + mm + "-" + yyyy + ", " +
 dd + "/" + mm + "/" + yyyy);

4. Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.

var s = (5 + 6 + 7) / 2;
var a = Math.sqrt(s * (s - 5) * (s - 6) * (s - 7));
console.log(a);

5. Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front.

var array = "w3resource".split("");
var ctr = array.length;
for (var i = 0; i < ctr; i++) {
  array.splice(i, 0, array.pop());
}
console.log(array.join(""));

6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.

function isLeapYear(year) {
  return (year - 2016) % 4 === 0 ? true : false;
}

console.log(isLeapYear(2019));

7. Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050.

for (var i = 2014; i <= 2050; i++) {
  if (new Date(i, 0, 1).getDay() === 0)
    console.log(i);
}

8. Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched".

var r = Math.floor((Math.random() * 10) + 1).toString();
var n = window.prompt("Enter a number between 1 and 10:");
alert (n == r ? "Good Work!" : "Not Matched!");

9. Write a JavaScript program to calculate days left until next Christmas.

var today = new Date();
var xmas = new Date(2016, 11, 25);
console.log(Math.ceil((xmas - today)/1000/60/60/24));

Write a JavaScript program to calculate multiplication and division of two numbers (input from user).

function mult() {
  n1 = document.getElementById('n1').value;
  n2 = document.getElementById("n2").value;
  document.getElementById("result").innerHTML = n1 * n2;
}
function divide() {
  n1 = document.getElementById('n1').value;
  n2 = document.getElementById("n2").value;
  document.getElementById("result").innerHTML = n1 / n2;
}

11. Write a JavaScript program to convert temperatures to and from celsius, fahrenheit. Go to the editor
[ Formula : c/5 = (f-32)/9 [ where c = temperature in celsius and f = temperature in fahrenheit ]
Expected Output :
60°C is 140 °F
45°F is 7.222222222222222°C
*/

function fToC() {
  fTemp = document.getElementById('fTemp').value;
  cTemp = (fTemp - 32) / 9 * 5;
  document.getElementById("cTemp").innerHTML = cTemp;
}
