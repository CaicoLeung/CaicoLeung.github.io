//旋转木马效果

;(function ($){
    var Carousel = function (poster){
        var self = this;
        //保存旋转木马对象
        this.poster = poster;
        this.posterMain = poster.find("ul.post-list");
        this.btn = poster.find("div.btn");
        this.preBtn = poster.find("div.pre-btn");
        this.nextBtn = poster.find("div.next-btn");
        this.posterItems = poster.find("li.post-item");
        this.posterFirstItem =  this.posterItems.first();
        this.posterLastItem = this.posterItems.last();
        this.rotateFlag = true;
        //默认配置参数
        this.setting ={
            "width": 1000,//幻灯片width Number
            "height": 533,//幻灯片height Number
            "posterWidth": 800,//顶层幻灯片width Number
            "posterHeight": 533,//顶层幻灯片height Number
            "scale": 0.9,//缩放比例 <1.0 Number
            "speed": 500,//动画速度 Number
            "delay": 2000,//切换间隔时间 Number
            "autoplay": true,//自动播放 true|false Boolean
            "verticalAlign": "middle"//垂直对齐方式 middle|top|bottom String
        };
        $.extend(this.setting,this.getSetting());//扩展自定义配置参数
        this.setPosterValue();
        this.setPosterPosition();
        this.preBtn.click(function (){
            if(self.rotateFlag){
                self.rotateFlag = false;
                self.carouselRotate("right");
            }
        });
        this.nextBtn.click(function (){
            if(self.rotateFlag){
                self.rotateFlag = false;
                self.carouselRotate("left");
            }
        });
        if(this.setting.autoplay){
            this.autoPlay();
            this.poster.hover(function (){
                clearInterval(self.timer);
            },function (){
                self.autoPlay();
            })
        }
    }

    /*------ 原型链 ------*/
    Carousel.prototype = {
        //绑定配置参数
        setPosterValue: function (){
            this.poster.css({
                width: this.setting.width,
                height: this.setting.height
            });
            this.posterMain.css({
                width: this.setting.powidth,
                height: this.setting.height
            })
            var w = (this.setting.width - this.setting.posterWidth) / 2;
            this.posterFirstItem.css({
                width: this.setting.posterWidth,
                height: this.setting.posterHeight,
                left: w,
                top: 0,
                zIndex: Math.floor(this.posterItems.length / 2)
            })
            this.btn.css({
                width: w,
                height: this.setting.height,
                zIndex: Math.ceil(this.posterItems.length / 2)
            });
        },
        //根据配置参数设置整体css样式
        setPosterPosition: function (){
            var _self = this,
                sideItems = this.posterItems.slice(1),//获取两侧li幻灯片
                sideItemsLength = sideItems.length,//两侧幻灯片总数量
                rightItems = sideItems.slice(0,sideItemsLength / 2),//右侧li幻灯片
                leftItems = sideItems.slice(sideItemsLength / 2),
                level = rLevel = lLevel = Math.floor(this.posterItems.length/2),  
                rWidth = lWidth = this.setting.posterWidth,
                rHeight = lHeight = this.setting.posterHeight,
                gap = ((this.setting.width - this.setting.posterWidth) / 2) / level;

                rightItems.each(function (index){
                    rLevel--;
                    rWidth = rWidth * _self.setting.scale;
                    rHeight = rHeight * _self.setting.scale;
                    $(this).css({
                        width: rWidth,
                        height: rHeight,
                        right: ((_self.setting.width - _self.setting.posterWidth) / 2) - gap*(++index),
                        top: _self.setVertucalAlign(rHeight),
                        zIndex: rLevel,
                        opacity: 1 / (++index)
                    })
                })

                leftItems.each(function (index){
                    lLevel--;
                    lWidth = lWidth * _self.setting.scale;
                    lHeight = lHeight * _self.setting.scale;
                    $(this).css({
                        width: lWidth,
                        height: lHeight,
                        left: ((_self.setting.width - _self.setting.posterWidth) / 2) - gap*(++index),
                        top: _self.setVertucalAlign(lHeight),
                        zIndex: lLevel,
                        opacity: 1 / (++index)
                    })
                })
        },

        //设置垂直排列对齐方式
        setVertucalAlign: function (height){
            var verticalType = this.setting.verticalAlign,
                top = 0;
            if(verticalType === "middle"){
                top = (this.setting.posterHeight - height)/2;
            }else if(verticalType === "top"){
                top = 0;
            }else if(verticalType === "bottom"){
                top = this.setting.posterHeight - height;
            }else{
                top = (this.setting.posterHeight - height)/2;
            }
            return top;
        },

        //旋转动画方向
        carouselRotate: function (dir){
            var _this_ = this;
            if(dir === "left"){
                this.posterItems.each(function (){
                    var self = $(this),
                        prev = self.prev().get(0)?self.prev():_this_.posterLastItem,
                        width = prev.width(),
                        height = prev.height(),
                        left = prev.css("left"),
                        top = prev.css("top"),
                        zIndex = prev.css("zIndex"),
                        opacity = prev.css("opacity");

                    self.animate({
                        width: width,
                        height: height,
                        left: left,
                        top: top,
                        opacity: opacity,
                        zIndex: zIndex
                    },_this_.setting.speed,function(){
                        _this_.rotateFlag = true;
                    })
                })
            }else if(dir === "right"){
                this.posterItems.each(function (){
                    var self = $(this),
                        next = self.next().get(0)?self.next():_this_.posterFirstItem,
                        width = next.width(),
                        height = next.height(),
                        left = next.css("left"),
                        top = next.css("top"),
                        zIndex = next.css("zIndex"),
                        opacity = next.css("opacity");

                    self.animate({
                        width: width,
                        height: height,
                        left: left,
                        top: top,
                        opacity: opacity,
                        zIndex: zIndex,
                    },_this_.setting.speed,function (){
                        _this_.rotateFlag = true;
                    })
                })
            }else{

            }
        },

        //自动播放
        autoPlay: function (){
            var self = this;
            this.timer = window.setInterval(function (){
                self.nextBtn.click();
            },this.setting.delay);
        },

        //获取自定义配置参数
        getSetting: function (){
            var setting = this.poster.attr("data-setting");
            if(setting && setting != ""){
                return $.parseJSON(setting);
            }else{
                return {};
            }
        }
    }

    Carousel.init = function (posters){
        var _this_ = this;
        posters.each(function (){
            new _this_($(this));
        })
    }

    window.Carousel = Carousel;
})(jQuery)