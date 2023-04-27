/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{ts,tsx}'],
	theme: {
		extend: {
			colors: {
				desaturatedRed: 'hsl(0, 36%, 70%)',
				softRed: 'hsl(0, 93%, 68%)',
				darkGrayishRed: 'hsl(0, 6%, 24%)'
			},
			backgroundImage: {
				gradientWhite:
					'linear-gradient(135deg, hsl(0, 0%, 100%), hsl(0, 100%, 98%))',
				gradientRed:
					'linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%))',
				gradientHover:
					'linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 80%, 86%))',
				pattern: 'url(./assets/images/bg-pattern-desktop.svg)'
			}
		}
	},
	plugins: []
}
