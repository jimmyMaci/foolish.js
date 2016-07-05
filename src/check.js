var Check = function() {

	var self = this;
	self.isUndefined = isUndefined;
	self.isString = isString;
	
	function isUndefined(object) {
	return typeof object !== 'undefined';
	}
	
	function isString(value) {
	  	return (typeof value === 'string' || value instanceof String);
	  }
	  
	  	
	function isNumber(value) {
	  	return (typeof value === 'number');
	  }
	
};
