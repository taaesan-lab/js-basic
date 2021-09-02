class Person {

  constructor(initialAge){
    this.age = initialAge;
  }
  // Add some more code to run some checks on initialAge
  amIOld() {
    // Do some computations in here and print out the correct statement to the console
    if (this.age < 0) {
      console.log('Age is not valid, setting age to 0.');
      console.log('You are young.');
    } else if (this.age < 13) {
      console.log('You are young.');
    } else if (this.age >= 13 && this.age < 18) {
      console.log('You are a teenager.');
    } else {
      console.log('You are old.');
    }
  };

  yearPasses() {
    // Increment the age of the person in here
    this.age++;
  };
}

function main() {
  var T = parseInt(2);
  let items = [-5, 30]
  for (i = 0; i < T; i++) {
    var age = items[i];
    var p = new Person(age);
    p.amIOld();
    for (j = 0; j < 3; j++) {
      p.yearPasses();

    }
    p.amIOld();
    console.log("");
  }
}
main();