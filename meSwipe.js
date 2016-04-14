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
				var absX = Math.abs(_x);
				var absY = Math.abs(_y);
				var direction;
				if(absX > 30 && absX > absY){
					if(_x >0 ){
						direction = 'right';
					}else {
						direction = 'left';
					}
				}else if(absY >30 && absY > absX){
					if(_y > 0){
						direction = 'down';
					}else{
						direction = 'up';
					}
				}
				return direction;
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
			data.x0 = touch.pageX;
			data.y0 = touch.pageY;
			data.id0 = touch.identifier;
			event.preventDefault();
		}
		function end(event){
			var touch = event.changedTouches[0];
			if(touch.identifier === data.id0){
				data.x1 =touch.pageX;
				data.y1 = touch.pageY;
				data[data.handle()]();
			}
		}
	}

})(window,undefined);