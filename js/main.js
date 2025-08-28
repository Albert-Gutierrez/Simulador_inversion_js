function simulador(){
    
    const contPre = document.getElementById('pre-simulation');
    const contPost = document.getElementById('post-simulation');

//se captura la variable y .el atributo de la etiqueta
    contPost.classList.remove('disabled');
    contPre.classList.add('disabled');

//variables que capturan los valores de los campos
    let cNombre = document.getElementById('nombre').value;
    //let cTelefono = document.getElementBy('telefono').value;
    let cEmail = document.getElementById('email').value;
    let cMonto = document.getElementById('monto').value;
    let cTiempo = document.getElementById('tiempo').value;


//constantes que capturan las etiquetas span en las que se muenstran los valores, por eso la 's' de show sTiempo, sInteres...
    const sTiempo = document.getElementById('sTiempo');
    const sInteres = document.getElementById('sInteres');
    const sTotal = document.getElementById('sTotal');
    const sGanancia = document.getElementById('sGanancia');
    const sNombre = document.getElementById('sNombre');
    const sCorreo = document.getElementById('sCorreo');

    //variables para realizar los calculos
    let ganancia = 0;
    let total = 0;

    switch (cTiempo) {
        
        //en este case realizaremos el calculo si el tiempo corresponde a un año
        case '1':
            ganancia = (cMonto*0.008)*12;
            total = parseInt(cMonto) + parseInt(ganancia);   
            sInteres.textContent = '0,8%';
            sTiempo.textContent = '12 meses';   
        break;
        
        //en este case realizaremos el calculo si el tiempo corresponde a dos años
        case '2':
            ganancia = (cMonto*0.013)*24;
            total = parseInt(cMonto) + parseInt(ganancia);   
            sInteres.textContent = '1,3%';
            sTiempo.textContent = '24 meses';  
        break;
        
        //en este case realizaremos el calculo si el tiempo corresponde a tres años
        case '3':
            ganancia = (cMonto*0.017)*36;
            total = parseInt(cMonto) + parseInt(ganancia);   
            sInteres.textContent = '1,7%';
            sTiempo.textContent = '36 meses';  
        break;
    }

    sGanancia.textContent = ganancia;
    sTotal.textContent = total;
    sNombre.textContent = cNombre;
    sCorreo.textContent = cEmail;
    
}

document.addEventListener('DOMContentLoaded',function() {
document.getElementById('calcular').addEventListener('click',simulador)

});