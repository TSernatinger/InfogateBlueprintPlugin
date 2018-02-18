function GetRequirements(count) {
	var requirements = "";
	
	for (i = 1; i <= count; i += 1) {
		requirements += "<h2>Anforderung " + i + "</h2>";
		requirements += "<p><ac:placeholder>Beschreibung der " + i + ". Anforderung.</ac:placeholder></p>"
	}
	
	return requirements;
}
