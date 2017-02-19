$(document).ready(function(){
    var pictures = ['predictionsimages/lalaland.jpg', 'predictionsimages/emmastone.png', 'predictionsimages/denzel.png', 'predictionsimages/viola.jpg', 'predictionsimages/ali.jpg','predictionsimages/zoo.jpg','predictionsimages/damien.jpg', 'predictionsimages/lala.jpg']
    var text = ['LA LA LAND', 'EMMA STONE', 'DENZEL WASHINGTON', 'VIOLA DAVIS', 'MAHERSHALA ALI', 'ZOOTOPIA', 'DAMIEN CHAZELLE', 'CITY OF STARS']
    // var secondarytext=
    var textval;
    $("select").change(function(){
        value = $(this).val();
        textval = value;
         $("#slide2").css("background-image", 'url('+pictures[value]+')');
         $("#winnername").fadeOut(400).text(text[value]).fadeIn(400);
}).change();
})
