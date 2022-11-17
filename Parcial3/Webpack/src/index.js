import{cuadrado} from './modulo';
import Swal from 'sweetalert2';
var randomEmoji = require('random-unicode-emoji');
console.log("Hello world Webpack");

cuadrado(2);

console.log(cuadrado(2));

document.getElementById("sw").addEventListener("click",()=>{
    Swal.fire(
        'Good job',
        'You clicked the buttom',
        'Success'
    )
});

document.getElementById("BtnEmoji").addEventListener("click",()=>{
    //randomEmoji.random({count: 1})
    const x = `Name: emoji; Emoji: ${randomEmoji.random({count: 1})};`
    etiqueta.innerHTML = x;
    console.log(x);
});