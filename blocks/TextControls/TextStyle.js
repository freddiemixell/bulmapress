const { Button } = wp.components;
const { __ } = wp.i18n;

const TextStyle = ( {
    setAttributes,
    attributes: {
        italic
    },
} ) => {
    return (
        <div style={{marginBottom: '19.5px'}}>
            <p style={{paddingBottom: '13px'}}>{ __( 'Text Style' ) }</p>
            <div className="components-toolbar">
                <Button
                    icon='editor-italic'
                    label='italic'
                    className="components-toolbar__control"
                    isPressed={italic === 'paperpress-is-italic'}
                    onClick={() => {
                        setAttributes({italic: italic !== 'paperpress-is-italic' ? 'paperpress-is-italic' : ''})
                    }}
                />
            </div>
        </div>
    )
}

export default TextStyle;
