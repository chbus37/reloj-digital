const d = document;

export  function relojDigital(reloj,btnIniciar,btnParar){
    d.addEventListener("click", e => {
        if(e.target.matches(btnIniciar)){
            setInterval(() => {
                let horaReloj = new Date().toLocaleTimeString();
                d.querySelector(reloj).innerHTML = `<h3>${horaReloj}</h3>`;
            }, 1000);

            e.target.disabled = true;
        }

        if(e.target.matches(btnParar)){
            
        }
    })
}

export function alarma(){

}