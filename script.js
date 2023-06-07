const agujaHora = document.querySelector('.aguja-hora');
const agujaMinuto = document.querySelector('.aguja-minuto');
const agujaSegundo = document.querySelector('.aguja-segundo');
function establecerHora(){
const horaAct = new Date()
const hora = horaAct.getHours();
const minutos = horaAct.getMinutes();
const segundos = horaAct.getSeconds();

const horaGrados = ((hora / 60) * 360 - 30);
const minutosGrados = ((minutos / 60) * 360 + 90);
const segundosGrados = ((segundos / 60) * 360 + 90);

animacionEnPunto(horaGrados, 90, agujaHora);
animacionEnPunto(minutosGrados, 90, agujaMinuto);
animacionEnPunto(segundosGrados, 90, agujaSegundo);


agujaHora.style.transform = `rotate(${horaGrados}deg)`;
agujaMinuto.style.transform = `rotate(${minutosGrados}deg)`;
agujaSegundo.style.transform = `rotate(${segundosGrados}deg)`;
}
setInterval(establecerHora, 1000);

function animacionEnPunto(grados, numGrados, aguja){
    if(grados === numGrados){
        aguja.style.transition = '0s';
    }else{
        aguja.style.transition = 'all 0.5s'
    }    
}