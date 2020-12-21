var open = 0

function onClick(text) {
	if (open == 0) {
		var textLine = document.getElementById('detailLine');
		var button = document.getElementById("detailButton");
		textLine.innerHTML = text;
		button.innerHTML = "Згорнути";
		open = 1;
		document.getElementById("main_info2").style.height = "700px";

	} else {
		open = 0;
		var textLine = document.getElementById('detailLine');
		var button = document.getElementById("detailButton");
		textLine.innerHTML = "";
		document.getElementById("main_info2").style.height = "600px";
		button.innerHTML = "Детальніше";
	}

}