// Task 1.1
var arr = [2,3,4,5,];
let res = 1;

for (let i = 0; i < arr.length; i++) {
  res *= arr[i]; 
}
console.log(res);


// Task 1.2
var arr = [2,3,4,5,];
let res = 1;
let i = 0;

while (i < arr.length){
  res *= arr[i]; 
  i++;
}
console.log(res);




// Task 2
for (let i = 0; i <= 15; i++) {
  if (i % 2) {
    console.log(i + " is odd");
  } else {
    console.log(i + " is even");
  }
}


// Task 3
function randArray(k) {
  let max = 500;
  let random;
  var arr = []; 
 
  for (var i = 0; i < k; i++) {
    random = Math.floor(Math.random() * (max + 1));
    arr[i] = random;
  }
  console.log(arr);
}



// Task 4
function raiseToDegree(a,b) {
  let res;
  res = Math.pow(a, b);
  console.log(res);
}


// Task 5
function findMin() {
  var min = arguments[0]; 
  
  for (var i = 0; i < arguments.length; i++) {
    
    if(min > arguments[i]) {
       min = arguments[i];
    }
  }
  console.log(min);      
}
  



// Task 6
function findUnique(arr) {

  for (var i = 0; i < arr.length - 1; i++) {  

    for (var j = i + 1; j < arr.length; j++) { 
        
      if (arr[i] === arr[j]) {
        return false;
      }
    }
  }
  return true;
}

// Task 7
function lastElem(arr, b) {
  
if (b == 0 || isNaN(b) || b === null || b === undefined) {
     return arr[arr.length-1];
       
} else {
   for (let i = arr.length-b; i > 0; i--) {
   arr.shift();
   }
 }
console.log(arr);
}



// Task 8
// variant 1
function capitalize(inputStr) {
  var splits = inputStr.split(" ");
  var outputStr = "";

  for (let i = 0; i < splits.length; i++) {
    let word = splits[i];
    let firstLetter = word.substring(0, 1).toUpperCase();
    let Remainder = word.substring(1, word.length)
    outputStr += firstLetter + Remainder + " ";
  }

  console.log(outputStr)
}


// variant 2
function capitalize(inputStr) {
    var splits = inputStr.split(" ");
    var outputStr = "";

    for (let i = 0; i < splits.length; i++) {
    splits[i] = splits[i].charAt(0).toUpperCase() + splits[i].slice(1);
    outputStr += splits[i] + " ";
    }
console.log(outputStr);
}