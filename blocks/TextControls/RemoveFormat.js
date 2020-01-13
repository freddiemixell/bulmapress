const { createElement } = wp.element
const { registerFormatType } = wp.richText
const { InspectorControls } =  wp.blockEditor
const { PanelBody, Button } = wp.components
const { __ } = wp.i18n;

const type = 'paperblocks/remove-formatting'

registerFormatType(type, {
  title: 'Remove formatting',
  tagName: 'span',
  className: 'remove',
  edit ({ value, onChange }) {
    return (
      <InspectorControls>
        <PanelBody
          title={ __( 'Remove Formatting', 'paper-blocks' ) }
          initialOpen={false}
        >
          <Button
            isDefault={true}
            onClick={() => onChange({ ...value, formats: Array(value.formats.length) })}
          >
            Remove formatting
          </Button>
        </PanelBody>
      </InspectorControls>
    )
  }
})