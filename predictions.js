$(document).ready(function(){
    var pictures = ['https://dailybruin.com/images/2017/02/lala11.jpg', 'https://dailybruin.com/images/2017/02/emma.jpg', 'https://dailybruin.com/images/2017/02/denzel.jpg', 'https://dailybruin.com/images/2017/02/viola.jpg', 'https://dailybruin.com/images/2017/02/ali.jpg','https://dailybruin.com/images/2017/02/zoo.jpg','https://dailybruin.com/images/2017/02/damien.jpg', 'https://dailybruin.com/images/2017/02/lala21.jpg']
    var text = ['LA LA LAND', 'EMMA STONE', 'DENZEL WASHINGTON', 'VIOLA DAVIS', 'MAHERSHALA ALI', 'ZOOTOPIA', 'DAMIEN CHAZELLE', 'CITY OF STARS']
    var creds = ['Photo Credit – Dale Robinette', 'Photo Credit – Dale Robinette', 'Photo Credit – Paramount Pictures', 'Photo Credit – Paramount Pictures', 'Photo Credit — David Bornfriend/A24', 'Photo Credit - Walt Disney Pictures', 'Photo Credit – Blair Raughley/Invision for Lionsgate/AP Images', 'Photo Credit – Dale Robinette']
    var graphs = ['https://dailybruin.com/images/2017/02/chart1.png', 'https://dailybruin.com/images/2017/02/chart2.png', 'https://dailybruin.com/images/2017/02/chart3.png', 'https://dailybruin.com/images/2017/02/chart4.png', 'https://dailybruin.com/images/2017/02/chart5.png', 'https://dailybruin.com/images/2017/02/chart6.png', 'https://dailybruin.com/images/2017/02/chart7.png', 'https://dailybruin.com/images/2017/02/chart8.png']
    var daniels = ['“The musical ticks off every traditional Academy requirement. Even though it was at best the year’s third most interesting film, it is a movie about movies and features the heartwarming message that, despite your clear mediocrity, you too can beat the odds in an unsteady industry.”', '“Tied for the most nominated film of all time, ‘La La Land’ has to win at least one of the acting categories and, considering her non-mediocre voice, Stone is the musical’s best shot.”', '“Washington’s turn as an abusive father from Pittsburgh may not have been the best male performance of the year, but he still carried a film where acting, and not much else, was front and center.”', '“There’s a reason ‘Fences’ trailers end with Davis’ tear-ridden monologue: she releases a marriage’s worth of pent up frustration that will win her the Oscar.”', '“Ali, who plays Miami based drug dealer Juan, probably clinched the Oscar in one scene – when his character taught the protagonist, Chiron, how to swim.”', '“‘Zootopia,’ with its message of racial inclusion, is tailor-made for a night where attendees will probably get political again and again.”',  '“Besides the synchronized freeway choreography, he also oversaw dance numbers, original music and Ryan Gosling’s singing – all on top of the more conventional tasks that come with the job.”', '“While ‛The Fools Who Dream’ from ‛La La Land’ will also contend, City of Stars’ represents the sort of Hollywood love letter that Academy voters will no doubt reciprocate.”']
    var textval;
    $("select").change(function(){
        value = $(this).val();
        textval = value;
         $("#slide2").css("background-image", 'url('+pictures[value]+')');
         $("#graph").css("background-image", 'url('+graphs[value]+')');
         $("#imagecreds").fadeOut(400).text(creds[value]).fadeIn(400);
         $("#daniel").fadeOut(400).text(daniels[value]).fadeIn(400);
         $("#winnername").fadeOut(400).text(text[value]).fadeIn(400);
}).change();
})
