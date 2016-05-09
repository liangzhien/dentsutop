<?php include "include/header.php"; ?>
    <div class="wrap home " > 
    	<div class="canvas">
    		<canvas id="canvas" width="" height=""></canvas>
    	</div>
		
		<img src="http://dentsutop.applinzi.com/xm/images/game/1/bg.png" class="hide" id="img"/>
    </div> 
    <style type="text/css">
    	.loading{display: none;}
    	.canvas{ position: relative;width:738px;height: 749px;overflow: hidden;border-radius: 40px;}
    	canvas{ }
    </style>
    <script src="<?=$cdnUrl?>lib/loading.js" type="text/javascript"></script>
    <script type="text/javascript">
		var canvas = document.querySelector('#canvas');
		var ctx = canvas.getContext('2d');
		canvas.width= 727;
		canvas.height= 736;
		alert("test")
		//var img = new Image();
		var originalImageData;
//		img.onload = function() {
//		    ctx.drawImage(img, 0, 0);
//		    originalImageData = ctx.getImageData(0,0,canvas.width, canvas.height); 
//		    ctx.putImageData(originalImageData,10,70);
//		}
//		//img.crossOrigin = '';
//		img.src = 'http://cbuxm.b0.upaiyun.com/images/game/1/bg.png';
		window.onload = function(){
			var img = document.querySelector("#img");
			ctx.fillStyle='red';
			ctx.fillRect(0,0,canvas.width,canvas.height);
			ctx.drawImage(img, 0, 0);
			//originalImageData = ctx.getImageData(0,0,canvas.width, canvas.height); 
			
		  // ctx.putImageData(originalImageData,10,70);
		}
    </script>
<?php include "include/footer.php"; ?>