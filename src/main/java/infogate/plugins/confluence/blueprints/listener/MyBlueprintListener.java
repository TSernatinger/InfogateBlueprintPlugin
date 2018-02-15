package infogate.plugins.confluence.blueprints.listener;

import java.util.Arrays;
import java.util.HashSet;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
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
			pluginKey + ":" + "my-blueprint",
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

	@Autowired
	public MyBlueprintListener(EventPublisher eventPublisher, LabelManager labelManager) {
		this.eventPublisher = eventPublisher;
		eventPublisher.register(this);
		this.labelManager = labelManager;
	}

	@EventListener
	public void onBlueprintCreateEvent(BlueprintPageCreateEvent event) {
		ContentBlueprint blueprint = event.getBlueprint();
		String moduleCompleteKey = blueprint.getModuleCompleteKey();
		//log.warn("moduleCompleteKey: " + moduleCompleteKey);

		if (keys.contains(moduleCompleteKey)) {
			Page page = event.getPage();
			//log.warn("Add label: " + page.getTitle());
			labelManager.addLabel((Labelable) page, new Label(page.getTitle()));
		}
	}
}
