var valorCont = 0;

function incrementador() {
    actualizarCont(++valorCont);
}

function actualizarCont(val) {
    document.getElementById("contador").innerHTML = val;
}