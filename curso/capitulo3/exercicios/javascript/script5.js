var texto = prompt("Digite um email");

const email = text =>{
  var aux = /\S+@\S+\.\S+/;
  return aux.test(text);
}

if(email(texto)){
  alert("é email");
}else{
  alert("Nao é email")
}