import { relojDigital,alarma } from "./reloj.js";

const d = document;

d.addEventListener('DOMContentLoaded', (e) =>{
    relojDigital("#reloj","#activar-reloj","#desactivar-reloj");
})