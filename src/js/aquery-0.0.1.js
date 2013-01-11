var AQuery = jQuery;
$a = AQuery;
$a.fn.extend({
	'殴る':function(callback) {
		var selector = this.selector;
		var agent = navigator.userAgent;
		var eventName = 'click';
		if(agent.search(/iPhone/) != -1 || agent.search(/iPad/) != -1 || agent.search(/iPod/) != -1 || agent.search(/Android/) != -1){
			eventName = 'touchend';
		}
		return $(selector).on(eventName,callback);
	}
});