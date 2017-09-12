// WARM UP!

// 1
//  WRITE A CONSTRUCTOR FUNCTION
// Write a basic Dog() constructor function with the following properties set to 'true'; barks and wagstail.
// Write your code below:
function Dog(barks, wagstail) {
  this.barks = barks
  this.wagstail = wagstail
}


// Create an instance of Dog.
// Define your variable, fido.
// Write your code below:
let fido = new Dog(true, true)

// Print fido barks. It should print true.
// It should print, true.
// Write your code below:
console.log(fido.barks);

// 2
// CLASS DECLARATION
// Declare a DogClass class.
// It should have the following properties set to 'true'; barks and wagstail.
// Write your code below:
class DogClass {
  constructor(barks, wagstail) {
    this.barks = barks;
    this.wagstail = wagstail;
  }
}

// Create an instance of DogClass()
// Define your variable, spike
// Write your code below:

let Spike = new DogClass(true, true)
// Print spike wagstrail.
// It should print, true.
// Write your code below:
console.log(Spike.wagstail);

// 3
// EXTENDS
// DECLARE A SUBJECT CLASS
// It should have the property of 'requiresBooks' set to 'true'.
// Write your code below:
class Subject {
  constructor() {
    this.requiresBooks = true;
  }
}

// DECLARE A SUB-CLASS MATH
// Extend from Subject
// It should inherit requiresBooks
// It should have an additional property of 'requiresCalculator ' set to 'true'.
// Write your code below:
class Math extends Subject {
  constructor(requiresBooks) {
    super(requiresBooks);
    this.requiresCalculator = true;
  }
}

// Declare a 'math' variable, creating an instance of Math
// Write your code below:
let math = new Math(true)

//Print math
// It should print: "Math {requiresBooks: true, requiresCalculator: true}"
// Write your code below:
console.log(math);

//4
// SUB-CLASS
// DECLARE A SUBCLASS OF GEOMETRY
// Extend from Math
// It should have an additional property of 'requiresRuler' set to true.
// Write your code below:
class Geometry extends Math {
  constructor(){
    super()
    this.requiresRuler = true
  }
}

// Declare a 'geometry' variable, creating an instance of Geometry
// Write your code below:
let geometry = new Geometry(true)
//******can use true once and will inherit from others*****

// Print geometry
// It should print: "Geometry {requiresBooks: true, requiresCalculator: true, requiresRuler: true}"
// Write your code below:
console.log(geometry);

//5
// SUB-CLASS
// DECLARE A SUBCLASS OF TRIGONOMETRY
// Extend from Geometry
// The constructor should have a parameter of 'specialCalculator'
// Set the value of specialCalculator equals to specialCalculator so you can pass this value when you create an instance of Trigonometry.
// Write your code below:
class Trigonometry extends Geometry{
  constructor(specialCalculator){
    super()
    this.specialCalculator = specialCalculator
  }
}

// Declare a 'trigonometry' variable, creating an instance of Trigonometry, passing in an argument of 'Ti-83'.
// Write your code below:
let trigonometry = new Trigonometry ('Ti-83')

// Print trigonometry
// It should pring: "Trigonometry {requiresBooks: true, requiresCalculator: true, requiresRuler: true, specialCalculator: "Ti-83"}"
// Write your code below:
console.log(trigonometry);

//6
// SUB-CLASS
// DECLARE A SUBCLASS OF CALCULUS
// Extend from Trigonometry
// The constructor should have a parameter of 'requiresRuler' and 'specialCalculator'
// In should inherit 'requiresRuler' and 'specialCalculator'
// Calculus does not require a ruler, so set that property to 'false'. It does require a special calculator, the 'Ti-89'
// Write your code below:

class Calculus extends Trigonometry{
  constructor(requiresRuler, specialCalculator){
    super(requiresRuler, specialCalculator)
    this.requiresRuler = false;
    this.specialCalculator = specialCalculator
  }
}
// Declare a variable of 'calculus', creating an instance of Calculus, passing in a boolean of 'false'
// Write your code below:
let calculus = new Calculus(false, 'Ti-89')

// Print calculus
// It should print: "Calculus {requiresBooks: true, requiresCalculator: true, requiresRuler: false, specialCalculator: "Ti-89"}"
// Write your code below:
console.log(calculus);
