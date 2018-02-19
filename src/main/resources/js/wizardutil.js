function GetRequirements(count) {
	var requirements = "";
	
	for (i = 1; i <= count; i += 1) {
		requirements += "<h2>Anforderung " + i + "</h2>";
		requirements += "<p><ac:placeholder>Beschreibung der " + i + ". Anforderung.</ac:placeholder></p>"
	}
	
	return requirements;
}

function GetParameterTable(count) {
	var table = "<table class=\x22wrapped\x22><tbody>";
	table += "<tr><th>Parameter</th><th>Beschreibung</th><th>Erlaubte Werte</th></tr>";
	
	for (i = 0; i < count; i += 1) {
		table += "<tr><td></td><td></td><td></td></tr>";
	}
	
	table += "</tbody></table>";
	return table;
}
