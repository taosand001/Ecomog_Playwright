import { Home, Locator, Page } from 'playwrightframework';

export class MyHome extends Home {
	page: Page;

	constructor(page: Page) {
		super(page);
		this.page = page;
	}

	async doubleClickElement(element: Locator): Promise<void> {
		await element.dblclick();
	}

	async selectOption(element: Locator, value: string): Promise<void> {
		await element.selectOption({ value });
	}
}
