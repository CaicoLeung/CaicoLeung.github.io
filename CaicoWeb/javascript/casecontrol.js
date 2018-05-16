$(function(){
    var mainTitle1 = $("h1.title1"),
        mainTitle2 = $("h1.title2"),
        Width = document.body.clientWidth;
    
    mainTitle1.animate({
        left: 0.3 * Width,
    })
    mainTitle2.animate({
        right: 0.5 * Width,
    })
})