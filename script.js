let valor = document.getElementById("valor");
        
let restar = document.getElementById("restar");

let reiniciar = document.getElementById("reiniciar");

let sumar = document.getElementById("sumar");

let contador = 0;

valor.textContent = contador; 

restar.addEventListener("click", () => {
    contador--;
    valor.innerHTML = contador;
    cambiarColor();
});

reiniciar.addEventListener("click", () => {
    contador = 0;
    valor.innerHTML = contador;
    cambiarColor();
})

sumar.addEventListener("click", () => {
    contador++;
    valor.innerHTML = contador;
    cambiarColor();
});

const cambiarColor = () => {
    if(contador<0) {
        valor.style.color = "red";
    }
    else if(contador === 0) {
        valor.style.color = "yellow";
    }
    else {
        valor.style.color = "green"
    }
}