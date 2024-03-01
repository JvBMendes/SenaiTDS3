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
    var selectPratos = document.getElementById("selectPrato")
    var selectBebidas = document.getElementById("selectBebida")
    var selectSobremesas = document.getElementById("selectSobremesa")
    var resultadoSpan = document.getElementById("resultado")

    var total = 0;
    var prato = 0;
    var bebida = 0;
    var sobremesa = 0;

    switch (selectPratos.value) {
        case "Prato Feito":
            total += 12.90;
            prato = 12.90 
            break;
        case "Lasanha":
            total += 18.20;
            prato = 18.20 
            break;
        case "Feijoada":
            total += 22.50;
            prato = 22.50 
            break;
    }
    switch (selectBebidas.value) {
        case "Suco Natural de Maracujá":
            total += 12.90;
            bebida = 12.90;
            break;
        case "Suco Natural de Goiaba e Abacaxi":
            total += 12.90;
            bebida = 12.90; 
            break;
        case "Tampico 2 Litros":
            total += 10.50;
            bebida = 10.50; 
            break;
    }
    switch (selectSobremesas.value) {
        case "Sagu":
            total += 5;
            sobremesa = 5; 
            break;
        case "Canjica":
            total += 4.30;
            sobremesa = 4.30 ;
            break;
        case "Mousse de Maracujá":
            total += 7.50;
            sobremesa = 7.50;
            break;
    }

    document.getElementById("total").style.display="flex"
    document.getElementById("prato-pronto").innerHTML= prato.toFixed(2)
    document.getElementById("bebida-pronto").innerHTML= bebida.toFixed(2)
    document.getElementById("sobremesa-pronto").innerHTML= sobremesa.toFixed(2)


    resultadoSpan.textContent="R$" + total;
}
function limpar() {
    document.getElementById("total").style.display = "none";
    document.getElementById("selects-div").style.display = "none";
    document.getElementById("exampleFormControlInput1").value = "";
    document.getElementById("resultado").value = "";
    document.getElementById("selectPrato").value = "Selecione um prato";
    document.getElementById("selectBebida").value = "Selecione uma bebida";
    document.getElementById("selectSobremesa").value = "Selecione uma sobremesa";
  }