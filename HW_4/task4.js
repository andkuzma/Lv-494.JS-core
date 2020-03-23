// Task 1
function propsCount(currentObject) {
  return Object.keys(currentObject).length

}


// Task 2
  let obj = {
  firstName: "Peter",
  lastName: "Peterson",
  position: "developer",
  age: 25,
  experience : 4  						
}

function showProps(obj) {
  let propNames = Object.getOwnPropertyNames(obj);
  let valueNames = Object.values(obj);
  console.log(propNames);
  console.log(valueNames);

}


// Task 3

class Worker  {
  #experience  = 1.2;
	constructor(fullName, dayRate, workingDays) { 
    this.fullName = fullName;
    this.dayRate = dayRate;
    this.workingDays = workingDays;

  }
  showSalary() {    
    let salary = this.dayRate * this.workingDays;
    console.log(this.fullName + " salary " + salary);
  }

  showSalaryWorker() {
    return this.dayRate * this.workingDays * this.#experience;
  }
  
  
  showSalaryWithExperience() {
    let salaryWithExp = this.dayRate * this.workingDays * this.#experience;
    console.log(this.fullName + " salary " + salaryWithExp);
  }
  get showExp() {
    return this.#experience;
  }
  set setExp(value) {
    if (value < 0) {
      alert("Negative");
      return;
    }    
    this.#experience = value;
  }
}

let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);                 
worker1.showSalary();
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();
worker1.setExp = 1.5;
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();

let worker2 = new Worker("Tom Tomson", 48, 22);
console.log(worker2.fullName);                 
worker2.showSalary();
console.log("New experience: " + worker2.showExp);
worker2.showSalaryWithExperience();
worker2.setExp = 1.5;
console.log("New experience: " + worker2.showExp);
worker2.showSalaryWithExperience();


let worker3 = new Worker("Andy Ander", 29, 23);
console.log(worker3.fullName);                 
worker3.showSalary();
console.log("New experience: " + worker3.showExp);
worker3.showSalaryWithExperience();
worker3.setExp = 1.5;
console.log("New experience: " + worker3.showExp);
worker3.showSalaryWithExperience();



let salaryArray = [worker1, worker2, worker3];
let sorted = salaryArray.sort((a, b) => {
    return a.showSalaryWorker() - b.showSalaryWorker();
})
console.log(sorted);
for (let i = 0; i < sorted.length; i++) {
    console.log(sorted[i].fullName + ":" + sorted[i].showSalaryWorker());
}






// Task 4
class Person  {
	constructor(name, surname) { 
    this.name = name;
    this.surname = surname;
  }
  showFullName() {
    console.log(this.name + " " + this.surname)
  }
}


class Student extends Person {
  constructor(name, surname, year) {            
    super(name, surname);
    this.year = year;
   }

showFullName(midleName) {
  this.midleName = midleName;
  console.log(this.name + " " + this.surname + " " + this.midleName)
}

showCourse(){
  var today = new Date();
  var currentYear = today.getFullYear();
  let course = currentYear - this.year;
  if (course <= 6 && course > 0 ) {
    return course;
  } else if(course < 0 ) {
    return course = "Майбутній студент";
  } else {
    return course = "Навчання завершено";
  }
  
}
}




// Task 5

class GeometricFigure {

  getArea() {
    return 0;
  }

  toString(){
    return Object.getPrototypeOf(this).constructor.name;
  }

}


class Triangle extends GeometricFigure {
  constructor(a, h) {   
    super ();          
    this.a = a;
    this.h = h;
       }
  getArea(){
    let area = (this.a * this.h) / 2;
    return area;
  }
} 

class Square extends GeometricFigure {
  constructor(b) {            
    super ();         
    this.b = b;
  }
  getArea(){
    let area = this.b * this.b;
    return area;
  }
} 

class Circle extends GeometricFigure {
  constructor(r) {
    super ();             
    this.r = r;
  }
  getArea(){
    let Pi = 3.14;
    let area = Pi * this.r * this.r;
    return area;
  }
} 

function handleFigures(figures) {
  let area;
  let obj= JSON.stringify(figures);
  let propNames = Object.getOwnPropertyNames(obj);
  let z;
  let Geometric = ["Triangle", "Square", "Circle"];
  var arr = []; 
  for ( i=0; i < figures.length; i++){
      if (figures[i] instanceof Triangle ) {
      area = figures[0];
      z = area.getArea();
      console.log("Geometric figure: " + Geometric[0] + " "  + z);
      } else if(figures[i] instanceof Square) {
      area = figures[1];
      z = area.getArea();
      console.log("Geometric figure: " + Geometric[1] + " "  + z);
    }else if(figures[i] instanceof Circle) {
      area = figures[2];
      z = area.getArea();
      console.log("Geometric figure: " + Geometric[2] + " "  + z);
    } else {
    console.log("Geometric figure: not fined");
    }
      arr[i] = z;
  } 
  var result = arr.reduce(function(sum, current) {
  return sum + current;
    }, 0);
  console.log(result);
}