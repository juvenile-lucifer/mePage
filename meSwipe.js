(function(window,undefined){
	window.swipe =
	function (elm , dre  ){
		var data = {};
		window.document.getElementsByClassName('box')[4].innerHTML = '000';
		elm.addEventListener('touchstart' ,(function(data){
			return start;
		})(data));

		function start(event){
			window.document.getElementsByClassName('box')[0].innerHTML = 'ss';
			var touch  = event.targetTouches[0];
			data.x = touch.pageX;
			data.y = touch.pageY;
			data.id = touch.identifier;
			window.document.getElementsByClassName('box')[1].innerHTML = 'sds';
		}
		function end(event){
			window.document.getElementsByClassName('box')[2].innerHTML = 'ses';
			var touch = event.targetTouches[0];
			if(touch.identifier === data.id){
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