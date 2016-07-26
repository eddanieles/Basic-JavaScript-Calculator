
var augend = document.querySelector("#number1");
var addend = document.querySelector("#number2");


function sum(augend, addend) {
  var result = +augend + +addend;
  return(result);
}

var calculate = document.querySelector("button")

calculate.addEventListener("clicked", sum());

//var login = document.querySelector("#login");
//console.log(login.value);
