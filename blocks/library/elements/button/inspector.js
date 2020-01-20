import FontSizePicker from '../../../editor/textcontrols/textsize';
import TextTransform from '../../../editor/textcontrols/texttransform';
import TextColor from '../../../editor/textcontrols/textcolor';
import ButtonColor from '../../../editor/buttoncontrols/buttoncolor';

const { __ } = wp.i18n;
const { InspectorControls } = wp.blockEditor;
const {  PanelBody } = wp.components;

const Inspector = ( props ) => {
  const { attributes: { textColor, buttonColor }, setAttributes } = props;
  return (
    <InspectorControls>
      <PanelBody
        title={ __( 'Button Settings', 'paper-blocks' ) }
        initialOpen={false}
      >
        <TextColor
          setAttributes={ setAttributes }
          textColor={ textColor }
        />
        <ButtonColor
          setAttributes={ setAttributes }
          buttonColor={ buttonColor }
        />
        <FontSizePicker {...{ setAttributes, ...props }} />
        <TextTransform {...{ setAttributes, ...props }} />
      </PanelBody>
    </InspectorControls>
  );
}

export default Inspector;
