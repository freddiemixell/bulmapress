/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const {
    BlockControls,
    AlignmentToolbar,
} = wp.blockEditor;

import HeadingToolbar from './HeadingToolbar';


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
            console.log(alignment)
            setAttributes( { alignment } )
        }
        return (
            <BlockControls>
                <HeadingToolbar minLevel={ 1 } maxLevel={ 5 } selectedLevel={ level } onChange={ ( newLevel ) => setAttributes( { level: newLevel } ) } />
                <AlignmentToolbar
                    value={ alignment }
                    onChange={ onChangeAlign }
                />
            </BlockControls>
        );
    }
}