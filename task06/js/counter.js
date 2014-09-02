var Counter;

Counter = (function() {

	// private variable
	var value= 0;
	
	// public APIs
	return {
		get: function(){return value;},
		increment: function(){value++;},
		reset: function(){value=0;}
	}
}());