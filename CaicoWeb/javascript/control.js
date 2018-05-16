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
       var imgs = [
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
    ],
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
                $(this).children("article").animate({
                    top: 0
                },300)
            })
            $(this).on("mouseleave",function (e){
                e.stopPropagation();
                $(this).children("article").animate({
                    top: 91
                },300)
            })
        })
    })
    $(function(){
        var $contentShowUl = $("ul#contentShowUl"),
            $btnLeft = $(".btn-left"),
            $btnRight = $(".btn-right");
        
        $btnRight.on("click",function (){
            // console.log($contentShowUl.css("left"));
            if($contentShowUl.css("left") === "30px"){
                $contentShowUl.animate({
                    left: -960
                })
            }
        })
        $btnLeft.on("click",function (){
            console.log($contentShowUl.css("left"));
            if($contentShowUl.css("left") === "-960px"){
                $contentShowUl.animate({
                    left: 30
                })
            }
        })
    })