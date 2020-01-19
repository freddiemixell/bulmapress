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
} = wp.blockEditor;

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
            <SelectControl
              label={__("Headline Size", "paper-blocks")}
              value={heroTextMod}
              options={[
                { label: "None", value: "" },
                { label: "Size 1", value: "paperpress-is-size-1" },
                { label: "Size 2", value: "paperpress-is-size-2" },
                { label: "Size 3", value: "paperpress-is-size-3" },
                { label: "Size 4", value: "paperpress-is-size-4" },
                { label: "Size 5", value: "paperpress-is-size-5" },
                { label: "Size 6", value: "paperpress-is-size-6" },
                { label: "Size 7", value: "paperpress-is-size-7" },
              ]}
              onChange={heroTextMod => setAttributes({ heroTextMod })}
            />
          </PanelRow>
        </PanelBody>
      </InspectorControls>
    );
  }
}