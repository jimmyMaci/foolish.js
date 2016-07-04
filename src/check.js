var Check = function() {

	var self = this;
	self.isUndefined = isUndefined;
	
	function isUndefined(object) {
	return typeof object !== 'undefined';
	}
	
};
