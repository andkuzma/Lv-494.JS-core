// TASK 1.1
// let x = 1;
// let y = 2;
// let res1 = x + "" + y;
// console.log(res1);
// console.log(typeof res1);

// TASK 1.2

// let x = 1;
// let y = 2;
// let res1 = !!x +""+ y;
// res1
// console.log(res1);
// console.log(typeof res1);



// TASK 1.3

// let x = 1;
// let y = 2;
// let res1 = !!(x + y);
// res1
// console.log(res1);
// console.log(typeof res1);


// TASK 1.4

// let x = 1;
// let y = 2;
// let res1 = x *"1a" + y;
// res1
// console.log(res1);
// console.log(typeof res1);




// TASK 2.1

// let x = prompt("Enter your number", "");
// let res = x >= 0 && x % 2;
// console.log(res);

// TASK 2.2
// let x = prompt("Enter your number", "");
// let res = x % 7;
// console.log(res);




// TASK 3

// let arr = [];
// arr[0] = 7;
// arr[1] = "hello";
// arr[2] = true;
// arr[3] = null;
// alert(arr.length);

// arr[4] = prompt("Enter your value", "");
// alert(arr[4]);

// arr.shift()
// alert(arr);


// TASK 4

// variant 1
// let cities = ["Rome", "Lviv", "Warsaw"];
// let res = cities[0] + "*" + cities[1] + "*" + cities[2];
// console.log(res);


// variant 2
// let cities = ["Rome", "Lviv", "Warsaw"];
// let res = cities + "";
// console.log(res.replace(/,/g,"*"));



// TASK 5

// let isAdult = prompt("Вкажіть ваш вік", "");
// if (isAdult > 18 && isAdult < 130){
// alert("Ви досягли повнолітнього віку");
// }else if (isAdult < 10 && isAdult > 0){
//       alert("Ви ще надто молоді");
//   }else  {
//     alert("Введено некоректні дані");
// }



// TASK 6
    // 6.1

// let a = prompt("Please enter a", "");
// let b = prompt("Please enter b", "");
// let c = prompt("Please enter c", "");

// a = parseFloat(a);
// b = parseFloat(b);
// c = parseFloat(c);
// let P = a+b+c;
// let S;

// if (isNaN(a) || isNaN(b) || isNaN(c)) {
//     alert("input values should be ONLY numbers");  
//      }else if ( a < 0 || b < 0 || c < 0 || a === 0 || b === 0 || c === 0){
//       alert("Incorrect data");
//        }else if (a + b < c || b + c < a || a + c < b){
//          console.log('Triangle doesn�t exist');
//           }else {
//             S=Math.sqrt(( P*(P-2*a)*(P-2*b)*(P-2*c))/16);
//             console.log(parseFloat(S.toFixed(3)));
//           }


   // 6.2
// let a = prompt("Please enter a", "");
// let b = prompt("Please enter b", "");
// let c = prompt("Please enter c", "");

// a = parseFloat(a);
// b = parseFloat(b);
// c = parseFloat(c);

// if (isNaN(a) || isNaN(b) || isNaN(c)) {
//   alert("input values should be ONLY numbers");
// } else if ( a < 0 || b < 0 || c < 0 || a === 0 || b === 0 || c === 0) {
//    alert("Incorrect data");
//      }else if (a + b < c || b + c < a || a + c < b) {
//        console.log('Triangle doesn�t exist');
//         }else if (a*a === (b*b + c*c) || b*b === (a*a + c*c) || c*c === (a*a + b*b)){
//           console.log("Right triangle");
// } 




// TASK 7

    // variant 1

var now = new Date();
var hours = now.getHours();
if ((hours >= 23) || (hours <=5 ) ){
    alert("Доброї ночі");
}else if ((hours > 5) && (hours < 11)){
  alert("Доброго ранку");
}else if ((hours > 11) && (hours < 17)){
  alert("Доброї дня");
}else {
  alert("Доброї вечора");
}


    // variant 2
var now = new Date();
var hours = now.getHours(); 
let message = ((hours >= 23) || (hours <=5 ) ) ? "Доброї ночі" :
((hours > 5) && (hours < 11)) ? "Доброго ранку" :
((hours > 11) && (hours < 17)) ? "Доброї дня" :
"Доброї вечора";

alert( message );




