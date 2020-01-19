/**
 * External dependencies
 */
const { find } = lodash;

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Toolbar } = wp.components;

let DEFAULT_WEIGHT_CONTROLS = [
	{
		icon: 'editor-bold',
		title: __( 'Light' ),
		weight: 'paperpress-has-text-weight-light',
	},
	{
		icon: 'editor-bold',
		title: __( 'Normal' ),
		weight: 'paperpress-has-text-weight-normal',
	},
	{
		icon: 'editor-bold',
		title: __( 'Medium' ),
		weight: 'paperpress-has-text-weight-medium',
    },
    {
		icon: 'editor-bold',
		title: __( 'Semibold' ),
		weight: 'paperpress-has-text-weight-semibold',
    },
    {
		icon: 'editor-bold',
		title: __( 'Bold' ),
		weight: 'paperpress-has-text-weight-bold',
    },
];

export function TextWeightToolbar( props ) {

	const {
		value,
        onChange,
		weightControls = DEFAULT_WEIGHT_CONTROLS,
		label = __( 'Change text weight' ),
		isCollapsed = true,
    } = props;

	function applyOrUnset( weight ) {
		return () => onChange( value === weight ? undefined : weight );
	}

	const activeWeight = find( weightControls, ( control ) => control.weight === value );

	return (
		<Toolbar
			isCollapsed={ isCollapsed }
			icon={ activeWeight ? activeWeight.icon : 'editor-bold' }
			label={ label }
			controls={ weightControls.map( ( control ) => {
				const { weight } = control;
				const isActive = ( value === weight );

				return {
					...control,
					isActive,
					role: isCollapsed ? 'menuitemradio' : undefined,
					onClick: applyOrUnset( weight ),
				};
			} ) }
		/>
	);
}

export default TextWeightToolbar;