Confluence.Blueprint.setWizard('infogate.plugins.confluence.blueprints.ig.blueprintplugin:create-by-spezinit-template', function(wizard) {
	wizard.on('submit.page1Id', function(e, state) {		
       // ----- SpezInit name -----
		var vSpezInitName = state.pageData.vSpezInitName;
		if (!vSpezInitName) {
			alert('Bitte tragen Sie den Namen des SpezInit ein.');
			return false;
		}
		// Use the spezInit name as the page title.
		state.wizardData.title = vSpezInitName;
		state.pageData.vSpezInitName = vSpezInitName.replace(new RegExp(" ", "g"),"_");
		
		// ----- Parameters -----
		// Get selected number of parameters.
		var parameters = state.pageData.vParameters;
		// Override parameters for use in template.
		state.pageData.vParameters = GetParameterTable(parameters);
    });
});
