import PanelSection from '../components/panelsection';
import Picker from '../components/picker';

const { __ } = wp.i18n;

const options = [
    { label: __( 'None', 'paper-blocks' ), value: '' },
    { label: __( 'Small', 'paper-blocks' ), value: 'paperpress-are-small' },
    { label: __( 'Medium', 'paper-blocks' ), value: 'paperpress-are-medium' },
    { label: __( 'Large', 'paper-blocks' ), value: 'paperpress-are-large' },
];

const ButtonModifier = ( { buttonGroupMod, setAttributes } ) => {
  return (
    <PanelSection label={ __( 'Buttons Size', 'paper-blocks' ) }>
      <Picker
        options={ options }
        value={ buttonGroupMod }
        onChange={ buttonGroupMod => {
          setAttributes( { buttonGroupMod } );
        }}
      />
    </PanelSection>
  );
}

export default ButtonModifier;
