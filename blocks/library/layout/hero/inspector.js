const { __ } = wp.i18n;
const { Component } = wp.element;
const {  InspectorControls } = wp.blockEditor;
const {  PanelBody, PanelRow, SelectControl } = wp.components;

export default class Inspector extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
    const {
      attributes: {
        heroTextMod,
        heroTextAlign,
        heroSubTextAlign
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
          <PanelRow>
            <SelectControl
              label={__("Headline Alignment", "paper-blocks")}
              value={heroTextAlign}
              options={[
                { label: "None", value: "" },
                { label: "Center", value: "paperpress-has-text-centered" },
                { label: "Justified", value: "paperpress-has-text-justified" },
                { label: "Left", value: "paperpress-has-text-left" },
                { label: "Right", value: "paperpress-has-text-right" },
              ]}
              onChange={heroTextAlign => setAttributes({ heroTextAlign })}
            />
          </PanelRow>
          <PanelRow>
            <SelectControl
              label={__("Sub-headline Alignment", "paper-blocks")}
              value={heroSubTextAlign}
              options={[
                { label: "None", value: "" },
                { label: "Center", value: "paperpress-has-text-centered" },
                { label: "Justified", value: "paperpress-has-text-justified" },
                { label: "Left", value: "paperpress-has-text-left" },
                { label: "Right", value: "paperpress-has-text-right" },
              ]}
              onChange={heroSubTextAlign => setAttributes({ heroSubTextAlign })}
            />
          </PanelRow>
        </PanelBody>
      </InspectorControls>
    );
  }
}
