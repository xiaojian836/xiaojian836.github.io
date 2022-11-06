 /**
   * 浏览器离开和点击标题样式
   */
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        document.title = 'FBL Warning';
        clearTimeout(titleTime);
    }
    else {
        document.title = OriginTitle;
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});