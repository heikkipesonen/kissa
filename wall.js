function wall(){
	this._kissat = [];

	this._element = $('<div class="kissa-wall" />');
	this._kissaContainer = $('<div class="kissoja" />');

	this._element.append(this._kissaContainer);
	this._events = new events(this);
	this._dropinput = this._element.dropInput();

	this._element.css({
		position:'relative',
		width:'100%',
		height:'100%'
	});

	var me = this;
	this._dropinput.on('load',function(e){
		console.log(e);

		for (var i in e ){			
			if (e[i]){
				if (e[i].datatype == 'image'){
					var kissa = me.add();
					kissa.setImage(e[i].data);
				}
			}
		}
	});
}

wall.prototype = {
	show:function(selector){
		$(selector).html(this.getElement());
	},
	add:function(){
		var k = new kissa();
		this._kissat.push(k);
		this._set(k);
		return k;
	},
	_set:function(kissa){
		this._kissaContainer.append(kissa.getElement());
	},
	getData:function(){

	},
	getElement:function(){
		return this._element;
	}
}