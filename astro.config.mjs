import { defineConfig } from 'astro/config';
import unocss from 'unocss/astro';
import image from '@astrojs/image';
import { unocssConfig } from './uno.config.js';


export default defineConfig({
	output: 'server',
	integrations: [
		unocss(unocssConfig),
		image()
	],
	vite: {}
});
