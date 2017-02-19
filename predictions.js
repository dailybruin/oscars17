$(document).ready(function(){
    var pictures = ['predictionsimages/lala1.jpg', 'predictionsimages/emma.jpg', 'predictionsimages/denzel.jpg', 'predictionsimages/viola.jpg', 'predictionsimages/ali.jpg','predictionsimages/zoo.jpg','predictionsimages/damien.jpg', 'predictionsimages/lala2.jpg']
    var text = ['LA LA LAND', 'EMMA STONE', 'DENZEL WASHINGTON', 'VIOLA DAVIS', 'MAHERSHALA ALI', 'ZOOTOPIA', 'DAMIEN CHAZELLE', 'CITY OF STARS']
    var creds = ['Photo Credit – Blair Raughley/Invision for Lionsgate/AP Images', 'Photo Credit – Dale Robinette', 'Photo Credit – Dale Robinette', 'Photo Credit – Dale Robinette', 'Photo Credit — David Bornfriend/A24', 'Photo Credit – Paramount Pictures', 'Photo Credit – Paramount Pictures', 'Photo Credit - Walt Disney Pictures']
    var graphs = ['images/chart.png', 'images/tri.png']
    var textval;
    $("select").change(function(){
        value = $(this).val();
        textval = value;
         $("#slide2").css("background-image", 'url('+pictures[value]+')');
         $("#graph").css("background-image", 'url('+graphs[value]+')');
         $("#imagecreds").fadeOut(400).text(creds[value]).fadeIn(400);
         $("#winnername").fadeOut(400).text(text[value]).fadeIn(400);
}).change();
})
