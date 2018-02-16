Confluence.Blueprint.setWizard('infogate.plugins.confluence.blueprints.ig.blueprintplugin:create-by-utility-template', function(wizard) {
	wizard.on('submit.page1Id', function(e, state) {   
        var vUtilityClass = state.pageData.vUtilityClass;
        if (!vUtilityClass) {
            alert('Bitte tragen Sie den Klassenamen der Utility ein.');
            return false;
        }
        
        state.wizardData.title = vUtilityClass;
    });
});
