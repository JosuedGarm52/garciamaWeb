import{cuadrado} from './modulo';
import Swal from 'sweetalert2';
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