# Ecomog Project

This project is a TypeScript-based end-to-end testing framework using Playwright.

## Installation

Use npm to install the necessary packages.

```typescript
npm install
```

### Usage

You can use the playwrightframework package to write your test scripts, It has all information from
playwright package as well. There are already some pages written in the package, and you can import
them to write your test

For example:

```typescript
import { test, expect } from 'playwrightframework';
import { MyHome } from '../pages/MyHome.page';

test('test my page', async ({ page }) => {
	const myPage = new MyHome(page);

	myPage.openApp('/');

	await expect(myPage.homepageELement.headerLogoText).toBeVisible();
	await expect(myPage.homepageELement.signInText).toBeVisible();
});
```

## Package Extension

You can extends from the files from the package as well to suit your scripts and tests

Examples:

```typescript
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
```
