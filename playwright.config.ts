import {
	mergeConfig,
	defaultConfig,
	defineConfig,
	PlaywrightTestConfig,
} from 'playwrightframework';

const myConfig: PlaywrightTestConfig = {
	testDir: 'tests',
	use: {
		headless: false,
		viewport: { width: 1280, height: 720 },
		channel: 'chrome',
	},
	projects: [
		{
			name: 'desktop',
			use: { viewport: { width: 1280, height: 720 } },
		},
		{
			name: 'mobile',
			use: { viewport: { width: 375, height: 812 } },
		},
	],
	retries: 2,
	timeout: 30000,
	reporter: [
		['list'],
		['junit', { outputFile: 'test-results/junit.xml' }],
		['json', { outputFile: 'test-results/results.json' }],
	],
	workers: 2,
	webServer: {
		command: 'npm run start',
		port: 3000,
		reuseExistingServer: !process.env.CI,
	},
};

const config = mergeConfig(myConfig, defaultConfig);

export default defineConfig(config);
