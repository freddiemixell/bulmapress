const { Component, Fragment } = wp.element;
const { SelectControl, Button, TextControl } = wp.components;
const { __ } = wp.i18n;

export default class FontSizePicker extends Component {
    constructor() {
        super(...arguments);
    }

    resetSize = () => this.props.setAttributes( {
        textSizeCustom: undefined,
        textSize: undefined,
    } )

    onChangeSelect = ( event ) => {
        const textSize = event.target.value;
		this.props.setAttributes( { textSize } )
	};

    render() {
        const {
            attributes: {
              textSize,
              textSizeCustom,
            },
            setAttributes
        } = this.props;

        const options = [
            { label: "default", value: "" },
            { label: "Huge", value: "paperpress-is-size-1" },
            { label: "Large", value: "paperpress-is-size-2" },
            { label: "Medium", value: "paperpress-is-size-3" },
            { label: "Normal", value: "paperpress-is-size-4" },
            { label: "Small", value: "paperpress-is-size-5" },
        ].map( ( { label, value } ) => {
            return (
                <Fragment key={ `${label}${value}` }>
                    <label>{ label }</label>
                    <option value={ value }>{ label }</option>
                </Fragment>
            );
        } );

        return (
            <fieldset>
                <legend style={{marginBottom: '13px'}}>
                    { __( 'Font Size' ) }
                </legend>
                <div style={{display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '19.5px'}}>

                    <div  style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '40%'}}>
                        <label for="paper-press-preset-size">Preset Size</label>
                        <select
                            id="paper-press-preset-size"
                            className="components-select-control__input"
                            onChange={ this.onChangeSelect }
                        >
                            {
                                options
                            }
                        </select>
                    </div>

                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '25%'}}>
                            <label for="paper-press-custom-text-size">Custom</label>
                            <input
                                id="paper-press-custom-text-size"
                                type="number"
                                value={ parseInt( textSizeCustom ) || 0 }
                                onChange={ textSizeCustom => setAttributes( { textSizeCustom: parseInt( textSizeCustom ) } ) }
                                style={{width: '100%', margin: '1px'}}
                            />
                    </div>

                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                        <Button
                            onClick={ this.resetSize }
                            isSecondary
                            style={{display: 'flex', justifyContent: 'center', padding: '6px 4px', height: 'unset', margin: '1px'}}
                        >
                            { __( 'Reset' ) }
                        </Button>
                    </div>

                </div>
            </fieldset>
        )
    }
}