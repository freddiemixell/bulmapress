import HeadingToolbar from './HeadingToolbar';
import FontSizePicker from '../TextControls/FontSizePicker';
import TextTransform from '../TextControls/TextTransform';
import TextStyle from '../TextControls/TextStyle';
import TextColor from '../TextControls/TextColor';

const { __ } = wp.i18n;
const { Component } = wp.element;
const { InspectorControls } = wp.blockEditor;
const {  PanelBody } = wp.components;

export default class Inspector extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
    const {
      attributes: {
      level,
      textColor,
    },
      setAttributes
    } = this.props;

    return (
      <InspectorControls>
        <PanelBody
          title={__("Title Settings", "paper-blocks")}
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
          <FontSizePicker {...{ setAttributes, ...this.props }} />
          <TextTransform {...{ setAttributes, ...this.props }} />
          <TextStyle {...{ setAttributes, ...this.props }} />
        </PanelBody>
      </InspectorControls>
    );
  }
}