import Picker from '../components/picker';
import PanelSection from '../components/panelsection';

const { Component } = wp.element;
const { Button } = wp.components;
const { __ } = wp.i18n;

const options = [
    { label: "default", value: "" },
    { label: "Huge", value: "paperpress-is-size-1" },
    { label: "Large", value: "paperpress-is-size-2" },
    { label: "Medium", value: "paperpress-is-size-3" },
    { label: "Normal", value: "paperpress-is-size-4" },
    { label: "Small", value: "paperpress-is-size-5" },
];

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
              textSizeCustom,
            },
            setAttributes
        } = this.props;

        return (
            <PanelSection label={ __( 'Font Size', 'paper-blocks' ) }>
            <fieldset>
                <div style={{display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between'}}>

                    <div  style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '40%'}}>
                        <Picker
                            label={ __( 'Preset Size', 'paper-blocks' ) }
                            options={ options }
                            onChange={ textSize => setAttributes( { textSize } )}
                        />
                    </div>

                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '25%'}}>
                            <label htmlFor="bulma-press-custom-text-size">Custom</label>
                            <input
                                id="bulma-press-custom-text-size"
                                type="number"
                                value={ parseInt( textSizeCustom ) || 0 }
                                onChange={ event => {
                                    setAttributes( { textSizeCustom: parseInt( event.target.value ) } )
                                } }
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
            </PanelSection>
        )
    }
}
