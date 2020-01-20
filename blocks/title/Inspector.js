import HeadingToolbar from './HeadingToolbar';
import FontSizePicker from '../TextControls/FontSizePicker';
import TextTransform from '../TextControls/TextTransform';
import TextStyle from '../TextControls/TextStyle';
import TextColor from '../TextControls/TextColor';

const { __ } = wp.i18n;
const { InspectorControls } = wp.blockEditor;
const {  PanelBody } = wp.components;

const Inspector = ( props ) => {
  const { attributes: { level, textColor }, setAttributes } = props;
  return (
    <InspectorControls>
      <PanelBody
        title={ __( 'Title Settings', 'paper-blocks' ) }
        initialOpen={false}
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