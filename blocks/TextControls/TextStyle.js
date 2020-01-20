const { PanelRow, IconButton } = wp.components;
const { __ } = wp.i18n;

const TextStyle = () => {
    return (
        <div className="components-toolbar">
                <IconButton
                    icon='editor-italic'
                    label='italic'
                />
        </div>
    )
}

export default TextStyle;
