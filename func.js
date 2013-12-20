
function w(msg){
    document.write(msg);
}

function testData(){
	try {
		document.write("<pre>");

		w("start");
	} catch (e) {
		document.write("Exception: " + e);
	}
}