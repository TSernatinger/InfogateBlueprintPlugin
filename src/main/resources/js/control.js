Confluence.Blueprint.setWizard('infogate.plugins.confluence.blueprints.ig.blueprintplugin:create-by-control-template', function(wizard) {
	wizard.on('submit.page1Id', function(e, state) {
		// ----- Control class -----
		var vControlClass = state.pageData.vControlClass;
		if (!vControlClass) {
			alert('Bitte tragen Sie den Klassennamen des Controls ein.');
			return false;
		}
		// Use the control class name as the page title.
		state.wizardData.title = vControlClass;
		state.pageData.vControlClass = vControlClass.replace(new RegExp(" ", "g"),"_");
		
		// ----- Requirements -----
		// Get selected number of requirements.
		var requirements = state.pageData.vRequirements;
		// Override requirements for use in template.
		state.pageData.vRequirements = GetRequirements(requirements);
    });
});
