window.onload = function() {
	//	          轮播图部分
	var lbt = document.getElementsByClassName('lbt')[0];
	var timer;
	var p = 1;
	function lunbotu(){
			timer = setInterval(function() {
			lbt.setAttribute('src', './img/' + p + '.jpg');
			p++;
			if(p == 8) {
				p = 1;
			}
		}, 2000)
	}
	
	lunbotu();

 
	//	轮播图部分结束
	
//	轮播图上左右箭头切换效果
     var turn_left = document.getElementsByClassName('turn_left')[0];
     var turn_right = document.getElementsByClassName('turn_right')[0];
     var k = 1;
     //当鼠标移入轮播图区域让箭头显示，同时清理定时器
     lbt.onmouseenter = function (){
//   	clearInterval(timer);
		 turn_left.style.display = 'block';
		 turn_right.style.display = 'block';
	}
     //当鼠标移入轮播图区域让箭头隐藏，同时恢复定时器
//    lbt.onmouseleave = function (){
//    	turn_left.style.display = 'none';
//		turn_right.style.display = 'none';
////    	 lunbotu();
//    }
      //左边切换
       turn_left.onclick = function(){
//     	clearInterval(timer);
       	lbt.setAttribute('src', './img/' + k + '.jpg');
		k--;
		if(k == 0) {
			k = 8;
		}
       }
       //右边切换
     turn_right.onclick = function(){
//     	clearInterval(timer);
       	lbt.setAttribute('src', './img/' + k + '.jpg');
		k++;
		if(k == 8) {
			k = 1;
		}
       }
     
//轮播图上左右箭头切换效果结束

    //首页落花瓣效果
	function snowFlow(left, height, src) {
		var hua_box = document.createElement('div');
		var pic = document.createElement('img');
		var snowFlow = document.getElementById('snowFlow');
		pic.className = 'pic';
		hua_box.className = 'hua_box';
		snowFlow.appendChild(hua_box);
		hua_box.appendChild(pic);
		hua_box.style.left = left + 'px';
		hua_box.style.height = height + 'px';
		pic.src = src;
		setTimeout(function() {
			snowFlow.removeChild(hua_box);
		}, 5000);
	}
	setInterval(function() {
		var left = Math.random() * window.innerWidth;
		var height = Math.random() * window.innerHeight;
		var src = './img/hua.png';
		snowFlow(left, height, src);
	},300)
//首页落花瓣效果结束

 
// 回到顶部按钮
    var toTop = document.getElementsByClassName('toTOP')[0];
       toTop.onclick =  function (){
       	document.body.scrollTop = 0;
//     	alert;
       	
       }
      
}