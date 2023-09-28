import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Wrestic',
			logo: {
				src: './src/assets/wrestic.png',
				replacesTitle: false,
			},
			customCss: [
				'./src/styles/global.css',
			],
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'English',
					lang: 'en',
				},
				es: {
					label: 'Español',
					lang: 'es',
				}
			},
			social: {
				github: 'https://github.com/alvaro17f/wrestic',
			},
			sidebar: [
				{
					label: 'Get Started',
					translations: {
						es: 'Comienza aquí',
					},
					items: [
						{
							label: 'Install Wrestic',
							translations: {
								es: 'Instalación de Wrestic',
							},
							link: '/get-started/install',
						},
						{
							label: 'Configuration',
							translations: {
								es: 'Configuración',
							},
							link: '/get-started/configuration',
						},
					]
				},
				{
					label: 'Configuration Examples',
					translations: {
						es: 'Ejemplos de Configuración',
					},
					autogenerate: { directory: 'examples' },
				},
				{
					label: 'Reference',
					translations: {
						es: 'Referencia',
					},
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
