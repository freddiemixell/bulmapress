/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const {
  InspectorControls,
  ColorPalette,
} = wp.blockEditor;

const {
  PanelBody,
} = wp.components;

import HeadingToolbar from './HeadingToolbar';
import FontSizePicker from '../TextControls/FontSizePicker';
import TextTransform from '../TextControls/TextTransform';
import TextStyle from '../TextControls/TextStyle';

/**
 * Create an Inspector Controls wrapper Component
 */
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

                <p style={{paddingBottom: '13px'}}>{ __( 'Level' ) }</p>
                <HeadingToolbar isCollapsed={ false } minLevel={ 1 } maxLevel={ 7 } selectedLevel={ level } onChange={ ( newLevel ) => setAttributes( { level: newLevel } ) } />

                <div style={{marginBottom: '19.5px'}}>
                  <p>{ __( 'Color' ) }</p>
                  <ColorPalette
                      value={textColor}
                      onChange={textColor => {
                          setAttributes({ textColor });
                      }}
                  />
                </div>
                <FontSizePicker {...{ setAttributes, ...this.props }} />
                <TextTransform {...{ setAttributes, ...this.props }} />
                <TextStyle/>
        </PanelBody>
      </InspectorControls>
    );
  }
}