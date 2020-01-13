/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const {
  InspectorControls,
  ColorPalette,
  PanelColorSettings,
  ContrastChecker
} = wp.editor;

const {
  CheckboxControl,
  PanelBody,
  PanelRow,
  RadioControl,
  RangeControl,
  TextControl,
  TextareaControl,
  ToggleControl,
  SelectControl
} = wp.components;

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
        heroTextMod
      },
      setAttributes
    } = this.props;

    return (
      <InspectorControls>
        <PanelBody
          title={__("Hero Controls", "paper-blocks")}
          initialOpen={false}
        >
          <PanelRow>
            <RadioControl
              label={__("Hero Headline Size", "paper-blocks")}
              selected={heroTextMod}
              options={[
                { label: "Size 1", value: "is-size-1" },
                { label: "Size 2", value: "is-size-2" },
                { label: "Size 3", value: "is-size-3" },
                { label: "Size 4", value: "is-size-4" },
                { label: "Size 5", value: "is-size-5" },
                { label: "Size 6", value: "is-size-6" },
                { label: "Size 7", value: "is-size-7" },
              ]}
              onChange={heroTextMod => setAttributes({ heroTextMod })}
            />
          </PanelRow>
        </PanelBody>
      </InspectorControls>
    );
  }
}