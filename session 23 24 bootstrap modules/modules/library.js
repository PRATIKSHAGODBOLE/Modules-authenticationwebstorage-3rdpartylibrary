// This is simple variable declaration (export keyword so we can reuse data)
// Note we are export data (variable, function,and class)
export let message = "Hello This is Practice time of modules topic"
// This is function
export let display = (name1)=>{
    return `Function : Hello ${name1}`

}

// This is class
export class person {
    constructor(name , age) {
    //   this.name = prompt("Enter your name"); // Prompt for name
    //   this.age = Number(prompt("Enter your age")); // Prompt for age and convert to a number
    this.name = name;
    this.age = age;
    }
  
    details() {
      return `Name: ${this.name}\nAge: ${this.age}`;
    }
  }
  