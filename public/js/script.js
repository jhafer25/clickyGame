$(document).ready(function() {
	var currentDate = new Date();
	var currentYear = currentDate.getFullYear();
	updateCurrentYear = function(){
		$('span#currentYear').html(`${currentYear} JAMES HAFER. ALL RIGHTS RESERVED.`);
	}
	updateCurrentYear();
});