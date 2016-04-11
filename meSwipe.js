(function(window,undefined){
	window.swipe =
	function (elm , dre  ){
		var data = {};
		window.document.getElementsByClassName('box')[9].innerHTML = '000';
		elm.addEventListener('touchstart' ,(function(data){
			return start;
		})(data));

		function start(event){
			// window.document.getElementsByClassName('box')[0].innerHTML = 'ss';
			var touch  = event.targetTouches[0];
			window.document.getElementsByClassName('testDiv')[0].innerHTML = touch.pageX;
			window.document.getElementsByClassName('testDiv')[1].innerHTML = touch.pageX +'x';
			window.document.getElementsByClassName('testDiv')[2].innerHTML = touch.pageY;
			window.document.getElementsByClassName('testDiv')[3].innerHTML = touch.pageY + 'y';
			data.x = touch.pageX;
			data.y = touch.pageY;
			data.id = touch.identifier;
			window.document.getElementsByClassName('box')[1].innerHTML = 'sds';
		}
		function end(event){
			window.document.getElementsByClassName('box')[2].innerHTML = 'ses';
			var touch = event.targetTouches[0];
			window.document.getElementsByClassName('box')[4].innerHTML = touch.pageX + '';
			window.document.getElementsByClassName('box')[5].innerHTML = touch.pageY + '';
			window.document.getElementsByClassName('box')[6].innerHTML = data.x + '';
			window.document.getElementsByClassName('box')[7].innerHTML = data.y + '';
			if(touch.identifier === data.id){
				window.document.getElementsByClassName('box')[8].innerHTML = touch.identifier + '';
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