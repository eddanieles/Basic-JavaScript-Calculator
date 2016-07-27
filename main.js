
var augend = document.querySelector("#number1");
var addend = document.querySelector("#number2");


var calculate = document.querySelector("button")


calculate.addEventListener("click", function(event){

  var num1 = Number(augend.value);
  var num2 = Number(addend.value);
  if (isNaN(num1) === true || isNaN(num1) === true) {
    alert("Hey, that is not a number ass hole!")
  };
  
  var result = num1 + num2;

//  var newItem = document.createElement("p");
//  newItem.innerText = result;
  var answer = document.querySelector(".output");
  answer.innerText = result;
  console.log(result);

  answer.addEventListener('mousemove', function(event){

    var x = event.clientX;
    var y = event.clientY;
    //div.textContent = x + ', ' + y;
    answer.style.backgroundColor = 'rgb(' + x + ',' + y + ', 100)';
    answer.style.color = 'rgb(' + y + ',' + x + ', 100)'
  });
});
