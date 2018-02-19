Confluence.Blueprint.setWizard('infogate.plugins.confluence.blueprints.ig.blueprintplugin:create-by-usercontrol-template', function(wizard) {
	wizard.on('submit.page1Id', function(e, state) {
		// ----- UserContol class -----
		var vUserControlClass = state.pageData.vUserControlClass;
		if (!vUserControlClass) {
			alert('Bitte tragen Sie den Klassennamen des UserControls ein.');
			return false;
		}
		// Use the usercontrol class name as the page title.
		state.wizardData.title = vUserControlClass;
		state.pageData.vUserControlClass = vUserControlClass.replace(new RegExp(" ", "g"),"_");
		
		// ----- Requirements -----
		// Get selected number of requirements.
		var requirements = state.pageData.vRequirements;
		// Override requirements for use in template.
		state.pageData.vRequirements = GetRequirements(requirements);
    });
});
