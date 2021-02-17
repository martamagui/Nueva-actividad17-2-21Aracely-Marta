/**
 * @author Marta Molina y ARacely Berrocal
 */
let aux = 0;
let igualitos = true;
let arrayColor = [
    "blue",
    "pink",
    "yellow",
    "black",
    "pastelpink",
    "green",
    "orange",
    "aqua",
    "brown",
    "deeppink"
];
//reloj
var span = document.getElementById('span');

function time() {
    let d = new Date();
    let s = d.getSeconds();
    let m = d.getMinutes();
    let h = d.getHours();
    let textContent =
        ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2);
    document.getElementById('txt').innerHTML = textContent;
}

//Comprobar si son iguales los colores
setInterval(time, 1000);
function iguales() {
    for (i = 1; i < 11; ++i) {
        if (document.getElementById("cuadrado1").style.backgroundColor != document.getElementById(`cuadrado${i}`).style.backgroundColor) {
            igualitos = false;
        }
    }
    if (igualitos == true) {
        alert("¡Son iguales todos!");
    }
}

//Cambios de color
function cambcuadrado1() {
    aux = (Math.floor(Math.random() * 10));
    //para que no salgan repes y se quede "atascado" , roleará de nuevo el numero hasat que sea distinto del actual
    while (arrayColor[aux] == document.getElementById("cuadrado1").style.backgroundColor) {
        aux = (Math.floor(Math.random() * 10));
    }
    document.getElementById("cuadrado1").style.backgroundColor = arrayColor[aux];
    iguales();
}
function cambcuadrado2() {
    aux = (Math.floor(Math.random() * 10));
    while (arrayColor[aux] == document.getElementById("cuadrado2").style.backgroundColor) {
        aux = (Math.floor(Math.random() * 10));
    }
    document.getElementById("cuadrado2").style.backgroundColor = arrayColor[aux];
    iguales();
}
function cambcuadrado3() {
    aux = (Math.floor(Math.random() * 10));
    while (arrayColor[aux] == document.getElementById("cuadrado3").style.backgroundColor) {
        aux = (Math.floor(Math.random() * 10));
    }
    document.getElementById("cuadrado3").style.backgroundColor = arrayColor[aux];
    iguales();
}
function cambcuadrado4() {
    aux = (Math.floor(Math.random() * 10));
    while (arrayColor[aux] == document.getElementById("cuadrado4").style.backgroundColor) {
        aux = (Math.floor(Math.random() * 10));
    }
    document.getElementById("cuadrado4").style.backgroundColor = arrayColor[aux];
    iguales();
}
function cambcuadrado5() {
    aux = (Math.floor(Math.random() * 10));
    while (arrayColor[aux] == document.getElementById("cuadrado5").style.backgroundColor) {
        aux = (Math.floor(Math.random() * 10));
    }
    document.getElementById("cuadrado5").style.backgroundColor = arrayColor[aux];
    iguales();
}
function cambcuadrado6() {
    aux = (Math.floor(Math.random() * 10));
    while (arrayColor[aux] == document.getElementById("cuadrado6").style.backgroundColor) {
        aux = (Math.floor(Math.random() * 10));
    }
    document.getElementById("cuadrado6").style.backgroundColor = arrayColor[aux];
    iguales();
}
function cambcuadrado7() {
    aux = (Math.floor(Math.random() * 10));
    while (arrayColor[aux] == document.getElementById("cuadrado7").style.backgroundColor) {
        aux = (Math.floor(Math.random() * 10));
    }
    document.getElementById("cuadrado7").style.backgroundColor = arrayColor[aux];
    iguales();
}
function cambcuadrado8() {
    aux = (Math.floor(Math.random() * 10));
    while (arrayColor[aux] == document.getElementById("cuadrado8").style.backgroundColor) {
        aux = (Math.floor(Math.random() * 10));
    }
    document.getElementById("cuadrado8").style.backgroundColor = arrayColor[aux];
    iguales();
}

function cambcuadrado9() {
    aux = (Math.floor(Math.random() * 10));
    while (arrayColor[aux] == document.getElementById("cuadrado9").style.backgroundColor) {
        aux = (Math.floor(Math.random() * 10));
    }
    document.getElementById("cuadrado9").style.backgroundColor = arrayColor[aux];
    iguales();
}
function cambcuadrado10() {
    aux = (Math.floor(Math.random() * 10));
    while (arrayColor[aux] == document.getElementById("cuadrado10").style.backgroundColor) {
        aux = (Math.floor(Math.random() * 10));
    }
    document.getElementById("cuadrado10").style.backgroundColor = arrayColor[aux];
    iguales();
}
//falta arreglar
function pulsar(){
    var x= document.getElementById('lista')
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }

}
