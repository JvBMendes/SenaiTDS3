function comecar(){
    var nome = document.getElementById("exampleFormControlInput1").value; 
    show(nome);
}

function show(nome){
    document.getElementById("nomePrint").textContent = nome;
    var div = document.getElementById("selects-div");
    if(nome && nome.trim() !== ""){
        div.style.display = "block";
        document.getElementById("exampleFormControlInput1").style.background = "none"
    }else{
        document.getElementById("error").style.display = "flex"
    }
}

function fechar(){
    document.getElementById("error").style.display = "none"
    document.getElementById("exampleFormControlInput1").style.background = "lightpink"
}

function calcularTotal(){
    var selectCamisa = document.getElementById("selectCamisa")
    var selectTamanho = document.getElementById("selectTamanho")
    var resultadoSpan = document.getElementById("resultado")

    var total = 0;
    var camisa = 0;
    var tamanho = 0;

    switch (selectCamisa.value) {
        case "Camisa Preta":
            total +=  12.90;
            camisa =  12.90;
            break;
        case "Camisa Azul":
            total +=  13.20;
            camisa = 13.20 
            break;
        case "Camisa Laranja":
            total += 15.50;
            camisa = 15.50 
            break;
         case "Camisa Rosa":
            total +=  13.50;
            camisa =  13.50;
            break;
            
         case "Camisa Cinza":
            total +=  11.50;
            camisa =  11.50;
            break;
         case "Camisa Marrom":
            total +=  13;
            camisa =  13;
            break;
    }
    switch (selectTamanho.value) {
        case "P":
            total += 0.50;
            tamanho = 0.50;
            break;
        case "M":
            total += 0.75;
            tamanho = 0.75; 
            break;
        case "G":
            total += 1;
            tamanho = 1; 
            break;
    }

    document.getElementById("total").style.display="flex"
    document.getElementById("camisa-pronto").innerHTML= camisa.toFixed(2)
    document.getElementById("tamanho-pronto").innerHTML= tamanho.toFixed(2)



    resultadoSpan.textContent="R$" + total;
}
function limpar() {
    document.getElementById("total").style.display = "none";
    document.getElementById("selects-div").style.display = "none";
    document.getElementById("exampleFormControlInput1").value = "";
    document.getElementById("resultado").value = "";
    document.getElementById("selectCamisa").value = "Selecione uma camisa";
    document.getElementById("selectTamanho").value = "Selecione um tamanho";

  }