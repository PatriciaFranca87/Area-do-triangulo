function area(){
    let base= parseInt(document.getElementById("qtde").value);
    let altura= parseInt(document.getElementById("qtde2").value);
    let area = (base*altura)/2;
    document.getElementById("area"). innerText= `A área do triângulo é: ${area}`
    document.getElementById("resultado-container").style.display="block";
}