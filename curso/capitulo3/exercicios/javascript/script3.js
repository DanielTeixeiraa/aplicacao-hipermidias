var b = prompt("Digite um numero");

const fatorial = (n) =>{
  var a = n;
  for(var i = 1; i < n; i++){
    a = a * i;
  }
  return (a);
}

alert(fatorial(b));
