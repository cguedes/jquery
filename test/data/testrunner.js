jQuery.noConflict(); // Allow the test to run with other libs or jQuery's.

// load testswarm agent
(function() {
	var url = window.location.search;
	url = decodeURIComponent( url.slice( url.indexOf("swarmURL=") + 9 ) );
	if ( !url || url.indexOf("http") !== 0 ) {
		return;
	}
	document.write("<scr" + "ipt src='http://testswarm.com/js/inject.js?" + (new Date).getTime() + "'></scr" + "ipt>");
})();
