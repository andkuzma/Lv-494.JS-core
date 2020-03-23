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
	constructor(fullName, dayRate, workingDays) { 
    this.fullName = fullName;
    this.dayRate = dayRate;
    this.workingDays = workingDays;

  }
  showSalary() {    
    let salary = this.dayRate * this.workingDays;
    console.log(this.fullName + " salary " + salary);
  }
  #experience  = 1.2;
  
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