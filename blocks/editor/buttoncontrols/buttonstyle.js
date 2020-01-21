import PanelSection from '../components/panelsection';
import Picker from '../components/picker';

const { __ } = wp.i18n;
const { CheckboxControl } = wp.components;

const ButtonStyle = ( {
    setAttributes,
    attributes: {
        isPrimary, isOutlined, isInverted, isRounded
    },
} ) => {
    return (
        <PanelSection label={ __( 'Button Style', 'paper-blocks' ) }>
            <CheckboxControl
                label="Primary"
                checked={ ( typeof isPrimary !== 'undefined' && isPrimary === 'paperpress-is-primary' ) }
                onChange={ checked => { setAttributes( { isPrimary: checked ? 'paperpress-is-primary' : '' } ) } }
            />
            <CheckboxControl
                label="Outlined"
                checked={ ( typeof isOutlined !== 'undefined' && isOutlined === 'paperpress-is-outlined' ) }
                onChange={ checked => { setAttributes( { isOutlined: checked ? 'paperpress-is-outlined' : '' } ) } }
            />
            <CheckboxControl
                label="Inverted"
                checked={ ( typeof isInverted !== 'undefined' && isInverted === 'paperpress-is-inverted' ) }
                onChange={ checked => { setAttributes( { isInverted: checked ? 'paperpress-is-inverted' : '' } ) } }
            />
            <CheckboxControl
                label="Rounded"
                checked={ ( typeof isRounded !== 'undefined' && isRounded === 'paperpress-is-rounded' ) }
                onChange={ checked => { setAttributes( { isRounded: checked ? 'paperpress-is-rounded' : '' } ) } }
            />
        </PanelSection>
    )
}

export default ButtonStyle;
