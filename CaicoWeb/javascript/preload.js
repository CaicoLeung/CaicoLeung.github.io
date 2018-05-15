//图片预加载
;(function ($) {

    function Preload(imgs, options) {
        this.imgs = (typeof imgs === 'String') ? [imgs] : imgs;
        this.options = $.extend({}, Preload.Defaults, options);
        this._unoredered();
    }

    Preload.Defaults = {
        each: null,
        all: null
    }

    //无序加载
    Preload.prototype._unoredered = function () {
        var imgs = this.imgs,
            opts = this.options,
            count = 0,
            len = imgs.length;

        $.each(imgs, function (i, src) {
            if (typeof src != 'string') return;

            var imgObj = new Image();
            $(imgObj).on("load error", function () {
                opts.each && opts.each(count);
                if (count >= len - 1) {
                    opts.all && opts.all();
                }
                count++;
            });
            imgObj.src = src;
        });
    }

    $.extend({
        preload: function (imgs, options) {
            new Preload(imgs, options);
        }
    })
})(jQuery);