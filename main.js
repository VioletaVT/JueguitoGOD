var nombre1= ""
var nombre2= ""

function next(){
    nombre1= document.getElementById("cajatexto").value
    nombre2= document.getElementById("cajatexto2").value
    localStorage.setItem("nombre1",nombre1)
    localStorage.setItem("nombre2",nombre2)
    window.location="jueguitogod.html"
}