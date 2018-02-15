package infogate.plugins.confluence.blueprints.contextprovider;

import com.atlassian.confluence.labels.Label;
import com.atlassian.confluence.labels.LabelManager;
import com.atlassian.confluence.labels.Labelable;
import com.atlassian.confluence.pages.Page;
import com.atlassian.confluence.pages.PageManager;
import com.atlassian.confluence.plugins.createcontent.api.contextproviders.AbstractBlueprintContextProvider;
import com.atlassian.confluence.plugins.createcontent.api.contextproviders.BlueprintContext;

public class MyContextProvider extends AbstractBlueprintContextProvider {
	private PageManager pageManager;
	private LabelManager labelManager;

	public MyContextProvider(PageManager pageManager, LabelManager labelManager) {
		this.pageManager = pageManager;
		this.labelManager = labelManager;
	}

	@Override
	protected BlueprintContext updateBlueprintContext(BlueprintContext blueprintContext) {
		// blueprintContext.put("vName", "Sherlock");
		Page page = pageManager.getPage("", "");
		labelManager.addLabel((Labelable) page, new Label("My test lable"));
		return blueprintContext;
	}
}
