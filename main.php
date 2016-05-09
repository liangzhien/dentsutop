<?php include "include/header.php"; ?>
    <div class="wrap home main " id="step1"> 
    	<div class="bd ">
	    	<a href="rule.php"><img data-src="<?=$cdnUrl?>images/home/1.png" class="ico i1" title="活动详情"></a>
	    	<div class="msg_box">
	    		<div class="pic "><img src=""></div>
	    		<p><span></span>邀请你参与此次拍卖会</p>
	    		 
	    	</div>
	    	<div class="scale">
		    	<img data-src="<?=$cdnUrl?>images/home/3.png" class="ico i2" title="我和贵士的一天">
		    	<img data-src="<?=$cdnUrl?>images/home/4.png" class="ico i3" title="童画">
		    	<img data-src="<?=$cdnUrl?>images/home/5.png" class="ico i5" title="背景">
		    	<img data-src="<?=$cdnUrl?>images/home/2.png" class="ico i4" title="车">
		    	<div class="tit ico">
		    		<img data-src="<?=$cdnUrl?>images/main/1.png">
		    		<p><span id="num">0</span>星币</p>
		    	</div>
		    	<a href="javascript:;" class='ico btn_game'><img data-src="<?=$cdnUrl?>images/ico1.png"></a>
	    	</div>
    	</div>

    </div> 
    <div class="wrap main hide "  id="step2">
    	<div class="bd" >
    		<div class="scale">
    			<div class="pic_box">
    				<img src="<?=$cdnUrl?>images/tem/3.png"  id="pic">
    				<img src="<?=$cdnUrl?>images/bg2.png" alt="" class="ico out_bg">	
    			</div>
    			<div class="form_box">
    				<div class="con"  data-bg="<?=$cdnUrl?>images/main/bg1.png">
    					<p class="ico num">0</p>
    					<p class="ico num2"><span>0</span>星币</p>
    					<p class="ico num3"><span>0</span>星币</p>
    					<div class="type">
    						<a href="javascript:;"><i></i></a>
    						<a href="javascript:;"><i></i></a>
    						<a href="javascript:;"><i></i></a>
    					</div>
    				</div>
    			</div>
    			<div class="btn_box">
    				<img src="<?=$cdnUrl?>images/ico2.png" id="btn_ok">
    			</div>
    			<img src="<?=$cdnUrl?>images/main/2.png">
    		</div>
    	</div>
    </div>
    <div class="wrap main hide"  id="step3">
    	<div class="bd" >
    		<div class="scale">
    			<div class="pic_box pic_box2">
    				<img src="<?=$cdnUrl?>images/tem/3.png" id="pic2">
    				<img src="<?=$cdnUrl?>images/bg2.png" alt="" class="ico out_bg">	
    			</div>
    			<div class="form_box form_box2 ">
    				<div class="con"  data-bg="<?=$cdnUrl?>images/main/bg2.png">
    					<p class="ico num" style="color: #ff4d5b;"><span>0</span>星币</p>
    				</div>
    			</div>
    			<div class="btn_box btn_box2">
    				<a href="index.php"><img src="<?=$cdnUrl?>images/ico3.png"></a>
    				<img src="<?=$cdnUrl?>images/ico4.png" data-pop='share' class="btn_pop">
    			</div>
    		</div>
    	</div>
    </div>  
    <div class="pop pop_share">
    	<div class="bd">
    		<img data-src="<?=$cdnUrl?>images/pic_share2.png">
    	</div>
    </div>  
    <script src="<?=$cdnUrl?>lib/loading.js" type="text/javascript"></script>
    <script type="text/javascript">
	    var loaderStart = new En.Loading();	
	    var type ;
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
		        $(".wrap").eq(0).show();
		        $(".pop_share").on("click",function(){
		        	$(this).fadeOut();
		        });
                $(".btn_game").on("click",function(){
                    $("#step1").hide();
                    $("#step2").fadeIn();
                    return false;
                });
                $(".type a").on("click",function(){
                	$(this).parent().addClass('click')
                	type= $(this).index()+1;
                	if(type==1){
                		$("#step3 .num").text(100);
                	}else if(type==2){
                		$("#step3 .num").text(200);
                	}else if(type==3){
                		$("#step3 .num").text(500);
                	}
                    $(this).addClass('on').siblings().removeClass('on');
                    return false;
                });
		    }
		});
		var id = App.getUrl('id');
		wxData.link =shareDomain+'connect.php?id='+id;
		wxData.share();	
	    $.ajax({
	       url: App.domain + '?act=info&id='+id,
	       type:'GET',
	       dataType: "json",
	       error: function() {
	       },
	       success: function(data) {   
	            if(parseInt(data.result)==0){
					$(".pic img").attr("src",data.picurl);
					$(".msg_box p span").text(data.nickname);
					$('.num ').text(data.drawcount);
					$('.num2 span').text(data.fen);
					$('.num3 span,#num').text(data.selffen);	
					$('#pic,#pic2').attr({"src":data.url});	
					wxData.imgUrl = data.url;
					wxData.share();				
	            }else{
	                alert(data.msg);
	            }
	       }
	    }); 	
    
	    $("#btn_ok").on('click',function(){
	    	if(!$(".type").hasClass('click')){
	    		alert('请选择价格')
	    		return;
	    	}
			if(App.isClick){return;}
			App.isClick = true;	  
//			App.dialog.show('',function(){
//				$('.pop_notice p').text('正在出价...')
//			});		

			$(".loading").show();	  	
		    $.ajax({
		       url: App.domain + '?act=draw&id='+id,
		       type:'GET',
		       data:{fen:type},
		       dataType: "json",
		       error: function() {
		       		App.isClick = false;
		       		$(".pop_notice").hide();
		       		$(".loading").hide();
		       },
		       success: function(data) {   
		            if(parseInt(data.result)==0){
		            	
	                  	$("#step2").hide();
	                    $("#step3").fadeIn();	
						var random = Math.random();
						if(random<=0.33){
							wxData.title = shareTit[0]['title'];
							wxData.desc = shareTit[0]['descB'];
						}else if(random<=0.66&&random>0.33){
							wxData.title = shareTit[1]['title'];
							wxData.desc = shareTit[1]['descB'];						
						}else {
							wxData.title = shareTit[2]['title'];
							wxData.desc = shareTit[2]['descB'];								
						}
						wxData.share();		                    	
		            }else{
		                alert(data.msg);
		            }
		            App.isClick = false;
		            $(".pop_notice").hide();
					$(".loading").hide();
					
		       }
		    }); 	    	
	    })	
    </script>
<?php include "include/footer.php"; ?>