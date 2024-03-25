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

export function alarma(sonido,btnIniciar,btnParar){
    let alarmaTempo;
    const $alarma = d.createElement("audio");
    $alarma.src = sonido;

    d.addEventListener("click", (e) => {
        if(e.target.matches(btnIniciar)){
            alarmaTempo = setTimeout(() => {
                $alarma.play();
            }, 2000);

            e.target.disabled = true;
        }

        if(e.target.matches(btnParar)){
            clearTimeout(alarmaTempo);
            //! Para pausar el sonido
            $alarma.pause();
            $alarma.currentTime = 0;
            d.querySelector(btnIniciar).disabled = false;
            
        }
    })
}