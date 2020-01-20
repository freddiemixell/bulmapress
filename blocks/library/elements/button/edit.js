import { getClassNames, inlineStyles } from '../../../editor/textcontrols/helpers';
import Inspector from './inspector';
import Controls from './controls';

const { Fragment } = wp.element;
const { RichText } = wp.blockEditor;

const allowedFormats = [ 'paperblocks/color', 'paperblocks/background-color' ];

const edit = props => {
    const { attributes: { textContent, buttonColor }, setAttributes } = props;
    const onChangeText = textContent => { setAttributes( { textContent } ) };
    const classNames = getClassNames( props );
    const style = inlineStyles( props );
    const buttonStyle = {}

    if ( typeof buttonColor !== 'undefined' ) {
        buttonStyle.backgroundColor = buttonColor;
    }

    return (
        <Fragment>
            <Controls {...{ setAttributes, ...props }} />
            <Inspector {...{ setAttributes, ...props }} />
            <button
                className={ `paperpress-button paperpress-is-primary ${ classNames }` }
                style={ buttonStyle }
            >
                <RichText
                    tagName={ `span` }
                    placeholder="Button"
                    onChange={ onChangeText }
                    value={ textContent }
                    allowedFormats={ allowedFormats }
                    style={ style }
                />
                <span className="paperpress-icon">
                    <i className="fas fa-arrow-right"></i>
                </span>
            </button>
        </Fragment>
    )
}

export default edit;
