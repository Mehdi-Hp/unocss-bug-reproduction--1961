import transformerDirective from '@unocss/transformer-directives';
import { defineConfig } from 'unocss';


function flexifyLayoutValue(value) {
	if (value === 'start' || value === 'end') {
		return `flex-${value}`;
	}

	return value;
}


export const unocssConfig = defineConfig({
	presets: [],
	transformers: [
		transformerDirective()
	],
	postprocess(t) {
		t.selector = `${t.selector}${t.selector}${t.selector}${t.selector}`;
		return t;
	},
	rules: [
		[
			/^\/m:([\d.]+)$/,
			(match) => ({ 'margin': `${match[1] / 2}rem` })
		],
		[
			/^\/mt:([\d.]+)$/,
			(match) => ({ 'margin-top': `${match[1] / 2}rem` })
		],
		[
			/^\/mr:([\d.]+)$/,
			(match) => ({ 'margin-right': `${match[1] / 2}rem` })
		],
		[
			/^\/mb:([\d.]+)$/,
			(match) => ({ 'margin-bottom': `${match[1] / 2}rem` })
		],
		[
			/^\/ml:([\d.]+)$/,
			(match) => ({ 'margin-left': `${match[1] / 2}rem` })
		],
		[
			/^\/mx:([\d.]+)$/,
			(match) => ({ 'margin-left': `${match[1] / 2}rem`, 'margin-right': `${match[1] / 2}rem` })
		],
		[
			/^\/my:([\d.]+)$/,
			(match) => ({ 'margin-top': `${match[1] / 2}rem`, 'margin-bottom': `${match[1] / 2}rem` })
		],
		[
			/^\/p:([\d.]+)$/,
			(match) => ({ 'padding': `${match[1] / 2}rem` })
		],
		[
			/^\/pt:([\d.]+)$/,
			(match) => ({ 'padding-top': `${match[1] / 2}rem` })
		],
		[
			/^\/pr:([\d.]+)$/,
			(match) => ({ 'padding-right': `${match[1] / 2}rem` })
		],
		[
			/^\/pb:([\d.]+)$/,
			(match) => ({ 'padding-bottom': `${match[1] / 2}rem` })
		],
		[
			/^\/pl:([\d.]+)$/,
			(match) => ({ 'padding-left': `${match[1] / 2}rem` })
		],
		[
			/^\/px:([\d.]+)$/,
			(match) => ({ 'padding-left': `${match[1] / 2}rem`, 'padding-right': `${match[1] / 2}rem` })
		],
		[
			/^\/py:([\d.]+)$/,
			(match) => ({ 'padding-top': `${match[1] / 2}rem`, 'padding-bottom': `${match[1] / 2}rem` })
		],
		[
			/^\/w:([\d.]+)$/,
			(match) => ({ 'width': `${match[1] / 2}rem` })
		],
		[
			/^\/w:full$/,
			() => ({ 'width': '100%' })
		],
		[
			/^\/h:([\d.]+)$/,
			(match) => ({ 'height': `${match[1] / 2}rem` })
		],
		[
			/^\/h:full$/,
			() => ({ 'height': '100%' })
		],
		[
			/^\/color:([\w-]+)$/,
			(match) => ({ 'color': `var(--${match[1]})` })
		],
		[
			/^\/flex:(?<direction>row|column)?\/?(x:(?<x>\w+))?\/?(y:(?<y>\w+))?/,
			(match) => {
				const classes = { 'display': 'flex' };
				if (match.groups.direction) {
					classes['flex-direction'] = match.groups.direction;
				}

				if (match.groups.x) {
					if (match.groups.direction === 'column') {
						classes['align-items'] = flexifyLayoutValue(match.groups.x);
					} else {
						classes['justify-content'] = flexifyLayoutValue(match.groups.x);
					}
				}

				if (match.groups.y) {
					if (match.groups.direction === 'column') {
						classes['justify-content'] = flexifyLayoutValue(match.groups.y);
					} else {
						classes['align-items'] = flexifyLayoutValue(match.groups.y);
					}
				}

				return classes;
			}
		],
		[
			/^\/shrink:([\d.]+)/,
			(match) => ({ 'flex-shrink': match[1] })
		],
		[
			/^\/grow:([\d.]+)/,
			(match) => ({ 'flex-grow': match[1] })
		],
		[
			/^\/gap:([\d.]+)$/,
			(match) => ({ 'gap': `${match[1] / 2}rem` })
		],
		[
			/^\/gap-x:([\d.]+)$/,
			(match) => ({ 'column-gap': `${match[1] / 2}rem` })
		],
		[
			/^\/gap-y:([\d.]+)$/,
			(match) => ({ 'row-gap': `${match[1] / 2}rem` })
		],
		[
			'/type:uppercase', {
				'text-transform': 'uppercase'
			}
		],
		[
			'/type:lowercase', {
				'text-transform': 'lowercase'
			}
		],
		[
			'/type:mono-title-large', {
				'font-family': 'var(--text-font-family-mono)',
				'font-size': '4rem',
				'font-weight': '400',
				'line-height': '1',
				'letter-spacing': '-4px'
			}
		],
		[
			'/type:sans-title-thin', {
				'font-family': 'var(--text-font-family-sans)',
				'font-size': '3rem',
				'font-weight': '200',
				'line-height': '1'
			}
		]
	]
});
