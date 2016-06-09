var Foolish = function() {
	
	var self = this;
	self.getIndex = _getIndex;
	self.getNextIndex = _getNextIndex;
	self.getPreviousIndex = _getPreviousIndex;
	self.isLast = _isLast;
	self.isFist = _isFist;
	
	function _isLast(array, element) {
		var lastIndex = array.length-1;
		var indexOfElement = array.indexOf(element);
		return indexOfElement === lastIndex;
	}
	
	 function _isFist(array, element) {
		var indexOfElement = array.indexOf(element);
		return indexOfElement === 0;
	}
		  
	function _getIndex(array, element) {
	  return array.indexOf(element);
	}
	
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
	}
	
			
	function _getPreviousIndex(array, element) {	
		var lastIndex = array.length-1;
		var indexOfElement = _getIndex(array, element);
		if(indexOfElement === -1) {
			return -1;
		}
		if(indexOfElement === 0) {
			return lastIndex;
		}
		var previousIndex = indexOfElement - 1;
		return previousIndex;
	}

};
