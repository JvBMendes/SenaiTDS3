function Somar(){
    var num1 = document.getElementById("num1").valueAsNumber;
    var num2 = document.getElementById("num2").valueAsNumber;
    var res = num1+num2;
    document.getElementById("resSoma").textContent = res.toFixed(3)
}

function Subtrair(){
    var num1 = document.getElementById("num3").valueAsNumber;
    var num2 = document.getElementById("num4").valueAsNumber;
    var res= num1-num2;
    document.getElementById("resSub").textContent = res.toFixed(3)
}

function Dividir(){
    var num1 = document.getElementById("num5").valueAsNumber;
    var num2 = document.getElementById("num6").valueAsNumber;
    var res = num1/num2;
    document.getElementById("resDiv").textContent = res.toFixed(3)
}

function Multiplicar(){
    var num1 = document.getElementById("num7").valueAsNumber;
    var num2 = document.getElementById("num8").valueAsNumber;
    var res = num1*num2;
    document.getElementById("resMult").textContent = res.toFixed(3)
}

function Media(){
    var num1 = document.getElementById("num9").valueAsNumber;
    var num2 = document.getElementById("num10").valueAsNumber;
    var num3 = document.getElementById("num11").valueAsNumber;
    var res = (num1+num2+num3)/3;

    var x = document.getElementById("resMedia")
    var resboa = document.getElementById("cond")
    var resruim = document.getElementById("condN")
    if (res > 7){
        x.style.background = "green"
        resboa.style.display = "block"
        resboa.style.color = "green"
        resruim.style.display = "none"
    }
    else{
        x.style.background = "red"
        resruim.style.display = "block"
        resruim.style.color = "red"
        resboa.style.display = "none"
    }
    document.getElementById("resMedia").textContent = res.toFixed(3)
}

function limpar(){
    window.location.reload();
}