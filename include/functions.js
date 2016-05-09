/*
 * 公共Javascript函数库
 */

function doAction(dbName,a,id){
	ids = 0;
	if(a=='deleteAll'){
		if(confirm('请确认是否删除！')){
			$.ajax({
				url:'action.php',
				type: 'POST',
				data:'act=delete&dbName='+dbName+'&id='+getCheckedIds('checkbox'),
				success: function(data){
					window.location.href = window.location.href;
				}
			});
		}
	}
	if(a=='delete'){
		if(confirm('请确认是否删除！')){
			$.ajax({
				url:'action.php',
				type: 'POST',
				data:'act=delete&dbName='+dbName+'&id='+id,
				success: function(data){
					window.location.href = window.location.href;
				}
			});
		}
	}
	if(a=='isshowAll'){
		updateStr = document.getElementById("SelectList").value;
		if(confirm('请确认是否审核！')){
			updateIsFun(dbName,updateStr,getCheckedIds('checkbox'));
			/*
			$.ajax({
				url:'action.php',
				type: 'POST',
				data:'act=isshowAll&dbName='+dbName+'&value='+SelectValue+'&id='+getCheckedIds('checkbox'),
				success: function(data){
					window.location.href = window.location.href;
				}
			});
			*/
		}
	}
	if(a=='isshowOn'){
		$.ajax({
			url:'action.php',
			type: 'POST',
			data:'act=isshowAll&dbName='+dbName+'&value=1&id='+id,
			success: function(data){
				window.location.href = window.location.href;
			}
		});
	}
	if(a=='isshowOff'){
		$.ajax({
			url:'action.php',
			type: 'POST',
			data:'act=isshowAll&dbName='+dbName+'&value=0&id='+id,
			success: function(data){
				window.location.href = window.location.href;
			}
		});
	}
	if(a=='tjOn'){
		$.ajax({
			url:'action.php',
			type: 'POST',
			data:'act=tjAll&dbName='+dbName+'&value=1&id='+id,
			success: function(data){
				window.location.href = window.location.href;
			}
		});
	}
	if(a=='tjOff'){
		$.ajax({
			url:'action.php',
			type: 'POST',
			data:'act=tjAll&dbName='+dbName+'&value=0&id='+id,
			success: function(data){
				window.location.href = window.location.href;
			}
		});
	}
	if(a=='moveAll'){
		scid = document.getElementById("selectCid").value;
		if(confirm('请确认是否转移！')){
			$.ajax({
				url:'action.php',
				type: 'POST',
				data:'act=move&dbName='+dbName+'&scid='+scid+'&id='+getCheckedIds('checkbox'),
				success: function(data){
					window.location.href = window.location.href;
				}
			});
		}
	}
	if(a=='weekAll'){
		scid = document.getElementById("selectWeek").value;
		if(confirm('请确认是否添加到排名！')){
			$.ajax({
				url:'action.php',
				type: 'POST',
				data:'act=week&dbName='+dbName+'&scid='+scid+'&id='+getCheckedIds('checkbox'),
				success: function(data){
					window.location.href = window.location.href;
				}
			});
		}
	}
}
function updateIsFun(dbName,updateStr,id){
	$.post('action.php?act=is',{dbName:dbName,updateStr:updateStr,id:id},function (msg) {
		if (msg){
			window.location.reload();
		}
	});
	
	
}
//全选/取消
function checkAll(o,checkBoxName){
	var oc = document.getElementsByName(checkBoxName);
	for(var i=0; i<oc.length; i++) {
		if(o.checked){
			oc[i].checked=true;	
		}else{
			oc[i].checked=false;	
		}
	}
	checkDeleteStatus(checkBoxName)
}
//检查有选择的项，如果有删除按钮可操作
function checkDeleteStatus(checkBoxName){
	var oc = document.getElementsByName(checkBoxName);
	for(var i=0; i<oc.length; i++) {
		if(oc[i].checked){
			//批量删除
			document.getElementById('DeleteCheckboxButton').disabled=false;
			//批量转移
			//if (document.getElementById('selectCid')){
			if($("#selectCid").length>0){
			document.getElementById('updateCategoryButton').disabled=false;
			document.getElementById('selectCid').disabled=false;
			}
			//排名
			if($("#selectWeek").length>0){
			document.getElementById('updateCategoryButton').disabled=false;
			document.getElementById('selectWeek').disabled=false;
			}
			//批量其它
			if($("#SelectList").length>0){
			document.getElementById('SelectList').disabled=false;
			document.getElementById('SubmitSelectButton').disabled=false;
			}
			//批量生成HTML
			if($("#htmlCheckboxButton").length>0){
			document.getElementById('htmlCheckboxButton').disabled=false;
			}
			
			return;
		}
	}
	//批量删除
	document.getElementById('DeleteCheckboxButton').disabled=true;
	//批量转移
	//if (document.getElementById('selectCid')){
	if($("#selectCid").length>0){ 
	document.getElementById('updateCategoryButton').disabled=true;
	document.getElementById('selectCid').disabled=true;
	}
	//排名
	if($("#selectWeek").length>0){ 
	document.getElementById('updateCategoryButton').disabled=true;
	document.getElementById('selectWeek').disabled=true;
	}
	//批量其它
	if($("#SelectList").length>0){
	document.getElementById('SelectList').disabled=true;
	document.getElementById('SubmitSelectButton').disabled=true;
	}
	//批量生成HTML
	if($("#htmlCheckboxButton").length>0){
	document.getElementById('htmlCheckboxButton').disabled=true;
	}
	
}

//获取所有被选中项的ID组成字符串
function getCheckedIds(checkBoxName){
	var oc = document.getElementsByName(checkBoxName);
	var CheckedIds = "";
	for(var i=0; i<oc.length; i++) {
		if(oc[i].checked){
			if(CheckedIds==''){
				CheckedIds = oc[i].value;	
			}else{
				CheckedIds +=","+oc[i].value;	
			}
			
		}
	}
	return CheckedIds;
}