import FontSizePicker from '../../../editor/textcontrols/textsize';
import TextTransform from '../../../editor/textcontrols/texttransform';
import TextStyle from '../../../editor/textcontrols/textstyle';
import TextColor from '../../../editor/textcontrols/textcolor';

const { __ } = wp.i18n;
const { InspectorControls } = wp.blockEditor;
const {  PanelBody } = wp.components;

const Inspector = ( props ) => {
  const { attributes: { textColor }, setAttributes } = props;
  return (
    <InspectorControls>
      <PanelBody
        title={ __( 'Subtitle Settings', 'paper-blocks' ) }
        initialOpen={true}
      >
        <TextColor
          setAttributes={ setAttributes }
          textColor={ textColor }
        />
        <FontSizePicker {...{ setAttributes, ...props }} />
        <TextTransform {...{ setAttributes, ...props }} />
        <TextStyle {...{ setAttributes, ...props }} />
      </PanelBody>
    </InspectorControls>
  );
}

export default Inspector;
