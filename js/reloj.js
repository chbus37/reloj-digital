const d = document;

export  function relojDigital(reloj,btnIniciar,btnParar){
    let clockTempo
    d.addEventListener("click", e => {
        if(e.target.matches(btnIniciar)){
            clockTempo= setInterval(() => {
                let horaReloj = new Date().toLocaleTimeString();
                d.querySelector(reloj).innerHTML = `<h3>${horaReloj}</h3>`;
            }, 1000);

            e.target.disabled = true;
        }

        if(e.target.matches(btnParar)){
            clearInterval(clockTempo);
            d.querySelector(reloj).innerHTML = null;
            d.querySelector(btnIniciar).disabled = false;
        }
    })
}

export function alarma(){

}