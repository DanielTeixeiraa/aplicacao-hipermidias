var a = prompt("Digite a palavra");

const poli = (b) =>{
  b = b.toLowerCase();
  for (let i=0; i<b.length; i+=1){
    if (b[i] !== b[b.length - 1 - i]){
      return false;
    }
  }
  return true;
}

if(poli(a)){
  alert("É Palíndromo");
}else{
  alert("Nao é Palíndromo");
}
