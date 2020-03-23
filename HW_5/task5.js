// Task 1
function testThrow(exception) {
  try {
    throw exception;
  } catch (error) {
    console.log("Caught:" + " " + error);
  }
}
testThrow(5); // Caught: 5
testThrow('Test'); // Caught: Test
testThrow(new Error('An error happened')); // Caught: Error: An error happened



// Task 2
function calcRectangleArea(width, height) {
  try {
    if (isNaN(width) || isNaN(height)) {
        throw new Error("Функції передано не числові параметри");
    } else if ( width < 0 || height < 0 ) {
        throw new Error("Параметри повинні бути більше нуля");
      }    
    return width * height; 
  } catch (error) {
      console.log(error.message);
  }
      }

calcRectangleArea(-5, 6);
calcRectangleArea(5, "ddd6");
calcRectangleArea(5, 6);



// Task 3

function checkAge() {
  let age = prompt("Enter your age:", "");
  if (age == "") {
    throw new Error("The field is empty! Please enter your age");
  } else if (isNaN(age)) {
    throw new Error("Ви ввели нечислове значення");
  } else if (age < 14) {
    throw new Error("Йди вчи уроки");
  }
} 
try {
      let result = checkAge();
      console.log("Ви можете приступати до перегляду фільму");
  } catch (exception) {
      console.log(exception.name);
      console.log(exception.message);
  }



 // Task 4
 class MonthException {
  name = "MonthException"
  constructor(message) { 
      this.message = message;   
  } 
}

function showMonthName(month) {

 try {
  let arr = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
  
  if(month > 0 && month <= 12) {
    return arr[month-1];
  } else {
    throw new Error("Incorrect month number")
  }        
  } catch (exception) {
    let err = new MonthException(); 
    console.log(err.name + " " + exception.message);
  }
}

console.log(showMonthName(5)) // May
console.log(showMonthName(14)) // MonthException Incorrect month number
