import HeadingToolbar from './headingtoolbar';
import AlignToolbar from '../../../editor/textcontrols/textalign';
import TextWeightToolbar from '../../../editor/textcontrols/textweight';

const { Component } = wp.element;
const { BlockControls } = wp.blockEditor;

export default class Controls extends Component {
    constructor() {
        super( ...arguments );
    }
    render() {
        const { attributes: { alignment, level, weight }, setAttributes } = this.props;
        const onChangeAlign = alignment => {
            setAttributes( { alignment } )
        }
        const onChangeWeight = weight => {
            setAttributes( { weight } )
        }
        return (
            <BlockControls>
                <HeadingToolbar minLevel={ 1 } maxLevel={ 5 } selectedLevel={ level } onChange={ ( newLevel ) => setAttributes( { level: newLevel } ) } />
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
