let heo_cookiesTime = null;
let heo_musicPlaying = false;
let heo_keyboard = false;
let heo_intype = false;
// 私有函数
var heo = {
  //切换音乐播放状态
  musicToggle: function() {
    let msgPlay = '<i class="fa-solid fa-play"></i><span>播放音乐</span>' // 此處可以更改為你想要顯示的文字
    let msgPause = '<i class="fa-solid fa-pause"></i><span>暂停音乐</span>' // 同上，但兩處均不建議更改
    if (heo_musicPlaying) {
      document.querySelector("#nav-music").classList.remove("playing");
      document.getElementById("nav-music-hoverTips").innerHTML = "音乐已暂停";
      heo_musicPlaying = false;
    }else {
      document.querySelector("#nav-music").classList.add("playing");
      heo_musicPlaying = true;
    }
    document.querySelector('meting-js').aplayer.toggle();
    rm.hideRightMenu();
  },

  //音乐上一曲
  musicSkipBack: function() {
    document.querySelector('meting-js').aplayer.skipBack();
    rm.hideRightMenu();
  },

  //音乐下一曲
  musicSkipForward: function() {
    document.querySelector('meting-js').aplayer.skipForward();
    rm.hideRightMenu();
  },

  //获取音乐中的名称
  musicGetName: function() {
    var x = $('.aplayer-title')
		// var x = document.getElementsByClassName('txt');
		// for (var i = x.length - 1; i >= 0; i--) {
		// console.log(x[i].innerText)
		// }
		var arr = []
		for (var i = x.length - 1; i >= 0; i--) {
			arr[i] = x[i].innerText
			// console.log(x[i].innerText)
		}
		return arr[0]
  },
}