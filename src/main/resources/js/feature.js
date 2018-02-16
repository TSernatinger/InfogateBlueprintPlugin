Confluence.Blueprint.setWizard('infogate.plugins.confluence.blueprints.ig.blueprintplugin:create-by-feature-template', function(wizard) {
	wizard.on('submit.page1Id', function(e, state) {   
        var vFeatureName = state.pageData.vFeatureName;
        if (!vFeatureName) {
            alert('Bitte tragen Sie den Namen des Features ein.');
            return false;
        }
        
        state.wizardData.title = vFeatureName;
    });
});
