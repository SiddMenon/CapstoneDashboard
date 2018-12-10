function fetchData() {
	var text = "SAmple";
var jsonD = $.getJSON("response.json", function(json) {
	console.log(json);
	text = "<table><thead><tr class='table100-head'><th class='column1'>Topic</th><th class='column2'>Keywords</th><th class='column3'>Author Names</th></tr></thead><tbody>"
	console.log(json.data);
	for (x in json.data) {
		console.log(x);
		console.log(json.data[x].topic);
		text += "<tr><td class='column1'>" + json.data[x].topic + "</td><td class='column2' style='width: 400px'>" + json.data[x].keywords + "</td><td class='column3' style='width: 400px'>" + json.data[x].authors + "\n" + "</td></tr>";
	}
	text += "</tbody></table>"
	document.getElementById("table").innerHTML = text;
});
return text;
}