/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const {
  InspectorControls,
} = wp.blockEditor;

const {
  PanelBody,
} = wp.components;

import HeadingToolbar from './HeadingToolbar';

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
      },
      setAttributes
    } = this.props;

    return (
      <InspectorControls>
        <PanelBody
          title={__("Title Settings", "paper-blocks")}
          initialOpen={false}
        >
            <p>{ __( 'Level' ) }</p>
            <HeadingToolbar isCollapsed={ false } minLevel={ 1 } maxLevel={ 7 } selectedLevel={ level } onChange={ ( newLevel ) => setAttributes( { level: newLevel } ) } />
        </PanelBody>
      </InspectorControls>
    );
  }
}