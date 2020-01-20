import HeadingToolbar from './headingtoolbar';
import FontSizePicker from '../../../editor/textcontrols/textsize';
import TextTransform from '../../../editor/textcontrols/texttransform';
import TextStyle from '../../../editor/textcontrols/textstyle';
import TextColor from '../../../editor/textcontrols/textcolor';

const { __ } = wp.i18n;
const { InspectorControls } = wp.blockEditor;
const {  PanelBody } = wp.components;

const Inspector = ( props ) => {
  const { attributes: { level, textColor }, setAttributes } = props;
  return (
    <InspectorControls>
      <PanelBody
        title={ __( 'Title Settings', 'paper-blocks' ) }
        initialOpen={true}
      >
        <HeadingToolbar
          isCollapsed={ false }
          minLevel={ 1 }
          maxLevel={ 7 }
          selectedLevel={ level }
          onChange={ ( newLevel ) => setAttributes( { level: newLevel } ) }
        />
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
