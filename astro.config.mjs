// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			favicon: '/pus.ico',
			title: 'zylus',
			description: 'My personal website',
			tableOfContents: true,
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/femas66' }],
			sidebar: [
				{
					slug: 'index',
					label: 'Who Is',
				},
				{
					label: 'Web Exploitation',
					autogenerate: { directory: 'web-exploitations' },
					// items: [
					// 	// Each item here is one entry in the navigation menu.
					// 	{ label: 'Example Guide', slug: 'guides/example',  },
					// ],
				},
				// {
				// 	label: 'Reference',
				// 	autogenerate: { directory: 'reference' },
				// },
			],
		}),
	],
});
