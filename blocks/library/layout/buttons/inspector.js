import ButtonsModifier from '../../../editor/buttoncontrols/buttonsmodifier';

const { __ } = wp.i18n;
const { InspectorControls } = wp.blockEditor;
const {  PanelBody } = wp.components;

const Inspector = ( props ) => {
  const { attributes: { buttonGroupMod }, setAttributes } = props;
  return (
    <InspectorControls>
      <PanelBody
        title={ __( 'Buttons Settings', 'paper-blocks' ) }
        initialOpen={true}
      >
        <ButtonsModifier
            setAttributes={ setAttributes }
            buttonGroupMod={ buttonGroupMod }
        />
      </PanelBody>
    </InspectorControls>
  );
}

export default Inspector;
