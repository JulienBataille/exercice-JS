let i = 1 ;
let contenu = "" ;

$(function(){
    fizzBuzz(i);
    $(document).on("scroll", scrolled);
});

function scrolled () {
    if($(document).scrollTop() + $(window).height() >= $(document).height()){
        i += 1000;
        fizzBuzz(i);
    }
};


function fizzBuzz (j){
    for(let i = j; i <= j + 999 ; i++) {
        contenu += (i%3 ==0) ? " fizz " :  "";
        contenu += (i%5 ==0) ? " buzz " : "";
        contenu += (contenu == "") ? i : "";

    classe = contenu + " col "
    $("#contenu").append("<div class='"+classe+"'>"+contenu+"</div>");
    contenu = "";
    }
}
