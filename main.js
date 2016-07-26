
var augend = document.querySelector("#number1");
var addend = document.querySelector("#number2");


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
