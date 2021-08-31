function Person(initialAge){
    let age = initialAge;
      // Add some more code to run some checks on initialAge
    this.amIOld=function(){
     // Do some computations in here and print out the correct statement to the console
     let text = 'You are old.'
      if (this.age < 0){
          text = 'Age is not valid, setting age to 0.';
      }else if(this.age < 13){
          text = 'You are young.';
      }else if (this.age >= 13 && this.age < 18){
          text = 'You are a teenager.';
      }
      console.log(text);
    };
     this.yearPasses=function(){
            // Increment the age of the person in here
          this.age++;
     };
  }

new Person(4)