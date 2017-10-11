var vintage = function() {

	var self = this;
	self.isInFuture = isInFuture;
	self.isDateInFuture = isDateInFuture;
	
	function isInFuture(now, tocheck) {
		return now < tocheck;
	}
	
	function isDateInFuture(tocheck) {
		return isInFuture(new Date(), tocheck);
	}
	
};
