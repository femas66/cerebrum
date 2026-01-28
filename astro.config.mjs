// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://femasaf.my.id',
	integrations: [
		starlight({
			favicon: '/pus.ico',
			title: 'zylus',
			description: 'My personal website',
			tableOfContents: true,
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/femas66' }],
			head: [
				{
					tag: 'script',
					attrs: { type: 'application/ld+json' },
					content: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "WebSite",
						"name": "Zylus",
						"alternateName": ["Femas Akbar Faturrohim", "Xzylus"],
						"url": "https://femasaf.my.id/",
					})
				},
				{
					tag: 'script',
					attrs: { type: 'application/ld+json' },
					content: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "ItemList",
						"itemListElement": [
							{
								"@type": "SiteNavigationElement",
								"position": 1,
								"name": "Web Exploitation",
								"url": "https://femasaf.my.id/web-exploitations/sql-injection/"
							},
							{
								"@type": "SiteNavigationElement",
								"position": 2,
								"name": "File Upload",
								"url": "https://femasaf.my.id/file-upload/bypass-extension/"
							},
							{
								"@type": "SiteNavigationElement",
								"position": 3,
								"name": "Writeups",
								"url": "https://femasaf.my.id/writeups/"
							}
						]
					})
				}
			],
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
		sitemap(),
	],
});
