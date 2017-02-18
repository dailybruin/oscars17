$(document).ready(function(){
    var pictures = ['predictionsimages/lalaland.jpg', 'predictionsimages/emmastone.png']
    var text = ['LA LA LAND', 'EMMA STONE']
    // var secondarytext=
    var textval;
    $("select").change(function(){
        value = $(this).val();
        textval = value;
         $("#slide2").css("background-image", 'url('+pictures[value]+')');
         $("#winnername").fadeOut(400).text(text[value]).fadeIn(400);
}).change();
})
