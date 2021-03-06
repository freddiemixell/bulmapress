import PanelSection from '../components/panelsection';
import ControlGroup from '../components/controlgroup';

const { Button } = wp.components;
const { __ } = wp.i18n;

const TextStyle = ( {
    setAttributes,
    attributes: {
        italic,
        weight,
        alignment,
    },
} ) => {
    return (
        <PanelSection label={ __( 'Text Style', 'paper-blocks' ) }>
            <ControlGroup>
                <Button
                    icon='editor-italic'
                    label='italic'
                    className="components-toolbar__control"
                    isPressed={italic === 'paperpress-is-italic'}
                    onClick={() => {
                        setAttributes({italic: italic !== 'paperpress-is-italic' ? 'paperpress-is-italic' : ''})
                    }}
                />
                <Button
                    icon='editor-bold'
                    label='bold'
                    className="components-toolbar__control"
                    isPressed={weight === 'paperpress-has-text-weight-bold'}
                    onClick={() => {
                        setAttributes({weight: weight !== 'paperpress-has-text-weight-bold' ? 'paperpress-has-text-weight-bold' : ''})
                    }}
                />
                <Button
                    icon='editor-alignleft'
                    label='left align'
                    className="components-toolbar__control"
                    isPressed={alignment === 'paperpress-has-text-left'}
                    onClick={() => {
                        setAttributes({alignment: alignment !== 'paperpress-has-text-left' ? 'paperpress-has-text-left' : ''})
                    }}
                />
                <Button
                    icon='editor-aligncenter'
                    label='center align'
                    className="components-toolbar__control"
                    isPressed={alignment === 'paperpress-has-text-centered'}
                    onClick={() => {
                        setAttributes({alignment: alignment !== 'paperpress-has-text-centered' ? 'paperpress-has-text-centered' : ''})
                    }}
                />
                <Button
                    icon='editor-alignright'
                    label='right align'
                    className="components-toolbar__control"
                    isPressed={alignment === 'paperpress-has-text-right'}
                    onClick={() => {
                        setAttributes({alignment: alignment !== 'paperpress-has-text-right' ? 'paperpress-has-text-right' : ''})
                    }}
                />
            </ControlGroup>
        </PanelSection>
    )
}

export default TextStyle;
