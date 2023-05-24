// import data we use data of anothe file

import { message } from "./library.js";
import { display } from "./library.js";
import { person } from "./library.js";
// ==============================
console.log(message)//console screen output
var pnode = document.createElement('p')
pnode.textContent = message;
document.body.appendChild(pnode)//document screen output
// ==================================
let name1 = prompt("Enter your Full Name") //name is parameter declared in library
console.log(display(name1))//console screen output
var pnode1 = document.createElement('p')
pnode1.textContent = display(name1)//document screen output
document.body.appendChild(pnode1)
// ===================================
let name = prompt("Enter your name");
let age = Number(prompt("Enter your age"));
let obj = new person(name,age);
let classOutput = obj.details();
console.log(classOutput); //console screen output
let pnode2 = document.createElement('p');
pnode2.textContent = classOutput; //document screen output
document.body.appendChild(pnode2);