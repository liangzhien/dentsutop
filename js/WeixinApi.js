'use strict';
document.write('<script src="http://dentsutop.applinzi.com/xm/jsapi.php?url=' + encodeURIComponent(location.href) + '" type="text/javascript"></script>');
var shareDomain = 'http://dentsutop.applinzi.com/xm/';
var shareTit= [
	{'title':'你与日本游只是一幅童画的距离','descA':'我的萌宝画了一幅童画，求买家估价，助TA童游日本。','descB':'我天价买下这幅童画，一捶子买卖，求火眼金睛鉴真假。'},
	{'title':'邀你萌宝来作画，挣日本游基金','descA':'世界不缺少美，而是缺少发现美的眼睛，为我宝贝助力。','descB':'明明可以靠脸，偏偏要靠画画，TA宝贝的画值得这个价。'},
	{'title':'童画拍卖会助你日本亲子之旅','descA':'眼前浮华再多，也抵不过一次远游，助我宝贝童游日本。','descB':'已很难遇到喜欢的人，遇到喜欢的童画，我就出这个价。'}
];
var wxData = {
	imgUrl: 'http://cbuxm.b0.upaiyun.com/images/share.jpg',
	link: shareDomain,
	desc: '世界很大，开启你和宝贝的奇妙之旅',
	title: "童画拍卖会助你日本亲子之旅",
	share: function() {
		//获取“分享到朋友圈”按钮点击状态及自定义分享内容接口
		wx.onMenuShareTimeline({
			title: wxData.desc,
			link: wxData.link,
			imgUrl: wxData.imgUrl,
			success: function() {
				wxData.success();
				wxData.callback();
			},
			cancel: function() {

			}
		});

		//获取“分享给朋友”按钮点击状态及自定义分享内容接口
		wx.onMenuShareAppMessage({
			title: wxData.title,
			desc: wxData.desc,
			link: wxData.link,
			imgUrl: wxData.imgUrl,
			type: '', // 分享类型,music、video或link，不填默认为link
			dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
			success: function() {
				wxData.success();
				wxData.callback();
			},
			cancel: function() {

			}
		});
	},
	success: function() {

	},
	callback: function() {

	}
};


wx.ready(function() {
	wxData.share();
});
wx.error(function(res) {
	alert(JSON.stringify(res));
});