import { test, expect } from 'playwrightframework';
import { MyHome } from '../pages/MyHome.page';

test('test my page', async ({ page }) => {
	const myPage = new MyHome(page);

	myPage.openApp('/');

	await expect(myPage.homepageELement.headerLogoText).toBeVisible();
	await expect(myPage.homepageELement.signInText).toBeVisible();
});
