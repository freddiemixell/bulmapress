import PanelSection from '../Controls/PanelSection';

const { ColorPalette } = wp.blockEditor;
const { __ } = wp.i18n;

const TextColor = ( { textColor, setAttributes } ) => {
  return (
    <PanelSection label={ __( 'Color', 'paper-blocks' ) }>
      <ColorPalette
        value={textColor}
        onChange={textColor => {
          setAttributes({ textColor });
        }}
      />
    </PanelSection>
  );
}

export default TextColor;
