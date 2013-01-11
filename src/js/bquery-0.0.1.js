var BQuery = jQuery;
$b = BQuery;
$b.fn.extend({
	'残業代':function() {
		var selector = this.selector;
		return $(selector).html('そんなものはござらぬ！');
	}
});

$b.extend({
	'勤務時間':function() {
		return 24;
	}
});
