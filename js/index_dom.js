import { relojDigital,alarma } from "./reloj.js";

const d = document;

d.addEventListener('DOMContentLoaded', (e) =>{
    relojDigital("#reloj","#activar-reloj","#desactivar-reloj");
    alarma("./assets/alarma.mp3","#activar-alarma","#desactivar-alarma");
})