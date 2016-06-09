var Foolish = function() {
	
	var self = this;
	self.getNextIndex = _getNextIndex;
	self.getIndex = _getIndex;
	
	function _getNextIndex(array, element) {	
		var lastIndex = array.length-1;
		var indexOfElement = array.indexOf(element);
		if(indexOfElement === -1) {
			return -1;
		}
		if(indexOfElement === lastIndex) {
			return 0;
		}
		var nextIndex = indexOfElement + 1;
		return nextIndex;
	};
	
	  
	  function _getIndex(array, element) {
	  	return array.indexOf(element);
	  };
	
	
};
