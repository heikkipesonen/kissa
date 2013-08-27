function kissa(){
	this._element = $('<div class="kissa" />');
	this._content = $('<div class="kissa-content" />');
	this._textContainer = $('<div class="kissa-content-text" />');
	this._imageContainer = $('<div class="kissa-content-image" />');

	this._element.append(this._content.append(this._imageContainer).append(this._textContainer));
	this._text = '';

	this._image = false;
	this._events = new events(this);
	this._id = false;
	this._rev = false;	
}

kissa.prototype = {
	setText:function(text){
		if (text){
			this._text = text;			
		}

		this._textContainer.html(this._text);
	},
	setImage:function(url){
		this._image = new Image();
		this._image.src = url;
		this._imageContainer.empty();
		this._imageContainer.append(this._image);
		
		var me = this;
		this.onload = function(){
			this._events.fire('imageload');
		}
	},
	getData:function(){
		return {
			image:this._image.src,
			text:this._text			
		};
	},
	getElement:function(){
		if (this._id){
			this._element.attr('id',this._id);
		}
		return this._element;
	}
}