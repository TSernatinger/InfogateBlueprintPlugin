package infogate.plugins.confluence.blueprints.listener;

import java.util.Arrays;
import java.util.HashSet;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;
import javax.inject.Inject;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import com.atlassian.confluence.labels.Label;
import com.atlassian.confluence.labels.LabelManager;
import com.atlassian.confluence.labels.Labelable;
import com.atlassian.confluence.pages.Page;
import com.atlassian.confluence.plugins.createcontent.api.events.BlueprintPageCreateEvent;
import com.atlassian.confluence.plugins.createcontent.impl.ContentBlueprint;
import com.atlassian.event.api.EventListener;
import com.atlassian.event.api.EventPublisher;
import com.atlassian.plugin.spring.scanner.annotation.imports.ComponentImport;

@Component
public class MyBlueprintListener {
	// Keys
	protected static final String pluginKey = "infogate.plugins.confluence.blueprints.ig.blueprintplugin";
	private static final HashSet<String> keys = new HashSet<String>(
		Arrays.asList(
			pluginKey + ":" + "form-blueprint",
			pluginKey + ":" + "usercontrol-blueprint",
			pluginKey + ":" + "feature-blueprint",
			pluginKey + ":" + "utility-blueprint"
		)
	);

	// Logger
	private static final Logger log = LoggerFactory.getLogger(MyBlueprintListener.class);

	@ComponentImport
	private EventPublisher eventPublisher;

	@ComponentImport
	private LabelManager labelManager;

	@Inject
	public MyBlueprintListener(EventPublisher eventPublisher, LabelManager labelManager) {
		this.eventPublisher = eventPublisher;
		this.labelManager = labelManager;
	}

    @PostConstruct
    public void init() {
        // Called after the instance is created (when the plugin is started)
    	//log.warn("init(): register " + this);
        eventPublisher.register(this);
    }

    @PreDestroy
    public void destroy() {
        // Called just before the instance is destroyed (when the plugin is stopped)
    	//log.warn("Destroy(): unregister " + this);
        eventPublisher.unregister(this);
    }

	@EventListener
	public void onBlueprintCreateEvent(BlueprintPageCreateEvent event) {
		ContentBlueprint blueprint = event.getBlueprint();
		String moduleCompleteKey = blueprint.getModuleCompleteKey();
		//log.warn("moduleCompleteKey: " + moduleCompleteKey);

		if (keys.contains(moduleCompleteKey)) {
			Page page = event.getPage();
			
			// Add page title as label. DEPRECATED
			//String title = page.getTitle().replace(' ', '_');
			//labelManager.addLabel((Labelable) page, new Label(title));
			//log.warn("Add label: " + title);
			
			// Add project as label
			Object vProject = event.getContext().get("vProject");
			labelManager.addLabel((Labelable) page, new Label((String)vProject));
			//log.warn("Add label: " + vProject);
		}
	}
}
