const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType( 'my-namescpae/my-jsx-block', {
	title: __( 'My JSX Block' ),
	icon: 'wordpress',
	category: 'common',
	edit() {
		return (
			<p>JSX Block.</p>
		);
	},
	save() {
		return (
			<p>JSX Block.</p>
		);
	},
} );