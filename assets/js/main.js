$(document).scroll(function(){
var theTop = $('html').scrollTop();
if (theTop == 0) {
    var banner = $("#banner").prop("scrollHeight");
    banner =banner/2;
    var theTop = $('body').scrollTop();
    if(theTop > banner){
        $("#brand-name").css({'visibility':'visible'});
      
    }else{
        $("#brand-name").css({'visibility':'hidden'});
       
    }

    banner = banner *2;
    if(theTop > banner){
        $("#navScroll").addClass("bg-dark")
    }else{
        $("#navScroll").removeClass("bg-dark");
    }
}
});

$(document).scroll(function(){
    var theTop = $('body').scrollTop();
    var banner = $("#banner").prop("scrollHeight");
    var about = $("#about-us").prop("scrollHeight");
    var service = $("#service").prop("scrollHeight");
    var product = $("#product").prop("scrollHeight");
    banner =banner-100;
    product = product + banner;
    service = service + product;
    about = about + service;
    about = about - 100;
    if(theTop < banner){
        $("#nav-first").addClass("active");
    }else{
        $("#nav-first").removeClass("active");
    }
    if((theTop > banner) && (theTop < product)){
        $("#nav-second").addClass("active");
    }else{
        $("#nav-second").removeClass("active");
    }
    if((theTop > product) && (theTop < service)) {
        $("#nav-third").addClass("active");
    }else{
        $("#nav-third").removeClass("active");
    }

    if((theTop > service) && (theTop < about)) {
        $("#nav-fourth").addClass("active");
    }else{
        $("#nav-fourth").removeClass("active");
    }
    if(theTop > about) {
        $("#nav-fifth").addClass("active");
    }else{
        $("#nav-fifth").removeClass("active");
    }


});


$('.card').hover(
        function(e){
        $( this ).find(".profile-img").css({"opacity":0.6, 'background-color': 'black'});
    },
    function(e){
        $( this ).find(".profile-img").css({"opacity":1});
    }
);
