import PanelSection from '../components/panelsection';
import Picker from '../components/picker';

const { __ } = wp.i18n;

const options = [
    { label: __( 'None', 'paper-blocks' ), value: '' },
    { label: __( 'Small', 'paper-blocks' ), value: 'paperpress-is-small' },
    { label: __( 'Normal', 'paper-blocks' ), value: 'paperpress-is-normal' },
    { label: __( 'Medium', 'paper-blocks' ), value: 'paperpress-is-medium' },
    { label: __( 'Large', 'paper-blocks' ), value: 'paperpress-is-large' },
];

const ButtonSubset = ( { subset, setAttributes } ) => {
  return (
    <PanelSection label={ __( 'Subset', 'paper-blocks' ) }>
      <Picker
        options={ options }
        value={ subset }
        onChange={ subset => {
          setAttributes( { subset } );
        }}
      />
    </PanelSection>
  );
}

export default ButtonSubset;
