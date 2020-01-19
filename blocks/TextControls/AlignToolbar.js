/**
 * External dependencies
 */
const { find } = lodash;

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Toolbar } = wp.components;

let DEFAULT_ALIGNMENT_CONTROLS = [
	{
		icon: 'editor-alignleft',
		title: __( 'Align text left' ),
		align: 'paperpress-has-text-left',
	},
	{
		icon: 'editor-aligncenter',
		title: __( 'Align text center' ),
		align: 'paperpress-has-text-centered',
	},
	{
		icon: 'editor-alignright',
		title: __( 'Align text right' ),
		align: 'paperpress-has-text-right',
    },
];

export function AlignToolbar( props ) {
    if ( props.withJustify ) {
        DEFAULT_ALIGNMENT_CONTROLS = [ ...DEFAULT_ALIGNMENT_CONTROLS, {
            icon: 'editor-justify',
            title: __( 'Align justify' ),
            align: 'paperpress-has-text-justified',
        } ]
    }

	const {
		value,
        onChange,
		alignmentControls = DEFAULT_ALIGNMENT_CONTROLS,
		label = __( 'Change text alignment' ),
		isCollapsed = true,
    } = props;

	function applyOrUnset( align ) {
		return () => onChange( value === align ? undefined : align );
	}

	const activeAlignment = find( alignmentControls, ( control ) => control.align === value );

	return (
		<Toolbar
			isCollapsed={ isCollapsed }
			icon={ activeAlignment ? activeAlignment.icon : 'editor-alignleft' }
			label={ label }
			controls={ alignmentControls.map( ( control ) => {
				const { align } = control;
				const isActive = ( value === align );

				return {
					...control,
					isActive,
					role: isCollapsed ? 'menuitemradio' : undefined,
					onClick: applyOrUnset( align ),
				};
			} ) }
		/>
	);
}

export default AlignToolbar;