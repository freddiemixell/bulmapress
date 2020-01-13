const { createElement } = wp.element
const { registerFormatType, applyFormat, removeFormat, getActiveFormat } = wp.richText
const { InspectorControls, PanelColorSettings } = wp.blockEditor;

[
  {
    name: 'color',
    title: 'Inline Text Colour'
  },
  {
    name: 'background-color',
    title: 'Inline Background Colour'
  }
].forEach(({ name, title }) => {
  const type = `paperblocks/${name}`

  registerFormatType(type, {
    title,
    tagName: 'span',
    className: name,
    attributes: {
      style: 'style'
    },
    edit ({ isActive, value, onChange }) {
      let activeColor

      if (isActive) {
        const activeFormat = getActiveFormat(value, type)
        const style = activeFormat.attributes.style

        activeColor = style.replace(new RegExp(`^${name}:\\s*`), '')
      }

      return (
        createElement(InspectorControls, null,
          createElement(PanelColorSettings, {
            title,
            initialOpen: true,
            colorSettings: [
              {
                value: activeColor,
                onChange: (color) => {
                  if (color) {
                    onChange(applyFormat(value, {
                      type,
                      attributes: {
                        style: `${name}:${color}`
                      }
                    }))
                    return
                  }

                  onChange(removeFormat(value, type))
                },
                label: 'Apply colour to the selected text.'
              }
            ]
          })
        )
      )
    }
  })
})