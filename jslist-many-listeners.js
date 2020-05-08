//jslist-many-listeners.js
document.addEventListener( "DOMContentLoaded", function (ev) {
	//Find all elements with 'jugular'
	var list = document.querySelectorAll( "li.jugular" );
	//add a listener
	for ( var l in list ) {
		console.log( l );
	}
	//somehow record the time
} );
