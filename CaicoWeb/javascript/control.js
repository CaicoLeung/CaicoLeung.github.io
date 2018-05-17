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
       var imgs = 
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
    ],
       /*
       [
        'https://caicoleung.github.io/CaicoWeb/logo.png',
        'https://caicoleung.github.io/CaicoWeb/Double Ring-1s-200px.svg',
        'https://caicoleung.github.io/CaicoWeb/image/CN_sina_weibo.svg',
        'https://caicoleung.github.io/CaicoWeb/image/Popular_Facebook_.svg',
        'https://caicoleung.github.io/CaicoWeb/image/Popular_G+.svg',
        'https://caicoleung.github.io/CaicoWeb/image/Popular_GitHub.svg',
        'https://caicoleung.github.io/CaicoWeb/image/Popular_Twitter.svg',
        'https://caicoleung.github.io/CaicoWeb/image/Popular_mail.svg',
        'https://caicoleung.github.io/CaicoWeb/image/back.png',
        'https://caicoleung.github.io/CaicoWeb/image/forward.png',
        'https://caicoleung.github.io/CaicoWeb/image/head.png',
        'https://caicoleung.github.io/CaicoWeb/image/myWechat.jpg',
        'https://caicoleung.github.io/CaicoWeb/image/pic1.jpg',
        'https://caicoleung.github.io/CaicoWeb/image/pic2.jpg',
        'https://caicoleung.github.io/CaicoWeb/image/pic3.jpg',
        'https://caicoleung.github.io/CaicoWeb/image/pic4.jpg',
        'https://caicoleung.github.io/CaicoWeb/image/pic5.jpg',
        'https://caicoleung.github.io/CaicoWeb/image/pic6.jpg',
        'https://caicoleung.github.io/CaicoWeb/image/pic7.jpg',
        'https://caicoleung.github.io/CaicoWeb/image/对.png',
        'https://caicoleung.github.io/CaicoWeb/image/灯泡.png',
        'https://caicoleung.github.io/CaicoWeb/image/钻石.png',
        'https://caicoleung.github.io/CaicoWeb/image/list1.jpg',
        'https://caicoleung.github.io/CaicoWeb/image/list2.jpg',
        'https://caicoleung.github.io/CaicoWeb/image/list3.jpg',
        'https://caicoleung.github.io/CaicoWeb/image/list4.jpg',
        'https://caicoleung.github.io/CaicoWeb/image/list5.jpg',
        'https://caicoleung.github.io/CaicoWeb/image/list6.jpg',
        'https://caicoleung.github.io/CaicoWeb/image/list7.jpg',
        'https://caicoleung.github.io/CaicoWeb/image/list8.jpg',
        'https://caicoleung.github.io/CaicoWeb/image/list9.jpg',
        'https://caicoleung.github.io/CaicoWeb/image/25_de_abril_bridge_night_tagus_river_portugal-wallpaper-2560x1080.jpg',
        'https://caicoleung.github.io/CaicoWeb/font/小米兰亭字体.ttf',
        'https://caicoleung.github.io/CaicoWeb/image/beautiful_city-wallpaper-1366x768.jpg',
        'https://caicoleung.github.io/CaicoWeb/image/download.png',
        'https://caicoleung.github.io/CaicoWeb/image/park_8-wallpaper-1920x1080.jpg',
    ],
    */
        $progress = $(".progress-bar"),
        $progressVal = $(".progress-value"),
        len = imgs.length,
        num = 0;

    $.preload(imgs, {
        each: function (count) {
            num = Math.round((count + 1) / len * 100) + '%';
            $progress.css("width",num);
            $progressVal.text(num);
        },
        all: function () {
            $("#loading").fadeOut("slow");
        }
    })

    /* ************************************ */
    /* *************时间获取区************** */
    /* ************************************ */
    $(function (){
        Carousel.init($(".J_focus"));
        
        var lists = $("ul.contentItems").find("li.list"),
            Mon = ["Jan","Feb","Mar","Apr","May","June","Aug","Sept","Oct","Nov","Dec"],
            date = new Date(),
            day = date.getUTCDate(),
            month = date.getMonth();

        $("div.dateDay").text(day);
        $("strong.dateMon").text(Mon[month]);

        lists.each(function (){
            $(this).on("mouseenter",function (e){
                e.stopPropagation();
                $(this).children(".article").animate({
                    top: -30
                },300)
            })
            $(this).on("mouseleave",function (e){
                e.stopPropagation();
                $(this).children(".article").animate({
                    top: 90
                },300)
            })
        })
    })
    $(function(){
        var $contentShowUl = $("ul#contentShowUl"),
            $btnLeft = $(".btn-left"),
            $btnRight = $(".btn-right"),
            yesorno = true;
        
        $btnRight.on("click",function (){
            // console.log($contentShowUl.css("left"));
            if($contentShowUl.css("left") === "30px"){
                $contentShowUl.animate({
                    left: -960
                },500)
            }else if(yesorno == true){
                yesorno = false;
                $contentShowUl.animate({
                    left: -1020
                },200).animate({
                    left: -960
                },100,function(){
                    yesorno = true;
                })
            }
        })
        $btnLeft.on("click",function (){
            // console.log($contentShowUl.css("left"));
            if($contentShowUl.css("left") === "-960px"){
                $contentShowUl.animate({
                    left: 30
                })
            }else if(yesorno == true){
                yesorno = false;
                $contentShowUl.animate({
                    left: 90
                },200).animate({
                    left: 30
                },100,function(){
                    yesorno = true;
                })
            }
        })
    })