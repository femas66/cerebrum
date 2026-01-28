---
title: Welcome to Zylus
description: Personal website of Femas Akbar Faturrohim - Cybersecurity Enthusiast & CTF Player.
template: splash
hero:
  tagline: Cybersecurity Enthusiast & CTF Player. Exploring the depths of web security and beyond.
  image:
    file: ../../assets/houston.webp
  actions:
    - text: Explore Writeups
      link: /writeups/
      icon: right-arrow
      variant: primary
    - text: Web Exploitation
      link: /web-exploitations/sql-injection/
      icon: external
---

import { Card, CardGrid } from '@astrojs/starlight/components';

## Main Categories

<CardGrid stagger>
	<Card title="Web Exploitation" icon="setting">
		Documentation about various web vulnerabilities like SQLi, XSS, and SSTI.
		[Learn more](/web-exploitations/sql-injection/)
	</Card>
	<Card title="File Upload" icon="add-document">
		Techniques and bypasses for file upload vulnerabilities.
		[Explore](/file-upload/bypass-extension/)
	</Card>
	<Card title="CTF Writeups" icon="open-book">
		Detailed solutions for Hack The Box, TryHackMe, and other CTF platforms.
		[Read writeups](/writeups/)
	</Card>
	<Card title="Who Am I?" icon="information">
		More about Femas Akbar Faturrohim and my journey in cybersecurity.
		[About me](/)
	</Card>
</CardGrid>
