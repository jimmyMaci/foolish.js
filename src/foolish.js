var Foolish = function() {
	
	var self = this;
	self.getIndex = _getIndex;
	self.getNextIndex = _getNextIndex;
	self.getPreviousIndex = _getPreviousIndex;
	self.getNextIndexes = _getNextIndexes;
	self.getPreviousIndexes = _getPreviousIndexes;
	self.isLast = _isLast;
	self.isFirst = _isFirst;
	
	function _isLast(array, element) {
		var lastIndex = array.length-1;
		var indexOfElement = array.indexOf(element);
		return indexOfElement === lastIndex;
	}
	
	 function _isFirst(array, element) {
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
	
		
	function _getNextIndexes(array, element, count) {	
		var nextIndexes = [];
		var currentElement = element;
		for(i = 0; i < count; i++) {
			var nextIndex = _getNextIndex(array, currentElement);
			nextIndexes.push(nextIndex);
			currentElement = array[nextIndex];
		}
		return nextIndexes;
	}
	
	function _getPreviousIndexes(array, element, count) {	
		var previousIndexes = [];
		var currentElement = element;
		for(i = 0; i < count; i++) {
			var previousIndex = _getPreviousIndex(array, currentElement);
			previousIndexes.push(previousIndex);
			currentElement = array[previousIndex];
		}
		return previousIndexes;
	}

};
