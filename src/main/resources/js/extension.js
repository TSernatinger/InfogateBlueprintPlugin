Confluence.Blueprint.setWizard('infogate.plugins.confluence.blueprints.ig.blueprintplugin:create-by-extension-template', function(wizard) {
	wizard.on('submit.page1Id', function(e, state) {
       // ----- Extension class -----
		var vExtensionClass = state.pageData.vExtensionClass;
		if (!vExtensionClass) {
			alert('Bitte tragen Sie den Klassennamen der Extension ein.');
			return false;
		}
		// Use the form class name as the page title.
		state.wizardData.title = vExtensionClass;
		state.pageData.vExtensionClass = vExtensionClass.replace(new RegExp(" ", "g"),"_");
    });
});
