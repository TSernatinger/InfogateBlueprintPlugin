Confluence.Blueprint.setWizard('infogate.plugins.confluence.blueprints.ig.blueprintplugin:create-by-utility-template', function(wizard) {
	wizard.on('submit.page1Id', function(e, state) {   
        var vUtilityName = state.pageData.vUtilityName;
        if (!vUtilityName) {
            alert('Bitte tragen Sie den Namen der Utility ein.');
            return false;
        }
        
        state.wizardData.title = vUtilityName;
    });
});