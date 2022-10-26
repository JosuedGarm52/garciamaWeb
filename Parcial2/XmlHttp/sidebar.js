$(document).ready(function() {
    $('#sidebar-btn').on('click', function() {
        $('#sidebar').toggleClass('visible');
    });

    $('#botonjax').click(presionButon)

    function presionButon(){
        var puram = $("#num").val();
    
        $.get("cargaCuadrado.php",(num: puram), llegadaDatos)
        //return false
    }
});

