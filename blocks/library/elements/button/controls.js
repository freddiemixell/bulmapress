import TextWeightToolbar from '../../../editor/textcontrols/textweight';

const { __ } = wp.i18n;
const { Component } = wp.element;
const { BlockControls } = wp.blockEditor;

export default class Controls extends Component {

    constructor() {
        super( ...arguments );
    }
    render() {
        const { attributes: { weight }, setAttributes } = this.props;
        const onChangeWeight = weight => {
            setAttributes( { weight } )
        }
        return (
            <BlockControls>
                <TextWeightToolbar
                    value={ weight }
                    onChange={ onChangeWeight }
                />
            </BlockControls>
        );
    }
}
