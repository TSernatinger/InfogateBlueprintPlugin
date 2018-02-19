Confluence.Blueprint.setWizard('infogate.plugins.confluence.blueprints.ig.blueprintplugin:create-by-form-template', function(wizard) {
	wizard.on('submit.page1Id', function(e, state) {
       // ----- Form class -----
		var vFormClass = state.pageData.vFormClass;
		if (!vFormClass) {
			alert('Bitte tragen Sie den Klassennamen des Forms ein.');
			return false;
		}
		// Use the form class name as the page title.
		state.wizardData.title = vFormClass;
		state.pageData.vFormClass = vFormClass.replace(new RegExp(" ", "g"),"_");
		
		// ----- Requirements -----
		// Get selected number of requirements.
		var requirements = state.pageData.vRequirements;
		// Override requirements for use in template.
		state.pageData.vRequirements = GetRequirements(requirements);
    });
});
