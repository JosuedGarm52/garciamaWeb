/*window.onload = function(){
    /*
    document.getElementById("sb").addEventListener("click",function(){
        console.log(document.getElementsByClassName("sidebar")[0]);
        alert("x");
        document.getElementsByClassName("sidebar")[0].classList.toggle("esconder");
    });

    document.getElementById("sb").addEventListener("click",() => {
        console.log(document.getElementsByClassName("sidebar")[0]);
        alert("x");
        document.getElementsByClassName("sidebar")[0].classList.toggle("esconder");
    });
    
    document.getElementById(sidebarbtn).addEventListener("click",function(){
        document.getElementById(sidebar-btn)[0].classList.toggle("active");
    });
};
*/

$(document).ready(function() {
    $('#sidebar-btn').on('click', function() {
        $('#sidebar').toggleClass('visible');
    });
});
