(function(window,undefined){
	window.swipe =
	function (elm , dre ,f ){
		var data = {
			'left' : function(){
				cells.left();
				cells.quicklyUpdate();
			} ,
			'right' :function(){
				cells.right();
				cells.quicklyUpdate();
			},
			'up' : function(){
				cells.up();
				cells.quicklyUpdate();
			},
			'down' : function(){
				cells.down();
				cells.quicklyUpdate();
			},
			handle : function(){
				var _x = this.x1 - this.x0;
				var _y = this.y1 - this.y0;
				var _k = _y / _x;
				if(_x > 30 && -1 < _k < 1 ){
					return 'right';
				}else if( _x < -30 && -1 < _k < 1){
					return 'left';
				}else if( _y > 30 && (_k > 1 || _k < -1) ){
					return 'down';
				}else if( _y < -30 && (_k > 1 || _k < -1) ){
					return 'up';
				}
			}

		};
		elm.addEventListener('touchstart' ,(function(data){
			return start;
		})(data));
		elm.addEventListener('touchend' , (function(data){
			return end;
		})(data));

		function start(event){
			var touch = event.targetTouches[0];
			window.document.getElementsByClassName('testTa')[0].innerHTML = 'success';
			data.x0 = touch.pageX;
			data.y0 = touch.pageY;
			data.id0 = touch.identifier;
			window.document.getElementsByClassName('testTa')[0].innerHTML = data.x0 +'X  '+data.y0 + 'y   ';
		}
		function end(event){
			var touch = event.changedTouches[0];
			if(touch.identifier === data.id0){
				data.x1 =touch.pageX;
				data.y1 = touch.pageY;
				window.document.getElementsByClassName('testTa')[1].innerHTML = data.x1 +'X  '+data.y1 + 'y   ';
				window.document.getElementsByClassName('testTa')[2].innerHTML = data.handle();
				data[data.handle()]();
			}
		}
		
	}

})(window,undefined);