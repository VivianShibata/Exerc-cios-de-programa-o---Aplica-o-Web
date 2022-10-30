function lancamento_vertical(g) {
    var v1 = parseInt(document.getElementById('v1').value);
    var g = 10;
    document.getElementById('saida').innerHTML = v1/g;
    document.getElementById('saida1').innerHTML = (Math.pow(v1,2))/(2*g);
}

function ponto_max_min (){
    var a = parseFloat(document.getElementById('a').value);
    var b = parseFloat(document.getElementById('b').value);
    var c = parseFloat(document.getElementById('c').value);

    document.getElementById('PMax').innerHTML = (-b)/(2*a);
    document.getElementById('PMin').innerHTML = ((Math.pow(b,2))+((-4)*a*c))/(4*a);

}

function temperatura (){

    var t = parseFloat(document.getElementById('t').value);
    if (document.getElementById("C").selected == true){
    document.getElementById('temp').innerHTML = (1.8*t) + 32;
    }
    if (document.getElementById("F").selected == true){
    document.getElementById('temp').innerHTML = (t-32)*5/9;
    }
}

function Energy () {
    var e = parseFloat(document.getElementById('e').value);
    var tempo = parseFloat(document.getElementById('tempo').value);

    if(e >=100){
        document.getElementById('consumo').innerHTML = (e + (e*0.25))*tempo
    }
    else if(e >=200){
        document.getElementById('consumo').innerHTML = (e + (e*0.50))*tempo
    }
    else {
        document.getElementById('consumo').innerHTML = e*tempo;
    }
}