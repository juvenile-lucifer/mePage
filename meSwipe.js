(function(window,undefined){
	window.swipe =
	function (elm , dre  ){
		var data = {};
		window.document.getElementsByClassName('box')[9].innerHTML = '000';
		elm.addEventListener('touchstart' ,(function(data){
			return start;
		})(data));

		function start(event){
			var touch = event.targetTouches[0];
			data.x = touch.pageX;
			data.y = touch.pageY;
			data.id = touch.identifier;
		}
		function end(event){
			var touch = event.changedTouches[0];
			alert('sususu');
			alert(event.changedTouches.length);
			window.document.getElementsByClassName('testTa')[0].innerHTML = event.changedTouches[0];
			window.document.getElementsByClassName('testTa')[1].innerHTML = touch;
			window.document.getElementsByClassName('testTa')[2].innerHTML = touch.pageX;
			window.document.getElementsByClassName('testTa')[3].innerHTML = data.x;
			// alert(touch.pageX , touch.pageY , touch.identifier);
			// alert(data.x , data.y , data.id);
			// window.document.getElementsByClassName('testTa')[0].innerHTML = touch.pageX + 'TX';
			// window.document.getElementsByClassName('testTa')[1].innerHTML = touch.pageY + 'TY';
			// window.document.getElementsByClassName('testTa')[2].innerHTML = data.x + 'DX';
			// window.document.getElementsByClassName('testTa')[3].innerHTML = data.y + 'DY';
			if(touch.identifier === data.id){
				alert(touch.identifier);
				if( (touch.pageX - data.x) >30){
					// cells.right();
					// cells.update
					var boxs = window.document.getElementsByClassName('box');
					boxs[3].innerHTML = 'rs';
				}
			}
		}
		elm.addEventListener('touchend' , (function(data){
			return end;
		})(data));
	}

})(window,undefined);