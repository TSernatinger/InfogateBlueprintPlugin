Confluence.Blueprint.setWizard('infogate.plugins.confluence.blueprints.ig.blueprintplugin:create-by-utility-template', function(wizard) {
	wizard.on('submit.page1Id', function(e, state) {
		// ----- Utility class -----
		var vUtilityClass = state.pageData.vUtilityClass;
		if (!vUtilityClass) {
			alert('Bitte tragen Sie den Klassenamen der Utility ein.');
			return false;
		}
		// Use the utility class name as the page title.
		state.wizardData.title = vUtilityClass;
		state.pageData.vUtilityClass = vUtilityClass.replace(" ","_");
		
		// ----- Requirements -----
		// Get selected number of requirements.
		var requirements = state.pageData.vRequirements;
		// Override requirements for use in template.
		state.pageData.vRequirements = GetRequirements(requirements);
    });
});
