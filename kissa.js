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


	this._imageContainer.css({
		'transition-duration':'0.3s'
	});
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
		this._imageContainer.css('opacity',0);

		var me = this;

		this._image.onload = function(){
			me._events.fire('imageload');
			me._imageContainer.css('opacity',1);
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