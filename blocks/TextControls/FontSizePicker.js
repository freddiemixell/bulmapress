const { Component } = wp.element;
const { SelectControl, Button, TextControl } = wp.components;
const { __ } = wp.i18n;

const options = [
    { label: "default", value: "" },
    { label: "Huge", value: "paperpress-is-size-1" },
    { label: "Large", value: "paperpress-is-size-2" },
    { label: "Medium", value: "paperpress-is-size-3" },
    { label: "Normal", value: "paperpress-is-size-4" },
    { label: "Small", value: "paperpress-is-size-5" },
]

export default class FontSizePicker extends Component {
    constructor() {
        super(...arguments);
    }

    resetSize = () => this.props.setAttributes( {
        textSizeCustom: undefined,
        textSize: undefined,
    } )

    render() {
        const {
            attributes: {
              textSize,
              textSizeCustom,
            },
            setAttributes
        } = this.props;
        return (
            <fieldset className="components-font-size-picker">
                <legend className="screen-reader-text">
                    { __( 'Font Size' ) }
                </legend>
                <div className="components-font-size-picker__controls">
                    <SelectControl
						className={ 'components-font-size-picker__select' }
						label={ __( 'Preset Size' ) }
						options={ options }
						value={ textSize }
                        onChange={ textSize => setAttributes( { textSize } ) }
					/>
                    <TextControl
                        label={ __( 'Custom' ) }
                        type="number"
                        value={ parseInt( textSizeCustom ) || 0 }
                        onChange={ textSizeCustom => setAttributes( { textSizeCustom: parseInt( textSizeCustom ) } ) }
                        style={{marginRight: '5px', marginBottom: 0, width: '50px'}}
                    />
                    <Button
                        className="components-color-palette__clear"
                        onClick={ this.resetSize }
                        isSmall
                        isSecondary
                        style={{marginBottom: '32.5px', display: 'flex', justifyContent: 'center'}}
                    >
                        { __( 'Reset' ) }
                    </Button>
                </div>
            </fieldset>
        )
    }
}