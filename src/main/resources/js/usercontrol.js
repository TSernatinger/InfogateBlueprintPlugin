Confluence.Blueprint.setWizard('infogate.plugins.confluence.blueprints.ig.blueprintplugin:create-by-usercontrol-template', function(wizard) {
	wizard.on('submit.page1Id', function(e, state) {   
        var vUserControlClass = state.pageData.vUserControlClass;
        if (!vUserControlClass) {
            alert('Bitte tragen Sie den Klassennamen des UserControls ein.');
            return false;
        }
        
        state.wizardData.title = vUserControlClass;
    });
});