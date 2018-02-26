Confluence.Blueprint.setWizard('infogate.plugins.confluence.blueprints.ig.blueprintplugin:create-by-class-template', function(wizard) {
	wizard.on('submit.page1Id', function(e, state) {
       // ----- Class name -----
		var vClassName = state.pageData.vClassName;
		if (!vClassName) {
			alert('Bitte tragen Sie den Namen der Klasse ein.');
			return false;
		}
		// Use the class name as the page title.
		state.wizardData.title = vClassName;
		state.pageData.vClassName = vClassName.replace(new RegExp(" ", "g"),"_");
    });
});
