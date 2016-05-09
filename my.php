<?php include "include/header.php"; ?>
    <div class="wrap  my hide" > 
    	<div class="bd" >
    		<div class="scale">
    			<div class="pic_box pic_box2">
    				<img src="" id="pic">
    				<img src="<?=$cdnUrl?>images/bg2.png" alt="" class="ico w100" >	
    			</div>
    			<div class="form_box form_box2">
    				<div class="con"  data-bg="<?=$cdnUrl?>images/my/bg1.png">
    					<p class="ico num">0</p>
    					<p class="ico num2"><span>0</span>星币</p>
    					<p class="ico num3"><span>0</span>星币</p>

    				</div>
    			</div>
    			<div class="btn_box">
    				<img src="<?=$cdnUrl?>images/ico5.png" class="btn_pop" data-pop='share'>
    				<img src="<?=$cdnUrl?>images/ico6.png">
    			</div>

    		</div>
    	</div>
    </div> 
    <div class="pop pop_share">
    	<div class="bd">
    		<img data-src="<?=$cdnUrl?>images/pic_share.png">
    	</div>
    </div>       
    <script src="<?=$cdnUrl?>lib/loading.js" type="text/javascript"></script>
    
    <script type="text/javascript">
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
		        $('.pop_share').on('click',function(){
		        	$(this).fadeOut();
		        });
		        $(".btn_box img").eq(1).on("click",function(){
		        	location.href = "index.php"
		        });
		        
		    }
		});
		var id = App.getUrl('id');
		wxData.link =shareDomain+'connect.php?id='+id;
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
	    $.ajax({
	       url: App.domain + '?act=info&id='+id,
	       type:'GET',
	       dataType: "json",
	       error: function() {
	       },
	       success: function(data) {   
	            if(parseInt(data.result)==0){
					$('.num').text(data.drawcount);
					$('.num2 span').text(data.fen);
					$('.num3 span').text(data.topfen);
					$('#pic').attr({"src":data.url});
					wxData.imgUrl = data.url;
					wxData.share();		
	            }else{
	                alert(data.msg);
	            }
	       }
	    }); 		
    </script>
<?php include "include/footer.php"; ?>