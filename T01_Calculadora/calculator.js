var num1;
var num2;
var result;

function sum(){
  var num1Element = document.getElementById("mynum1");
  var num2Element = document.getElementById("mynum2");
  num1 = num1Element.value;
  num2 = num2Element.value;
  console.log(num1);
  console.log(num2);
  result = Number(num1) + Number(num2);
  console.log(result);
  var resultElement = document.getElementById("resultado");
  resultElement.innerHTML = '<h3>' + 'Resultado = ' + result + '</h3>';
}

function resta(){
  var num1Element = document.getElementById("mynum1");
  var num2Element = document.getElementById("mynum2");
  num1 = num1Element.value;
  num2 = num2Element.value;
  console.log(num1);
  console.log(num2);
  result = Number(num1) - Number(num2);
  console.log(result);
  var resultElement = document.getElementById("resultado");
  resultElement.innerHTML = '<h3>' + 'Resultado = ' + result + '</h3>';
}

function multiplication(){
  var num1Element = document.getElementById("mynum1");
  var num2Element = document.getElementById("mynum2");
  num1 = num1Element.value;
  num2 = num2Element.value;
  console.log(num1);
  console.log(num2);
  result = Number(num1) * Number(num2);
  console.log(result);
  var resultElement = document.getElementById("resultado");
  resultElement.innerHTML = '<h3>' + 'Resultado = ' + result + '</h3>';
}

function division(){
  var num1Element = document.getElementById("mynum1");
  var num2Element = document.getElementById("mynum2");
  num1 = num1Element.value;
  num2 = num2Element.value;
  console.log(num1);
  console.log(num2);
  result = Number(num1) / Number(num2);
  console.log(result);
  var resultElement = document.getElementById("resultado");
  resultElement.innerHTML = '<h3>' + 'Resultado = ' + result + '</h3>';
}

function exponente2(){
  var num1Element = document.getElementById("mynum1");
  num1 = num1Element.value;
  console.log(num1);
  
  result = Number(num1)*Number(num1);
  console.log(result);
  var resultElement = document.getElementById("resultado");
  resultElement.innerHTML = '<h3>' + 'Resultado = ' + result + '</h3>';
}

function sqrt(){
  var num1Element = document.getElementById("mynum1");
  num1 = num1Element.value;
  console.log(num1);
  
  result = Math.sqrt(Number(num1));
  console.log(result);
  var resultElement = document.getElementById("resultado");
  resultElement.innerHTML = '<h3>' + 'Resultado = ' + result + '</h3>';
}

function pow(){
  var num1Element = document.getElementById("mynum1");
  var num2Element = document.getElementById("mynum2");
  num1 = num1Element.value;
  num2 = num2Element.value;
  console.log(num1);
  console.log(num2);

  //result = Math.pow(7,2);
  result = Math.pow(Number(num1),Number(num2));
  console.log(result);
  var resultElement = document.getElementById("resultado");
  resultElement.innerHTML = '<h3>' + 'Resultado = ' + result + '</h3>';
}





