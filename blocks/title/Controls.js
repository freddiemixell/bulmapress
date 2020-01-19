/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const {
    BlockControls,
} = wp.blockEditor;

import HeadingToolbar from './HeadingToolbar';
import AlignToolbar from '../TextControls/AlignToolbar';


/**
 * Create a Block Controls wrapper Component
 */
export default class Controls extends Component {

    constructor() {
        super( ...arguments );
    }
    render() {
        const { attributes: { alignment, level }, setAttributes } = this.props;
        const onChangeAlign = alignment => {
            setAttributes( { alignment } )
        }
        return (
            <BlockControls>
                <HeadingToolbar minLevel={ 1 } maxLevel={ 5 } selectedLevel={ level } onChange={ ( newLevel ) => setAttributes( { level: newLevel } ) } />
                <AlignToolbar
                    value={ alignment }
                    onChange={ onChangeAlign }
                    withJustify={ false }
                />
            </BlockControls>
        );
    }
}