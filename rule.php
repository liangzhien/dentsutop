<?php include "include/header.php"; ?> 
    <div class="wrap rule hide">
    	<div class="inner">
    		<h3><img data-src="<?=$cdnUrl?>images/home/6.png"></h3>
    		<a href="index.php" class="ico btn_back"><img src="<?=$cdnUrl?>images/ico17.png"/></a>
    		<div class="rule_box">
    			<img  data-src="<?=$cdnUrl?>images/home/rule.jpg">
    		</div>
    		<img src="<?=$cdnUrl?>images/home/8.png" class="ico i1" title="箭头">
    	</div>
    </div>
    <style type="text/css">
    	.btn_back{ z-index: 3; right: 10px;top: 20px;}
    </style>
    <script src="<?=$cdnUrl?>lib/loading.js" type="text/javascript"></script>
    <script type="text/javascript">
	    var loaderStart = new En.Loading();	
		loaderStart.init({
		    imgs:[],
		    enterCallback:function(){
		        var per = this.count/this.length*100>>0;
		        $('.loading .per').height(per+'%')
		    },
		    callback:function(){
		        $(".loading").hide();
		        $(".wrap").show();
		    }
		});
    </script>
<?php include "include/footer.php"; ?>