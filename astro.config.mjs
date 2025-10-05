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
					link: '/',
					label: 'Who Is',
				},
				{
					slug: 'writeups',
					label: 'Writeups',
				},
				{
					label: 'Web Exploitation',
					autogenerate: { directory: 'web-exploitations' },
				},
				{
					label: 'File Upload',
					autogenerate: { directory: 'file-upload' },
				},
				// {
				// 	slug: 'writeups/index',
				// 	label: 'Writeups',
				// },
				// {
				// 	label: 'Writeups',
				// 	items: [
				// 		{
				// 			label: 'Hack The Box',
				// 			items: [
				// 				{ label: 'HTB', slug: 'writeups/hackthebox' },
				// 				{ label: 'THM', slug: 'writeups/tryhackme' },
				// 			]
				// 		}
				// 	]
				// },
			],
		}),
	],
});
