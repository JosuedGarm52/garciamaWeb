$(document).ready(function() {
    $('#sidebar-btn').on('click', function() {
        $('#sidebar').toggleClass('visible');
    });

    //$('#botonjax').click(presionButon)

    /*function presionButon(){
        var puram = $("#num").val();
    
        $.get("cargaCuadrado.php",(num: puram), llegadaDatos);
        //return false
    }

    function llegadaDatos(datos){
        $('resultado').html('');
    }*/
});

/*function reqListener () {
    console.log(this.responseText);
}*/
  
  var oReq = new XMLHttpRequest();
  //oReq.addEventListener("load", reqListener);
  oReq.open("GET", "/Garciamaweb/Parcial2/XMLHttp/load.text");
  oReq.send();

function cambiar(){
    oREQ = new XMLHttpRequest();
            oREQ.open("GET",'load.text', true);
            oREQ.onreadystatechange = function(){
                
                document.getElementById("caj").innerHTML = this.responseText;
                }
            oREQ.send();
    
}
function clearBox(elementID) {
    var div = document.getElementById(elementID);
    while(div.firstChild) {
        div.removeChild(div.firstChild);
    }

}
function clearcontent(elementID) {
    document.getElementById(elementID).innerHTML = "caja";
}
