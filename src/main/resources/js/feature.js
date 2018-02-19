Confluence.Blueprint.setWizard('infogate.plugins.confluence.blueprints.ig.blueprintplugin:create-by-feature-template', function(wizard) {
	wizard.on('submit.page1Id', function(e, state) {
       // ----- Feature name -----
       var vFeatureName = state.pageData.vFeatureName;
		if (!vFeatureName) {
			alert('Bitte tragen Sie den Namen des Features ein.');
			return false;
		}
		// Use the feature name as the page title.
		state.wizardData.title = vFeatureName;
		state.pageData.vFeatureName = vFeatureName.replace(new RegExp(" ", "g"),"_");
		
		// ----- Requirements -----
		// Get selected number of requirements.
		var requirements = state.pageData.vRequirements;
		// Override requirements for use in template.
		state.pageData.vRequirements = GetRequirements(requirements);
	});
});
