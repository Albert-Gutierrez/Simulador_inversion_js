function simulador(){
    
    const contPre = document.getElementById('pre-simulation');
    const contPost = document.getElementById('post-simulation');

//se captura la variable y .el atributo de la etiqueta
    contPost.classList.remove('disabled');
    contPre.classList.add('disabled');

    let cNombre = document.getElementById('nombre').value;
    let cTelefono = document.getElementBy('telefono').value;
    let cEmail = document.getElementById('email').value;
    

}

document.addEventListener('DOMContentLoaded',function() {
document.getElementById('calcular').addEventListener('click',simulador)

});