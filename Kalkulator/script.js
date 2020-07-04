var buttonPlus = document.getElementById('buttonPlus');
var buttonMinus = document.getElementById('buttonMinus');
function onButtonPlusClick() {
  var num1,num2, result;
	num1=Number(document.getElementById('n1').value);
	num2=Number(document.getElementById('n2').value);
	result=num1+num2;
  console.log(result);
}
function onButtonMinusClick() {
  console.log('onButtonMinusClick');
}
buttonPlus.addEventListener('click', onButtonPlusClick);
buttonMinus.addEventListener('click', onButtonMinusClick);
