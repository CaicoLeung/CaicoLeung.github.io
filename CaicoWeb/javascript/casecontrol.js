   var mainTitle1 = $("h1.title1"),
        mainTitle2 = $("h1.title2"),
        Width = document.body.clientWidth;

    document.onreadystatechange = function (){
        console.log(document.readyState);
        if(document.readyState === "complete"){
            setTimeout(function (){
                mainTitle1.animate({
                    left: 0.3 * Width,
                })
                mainTitle2.animate({
                    right: 0.5 * Width,
                })
            },500)
        }
    }
    /* ************************************ */
    /* *************页面预加载区************** */
    /* ************************************ */
    /*
    window.addEventListener("load",function (){
        $("#loading").fadeOut("slow");
    })

    document.onreadystatechange = function (){
        if(document.readyState === "complete"){
            $("#loading").fadeOut("slow");
        }
    }
    */

    /*
    [
     '/font/小米兰亭字体.ttf',
     'logo.png',
     'Double Ring-1s-200px.svg',
     '/image/CN_sina_weibo.svg',
     '/image/Popular_Facebook_.svg',
     '/image/Popular_G+.svg',
     '/image/Popular_GitHub.svg',
     '/image/Popular_Twitter.svg',
     '/image/Popular_mail.svg',
     '/image/back.png',
     '/image/forward.png',
     '/image/head.png',
     '/image/myWechat.jpg',
     '/image/pic1.jpg',
     '/image/pic2.jpg',
     '/image/pic3.jpg',
     '/image/pic4.jpg',
     '/image/pic5.jpg',
     '/image/pic6.jpg',
     '/image/pic7.jpg',
     '/image/对.png',
     '/image/灯泡.png',
     '/image/钻石.png',
     '/image/list1.jpg',
     '/image/list2.jpg',
     '/image/list3.jpg',
     '/image/list4.jpg',
     '/image/list5.jpg',
     '/image/list6.jpg',
     '/image/list7.jpg',
     '/image/list8.jpg',
     '/image/list9.jpg',
     '/image/25_de_abril_bridge_night_tagus_river_portugal-wallpaper-2560x1080.jpg',
     '/image/beautiful_city-wallpaper-1366x768.jpg',
     '/image/download.png',
     '/image/park_8-wallpaper-1920x1080.jpg'
    ],*/
    var $progress = $(".progress-bar"),
        $progressVal = $(".progress-value"),
        len = imgs.length,
        num = 0;

    $.preload(imgs, {
        each: function (count) {
            num = Math.round((count + 1) / len * 100) + '%';
            $progress.css("width", num);
            $progressVal.text(num);
        },
        all: function () {
            $("#loading").fadeOut("slow");
        }
    })