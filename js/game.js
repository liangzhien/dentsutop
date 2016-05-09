var loaderStart = new En.Loading();	
loaderStart.init({
    imgs:[],		  
     searchBgs :{
    	type:'bg'
    },
    enterCallback:function(){
        var per = this.count/this.length*100>>0;
        $('.loading .per').height(per+'%')
    },
    callback:function(){
        $(".loading").hide();
        $(".wrap").show();
     	loadSec();
     	
    }
});
var $step1 = $("#step1"),$step2 = $("#step2"),$step3 = $("#step3"),$step4 = $("#step4"),$step5 = $("#step5"),$step6 = $("#step6");
var type = 0,resultImg;
var bgLayer,bgLayer2,carLayer;
$("#btn >img").on("click",function(){
	type = $(this).index();
	$step1.find('.pic_box .img').eq(type).show().siblings().hide();

});
$("#btn_next1").on('click',function(){
	if(type!=3){
		$step3.show();
		slide();
		bgLayer = editor.addImage({'img': $step1.find(".img").eq(type).find('img')[0], 'pos': [0, 0],disable:true,dismove:true});
		carLayer = editor.addImage({'img': $("#car")[0], 'pos': [244, 460],disable:true,dismove:true});
	}else{
		$step2.show();
	}
	$step1.hide();
	
});
//上一步
$("#btn_prev").on('click',function(){
	if(type!=3){
		$step1.show();
	}else{
		$step2.show();
	}
	
	$step3.hide();
	
	bgLayer && editor.stage.removeChild(bgLayer);
    carLayer && editor.stage.removeChild(carLayer);	
});
//提交
var userData={};
$("#btn_save").on('click',function(){
//	App.dialog.show('notice',function(){
//		$('.pop_notice p').text('上传中...')
//	});
	$(".loading").show();
	editor.toDataURL(function(data){
		resultImg = data;
		if(App.isClick){return;}
		App.isClick = true;
        $.ajax({
           url: App.domain + '?act=save',
           type:'POST',
           dataType: "json",
           data :{'data':resultImg},
           error: function() {
                App.isClick = false;
                App.dialog.hide('notice');
                $(".loading").hide();
           },
           success: function(data) {   
                userData = data;
                if(parseInt(data.result)==0){
                    $('.result_img').attr("src",data.url);	
                    if(data.userInfo=="1"){
						$step3.hide();
						$step6.show();
                    }else{
                    	$step3.hide();
						$step4.show();
                    }
					console.log(data);
					App.dialog.hide('notice');
					$(".loading").hide();
					wxData.link ='http://dentsutop.applinzi.com/xm/connect.php?id='+data.id;
					var random = Math.random();
					if(random<=0.33){
						wxData.title = shareTit[0]['title'];
						wxData.desc = shareTit[0]['descA'];
					}else if(random<=0.66&&random>0.33){
						wxData.title = shareTit[1]['title'];
						wxData.desc = shareTit[1]['descA'];						
					}else {
						wxData.title = shareTit[2]['title'];
						wxData.desc = shareTit[2]['descA'];								
					}
					wxData.imgUrl = data.url;
	
					wxData.share();
                }else{
                    alert(data.msg);
                }
                App.isClick = false;
           }
        });   

	});	
});
//留资

$("#btn_msg").on("click",function(){
    $step4.hide();
	$step5.show();	

});
//留资提交
var $name = $(".name"),$mobile = $(".mobile");
$("#btn_msg_save").on('click',function(){
	if ($.trim($name.val()) == '') {
		alert('姓名不可为空');
		return false;
	}
	if ($.trim($mobile.val()) == '') {
		alert('电话不可为空');
		return false;
	} else if (!/^(13|14|15|17|18|19)[0-9]{9}$/.test($mobile.val())) {
		alert('电话号码格式不对');
		return false;
	} 		
	if(App.isClick){return;}
	App.isClick = true;
//	App.dialog.show('notice',function(){
//		$('.pop_notice p').text('资料正在提交...')
//	});	
	$(".loading").show();
    $.ajax({
       url: App.domain + '?act=saveInfo',
       type:'GET',
       dataType: "json",
       data :{'realname':$name.val(),'phone':$mobile.val()},
       error: function() {
            App.isClick = false;
            App.dialog.hide('notice');
            $(".loading").hide();
       },
       success: function(data) {   
            userData = data;
            if(parseInt(data.result)==0){
				$step5.hide();
				$step6.show();
            }else{
                alert(data.msg);
            }
            App.isClick = false;
            App.dialog.hide('notice');
            $(".loading").hide();
       }
    }); 	

});
var editor = new mo.ImageEditor({
    trigger: $('#file'),
    container: $('#imgedit'),
    width: 705,
    height: 711,
    stageX:  $('#imgedit')[0].offsetLeft,
	iconScale: {
		url:'images/icon.png',
		rect: [300, 300, 25, 25]
	},
	iconClose: {
		url: 'images/icon.png',
		rect: [0, 0, 240, 40]
	}

});
$(".pop_share").on("click",function(){
	$(this).fadeOut();
});
$('.btn_home').on("click",function(){
	location.href = 'index.php'
});

$(".wrap").on("click",".slide li span",function(){
	var id = $(this).attr('id');
	var $img = $('.pic_con').find('img').eq(id-1)[0]; 
	var src = 'images/game/3/pic'+id+'.png';
	var img = new Image();
	img.onload = function(){
		editor.addImage({'img': $img,'pos':[250,200]});
		carLayer && editor.stage.removeChild(carLayer);	
		carLayer = editor.addImage({'img': $("#car")[0], 'pos': [244, 460],disable:true,dismove:true});		
	}
	//img.crossOrigin = '';
	img.src = src;

});
var sketchpad = new Sketchpad({
  element: '#sketchpad',
  width: 705,
  height: 711
});
$("#btn_re").on("click",function(){
	sketchpad.undo();
});
$(".write_weight span").on("click",function(){
	$(this).addClass('on').siblings().removeClass('on');
	var size =parseInt( $(this).find('i').text());
	sketchpad.penSize = size;
});
$(".write_color i").on("click",function(){
	$(this).addClass('on').siblings().removeClass('on');
	var color = $(this).css('background-color');
	console.log(color)
	sketchpad.color  = color;
});	
$("#btn_next").on("click",function(){
	var resultImg =  $('#sketchpad')[0].toDataURL();
	window.open(resultImg);
	var img = new Image();
	bgLayer2 = editor.addImage({'img': $("#write_bg")[0],disable:true,dismove:true});
	img.onload = function(){
		
		editor.addImage({img: img,disable:true,dismove:true });
		$step2.hide();
		$step3.show();
		slide();
		carLayer = editor.addImage({'img': $("#car")[0], 'pos': [244, 460],disable:true,dismove:true});
	}
	img.src = resultImg;	

});
var isOne =true;
function slide(){
	if(!isOne){return;}
	isOne = false;
	TouchSlide({ slideCell:"#slide" });
}

function loadSec(){
	var loaderStart = new En.Loading();	
	loaderStart.init({
	    imgs:[],	
	    searchImgs:{
			dom:$("body")[0],
			type:'src2'
		},
	     searchBgs :{
	    	type:'bg2'
	    }
	});
}


