function TheDate(){
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!
	var yyyy = today.getFullYear();
	var hours = today.getHours();
	var minutes = today.getMinutes();
	var seconds = today.getSeconds();

	if(dd<10) {
		dd='0'+dd
	} 
	if(mm<10) {
		mm='0'+mm
	}
	if(hours<10) {
		hours='0'+hours
	}
	if(minutes<10) {
		minutes='0'+minutes
	}
	if(seconds<10) {
		seconds='0'+seconds
	}

	today = mm+'/'+dd+'/'+yyyy+' ; '+hours+':'+minutes+':'+seconds;
	return today;
}


