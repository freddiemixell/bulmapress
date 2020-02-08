import { getClassNames, inlineStyles } from '../../../editor/textcontrols/helpers';
import Inspector from './inspector';
import Controls from './controls';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const { Fragment } = wp.element;
const { RichText } = wp.blockEditor;

const allowedFormats = [ 'paperblocks/color', 'paperblocks/background-color' ];

const edit = props => {
    const { attributes: { textContent, buttonColor, icon }, setAttributes } = props;
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
                className={ `paperpress-button ${ classNames }` }
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
                {
                    typeof icon !== 'undefined' ?
                    <span className="paperpress-icon">
                        <FontAwesomeIcon icon={ icon } />
                    </span> :
                    null
                }
            </button>
        </Fragment>
    )
}

export default edit;
