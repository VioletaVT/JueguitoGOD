var nombre1= localStorage.getItem("nombre1")
var nombre2= localStorage.getItem("nombre2")
var puntos1= 0
var puntos2= 0
var guardapalabra,guardaminuscula,guarda1letra,guarda2letras,longitud,dividiredondiar,guarda3letra
var remplazo1
var remplazo2
var remplazo3
var h3god
var h5godp
var input
var button
var textocaja
var textocajaminuscula
var turnopregunta
var turnorespuesta

document.getElementById("spam").innerHTML= nombre1
document.getElementById("spam2").innerHTML= nombre2
document.getElementById("numero").innerHTML= puntos1
document.getElementById("numero2").innerHTML= puntos2
document.getElementById("pregunta").innerHTML= nombre1
document.getElementById("responder").innerHTML= nombre2

function guardar() {
 guardapalabra= document.getElementById("caja").value
 guardaminuscula= guardapalabra.toLowerCase()
 guarda1letra= guardaminuscula.charAt(1)
 longitud= guardaminuscula.length
 dividiredondiar= Math.floor(longitud/2)
 guarda2letras= guardaminuscula.charAt(dividiredondiar)
 guarda3letra= guardaminuscula.charAt(longitud-1)
remplazo1= guardaminuscula.replace(guarda1letra,"_")
remplazo2= remplazo1.replace(guarda2letras,"_")
remplazo3= remplazo2.replace(guarda3letra,"_")
h3god= "<h3>palabra: "+ remplazo3 + "</h3>"
input= "<input id='textocaja' type='text'>"
h5godp= "<p>Respuesta: </p>"
button= "<button id='botonrojo' onclick='guardaquestion()'> guardar respuesta </button>"
document.getElementById("contenedor").innerHTML= h3god+h5godp+input+button
document.getElementById("caja").value= ""
document.getElementById("contenedor2").style.display= "none"
document.getElementById("contenedor").style.display= "block"
}
turnopregunta= nombre1
turnorespuesta= nombre2
function guardaquestion(){
    textocaja= document.getElementById("textocaja").value
textocajaminuscula= textocaja.toLowerCase()
    if (turnorespuesta==nombre2){
        turnorespuesta=nombre1
        document.getElementById("pregunta").innerHTML= nombre2
        document.getElementById("responder").innerHTML= nombre1
        if (textocajaminuscula==guardaminuscula){
        puntos2+= 1
        document.getElementById("numero2").innerHTML= puntos2
    }
    }
    else if (turnorespuesta==nombre1){
        turnorespuesta=nombre2
        document.getElementById("pregunta").innerHTML= nombre1
        document.getElementById("responder").innerHTML= nombre2
        if (textocajaminuscula==guardaminuscula){
            puntos1+= 1
            document.getElementById("numero").innerHTML= puntos1
        }
    }
    document.getElementById("contenedor2").style.display= "block"
    document.getElementById("contenedor").style.display= "none"
    document.getElementById("textocaja").value= ""
}