
var augend = document.querySelector("#number1");
var addend = document.querySelector("#number2");


/* function sum(augend, addend) {
  var result = +augend + +addend;
  return(result);
} */

var calculate = document.querySelector("button")


calculate.addEventListener("click", function(event){
  var num1 = Number(augend.value);
  var num2 = Number(addend.value);
  var result = num1 + num2;
  console.log(result);

  var newItem = document.createElement("p");
  newItem.innerText = result;
  var answer = document.querySelector(".output");
  answer.appendChild(newItem);
});

/*
item.addEventListener("click", function(event){
  var clickedItem = event.target;
  var text = clickedItem.innerText;
  var newItem = document.createElement("li");
  newItem.innerText = text;
  var list = document.querySelector("#list ul");
  list.appendChild(newItem);
});
*/
//var login = document.querySelector("#login");
//console.log(login.value);
