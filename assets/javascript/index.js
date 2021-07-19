
//1
const isAdult = function (){
  const majority = +prompt("Укажите ваш возраст");
  if( majority>=18){
    alert("true");
  }
  else{
    alert('false')
  }
}
isAdult();
//3
const SidesTriangle = function(a,b,c){
  a = +prompt('a= ');
  b = +prompt('b= ');
  c = +prompt('c= ');
  if (a + b > c && a + c > b && b + c > a){
    alert("true")
  }else{
  alert("false")
}
}
SidesTriangle();
//2
const checkMultiplicity = function(a,b){
  //a = +prompt('a= ');
  //b = +prompt('b= ');
  if(a%b===0){
    alert('true');
  }
  else{
    alert('false');
  }
}
checkMultiplicity(25, 5) // true
checkMultiplicity(15, 3) // true
checkMultiplicity(15, 5) // true
checkMultiplicity(15, 4) // false
