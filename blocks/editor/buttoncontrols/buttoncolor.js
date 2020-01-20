import PanelSection from '../components/panelsection';

const { ColorPalette } = wp.blockEditor;
const { __ } = wp.i18n;

const ButtonColor = ( { buttonColor, setAttributes } ) => {
  return (
    <PanelSection label={ __( 'Button Color', 'paper-blocks' ) }>
      <ColorPalette
        value={ buttonColor }
        onChange={ buttonColor => {
          setAttributes( { buttonColor } );
        }}
      />
    </PanelSection>
  );
}

export default ButtonColor;
