const { __ } = wp.i18n;
const { Component } = wp.element;
const {
    BlockControls,
} = wp.blockEditor;

import AlignToolbar from '../TextControls/AlignToolbar';
import TextWeightToolbar from '../TextControls/TextWeightToolbar';

export default class Controls extends Component {

    constructor() {
        super( ...arguments );
    }
    render() {
        const { attributes: { alignment, weight }, setAttributes } = this.props;
        const onChangeAlign = alignment => {
            setAttributes( { alignment } )
        }
        const onChangeWeight = weight => {
            setAttributes( { weight } )
        }
        return (
            <BlockControls>
                <AlignToolbar
                    value={ alignment }
                    onChange={ onChangeAlign }
                    withJustify={ false }
                />
                <TextWeightToolbar
                    value={ weight }
                    onChange={ onChangeWeight }
                />
            </BlockControls>
        );
    }
}