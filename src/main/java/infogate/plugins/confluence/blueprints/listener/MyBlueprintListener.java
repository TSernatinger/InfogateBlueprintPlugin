package infogate.plugins.confluence.blueprints.listener;

import com.atlassian.confluence.plugins.createcontent.api.events.BlueprintPageCreateEvent;
import com.atlassian.confluence.plugins.createcontent.impl.ContentBlueprint;
import com.atlassian.event.api.EventListener;
import com.atlassian.event.api.EventPublisher;
import com.atlassian.plugin.ModuleCompleteKey;
import com.atlassian.plugin.spring.scanner.annotation.imports.ComponentImport;

import javax.inject.Inject;

import org.springframework.stereotype.Component;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Component
public class MyBlueprintListener {
	private static final String pluginKey = "com.example.plugins.tutorial.confluence.simplebp.simplebp";
	private static final String moduleKey = "my-blueprint";
	private static final ModuleCompleteKey MY_BLUEPRINT_KEY = new ModuleCompleteKey(pluginKey, moduleKey);
	private static final Logger log = LoggerFactory.getLogger(MyBlueprintListener.class);

	@Inject
	public MyBlueprintListener(@ComponentImport EventPublisher eventPublisher) {
        eventPublisher.register(this); //demonstration only
	}

	@EventListener
	public void onBlueprintCreateEvent(BlueprintPageCreateEvent event){
		ContentBlueprint blueprint = event.getBlueprint();
		String moduleCompleteKey = blueprint.getModuleCompleteKey();
        log.warn("moduleCompleteKey: " + moduleCompleteKey);

	    if (MY_BLUEPRINT_KEY.equals(moduleCompleteKey)){
            //Take some action when 
            log.warn("WARN: Created a blueprint.");
	    }
	}
}
