var cells =
		(function(window,undefined){
				var config = {
					boxs : window.document.getElementsByClassName('box'),
					line : 4,
					list :4,
				};
				var WYserver = (function(){
					var convertA = function(a){
						var h =[];
						var removeZero = function(b){
							var newB =[];
							for(i = 0 , j = b.length ; i < j ; i++){
								if(b[i]){
									newB.push(b[i]);
								}
							}
							return newB;
						}
						var com = function(b){
							var a =removeZero(b) ;
							if( a[1]){
								if(a[0] === a[1]){
									h.push(a[0] + a[1]);
									a[0] = 0;
									a[1] = 0;
									com( a );
								}else{
									h.push(a[0]);
									a[0] = 0;
									com( a );
								}
							}else if(a[0]){
								h.push(a[0]);
							}
						}
						com(a);
						return h;
					}
					return {
						convertA : convertA ,
					}
				})();

				var cells =[];
				cells.init = function(){
					this.row = [];
					this.col = [];
					var that = this;
					var WYinit = function(){
						for(var ib = 0 , jb = config.boxs.length ; ib < jb ; ib++){
							that.push(new Cell(config.boxs[ib] , ib , 0 , 0 ));
						}
						for(var i = 0 , j = config.list ; i<j ; i++){
							that.row.push(new Row(that , i+1));
						}
						for(var ii = 0 , jj = config.line ; ii<jj ; ii++){
							that.col.push(new Col(that , ii+1));
						}
						console.log(that.col);
					}
					WYinit();
				}
				cells.left = function(){
					for(var i = 0 , j = this.row.length ; i < j ; i++){
						this.row[i].toLeft();
					}
				}
				cells.right = function(){
					for(var i = 0 , j = this.row.length ; i < j ; i++){
						this.row[i].toRight();
					}
				}
				cells.up = function(){
					for(var i = 0 , j = this.col.length ; i < j ; i++){
						this.col[i].toTop();
					}
				}
				cells.down = function(){
					for(var i = 0 , j = this.col.length ; i < j ; i++){
						this.col[i].toBottom();
					}
				}
				cells.updateView = function(before , after){
					if(before){
						before();
					}
					for(var i = 0 , j = this.length ; i < j ; i++){
						cells[i].update();
					}
					if(after){
						after();
					}
				}
				cells.quicklyUpdate = function(){
					var isChanged = this.isValueChanged();
					if(isChanged){
						var emptyCells = this.findEmptyCell();
						emptyCells[Math.floor(Math.random()*emptyCells.length)].newValue = 2;
						this.updateView();
						this.renewValue();
					}
				}
				cells.isValueChanged = function(){
					var isChanged = false;
					for(var i = 0 , j = this.length ; i < j ;i++){
						if(this[i].newValue !== this[i].oldValue){
							isChanged =true;
							break;
						}
					}
					return isChanged;
				}
				cells.findEmptyCell = function(){
					var emptyCell = [];
					for(var i = 0 , j = this.length ; i < j ;i++){
						if(!this[i].newValue){
							emptyCell.push(this[i]);
						}
					}
					return emptyCell;
				}
				cells.renewValue = function(){
					for(var i = 0 , j = this.length ; i < j ;i++){
							this[i].oldValue = this[i].newValue;
					}
				}
				function Cell(a,b){
					this.box = a;
					this.index = b;
					this.oldValue = arguments[2] ? arguments[2] : undefined;
					this.newValue = arguments[3] ? arguments[3] : 0;
					this.posX = Math.floor(this.index / config.line) + 1;
					this.posY = this.index % config.line + 1;
				}

				Cell.prototype.update = function(){
					// if(!this.newValue || this.newValue !== this.oldValue){
						var value = this.newValue === 0 ? '' : this.newValue;
						this.box.innerHTML = value + '';
						this.box.className = this.box.className.split(' ')[0] + ' _'+ this.newValue;
					// }
				}

				function Row(cells , a){
					this.row = undefined;
					this.rowCells = [];
					that = this;
					var init = function(){
						that.row = a;
						for(var i = 0 , j = config.list ; i < j ; i++ ){
							var firstRowCellIndex = (a-1);
							that.rowCells.push(cells[firstRowCellIndex + config.line*i]);
						}
					}
					init();
				}
				Row.prototype.toLeft = function(){
					var a = this.rowCells , newValues = [];
					for(var i =0 ,l = a.length ; i < l ; i++ ){
						newValues.push(a[i].newValue);
					}
					console.log(newValues);
					var converted = WYserver.convertA(newValues);
					console.log(converted);
					for(var ii = 0 , ll = a.length ; ii < ll ; ii++){
						if(converted[ii]){
							a[ii].newValue = converted[ii];
						}else{
							a[ii].newValue = 0;
						}
					}
					console.log(a);
				}
				Row.prototype.toRight = function(){
					var a = this.rowCells , newValues = [];
					for(var i = a.length - 1 ; i >= 0 ; i-- ){
						newValues.push(a[i].newValue);
					}
					console.log(newValues);
					var converted = WYserver.convertA(newValues);
					console.log(converted);
					for(var ii = 0 , ll = a.length ; ii < ll ; ii++){
						if(converted[ii]){
							a[ll - ii - 1].newValue = converted[ii];
						}else{
							a[ll - ii - 1].newValue = 0;
						}
					}
					console.log(a);
				}
				function Col(cells , a){
					this.col = undefined;
					this.colCells = [];
					that = this;
					var init = function(){
						that.col = a;
						for(var i = 0 , j = config.line ; i < j ; i++ ){
							var firstColCellIndex = (a-1)*j;
							that.colCells.push(cells[firstColCellIndex + i]);
						}
					}
					init();
				}
				Col.prototype.toTop = function(){
					var a = this.colCells , newValues = [];
					for(var i =0 ,l = a.length ; i < l ; i++ ){
						newValues.push(a[i].newValue);
					}
					console.log(newValues);
					var converted = WYserver.convertA(newValues);
					console.log(converted);
					for(var ii = 0 , ll = a.length ; ii < ll ; ii++){
						if(converted[ii]){
							a[ii].newValue = converted[ii];
						}else{
							a[ii].newValue = 0;
						}
					}
					console.log(a);
				}
				Col.prototype.toBottom = function(){
					var a = this.colCells , newValues = [];
					for(var i =a.length - 1  ; i >= 0 ; i-- ){
						newValues.push(a[i].newValue);
					}
					console.log(newValues);
					var converted = WYserver.convertA(newValues);
					console.log(converted);
					for(var ii = 0 , ll = a.length ; ii < ll ; ii++){
						if(converted[ii]){
							a[ll - ii -1 ].newValue = converted[ii];
						}else{
							a[ll -ii -1 ].newValue = 0;
						}
					}
					console.log(a);
				}
				return cells;
		})(window,undefined);
		