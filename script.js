function calc(){
    var num2 = document.getElementById('num1').value;
    var num1 = document.getElementById('num2').value;
    var operation = document.getElementById('operations').value;
    var result = document.getElementById('resdata');
    var res="";
  
    switch(operation){
      case 'add': sum = parseFloat(num2) + parseFloat(num1);
      res = "AnswerThe addition of two number is " + sum;
      break;
      case 'sub': sub = parseFloat(num2) - parseFloat(num1);
      res = "The subtraction of two number is " + sub;
      break;
      case 'mult': mult = parseFloat(num2) * parseFloat(num1);
      res = "The multiplication of two number is " + mult;
      break;
      case 'div': div = parseFloat(num2) / parseFloat(num1);
      res = "The division of two number is " + div;
      break;
      default: res = "Sorry it not exist!";
    }
    result.innerHTML=res;
}