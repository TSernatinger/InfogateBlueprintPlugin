Confluence.Blueprint.setWizard('infogate.plugins.confluence.blueprints.ig.blueprintplugin:create-by-form-template', function(wizard) {
	wizard.on('submit.page1Id', function(e, state) {   
        var vFormClass = state.pageData.vFormClass;
        if (!vFormClass) {
            alert('Bitte tragen Sie den Klassennamen des Forms ein.');
            return false;
        }
        
        state.wizardData.title = vFormClass;
    });
});