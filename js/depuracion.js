setTimeout ( () => {
    var titulo = document.getElementById("pregunta");
    titulo.innerText ="Sé solo feo";
    titulo. style. backgroundColor = "blue"
    titulo.style. color = "white";
 },6000); //El texto cambiará a los 6 segundos
var subVentada=window.open("https://google.com","nueva","height=800,width=600");
setTimeout(()=>{
    subVentada.close();
},6000);
if (window.confirm("Do you really want to leave?")) {
    window.open("exit.html", "Thanks for Visiting!");
  }