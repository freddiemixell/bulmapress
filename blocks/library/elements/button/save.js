import { getClassNames, inlineStyles } from '../../../editor/textcontrols/helpers';

const save = props => {
    const { textContent, buttonColor } = props.attributes;
    const classNames = getClassNames( props );
    const style = inlineStyles( props );
    const buttonStyle = {}

    if ( typeof buttonColor !== 'undefined' ) {
        buttonStyle.backgroundColor = buttonColor;
    }

    return (
        <button
            className={ `paperpress-button paperpress-is-primary ${ classNames }` }
            style={ buttonStyle }
        >
            <span style={ style }>{ textContent }</span>
            <span className="paperpress-icon">
                <i className="fas fa-arrow-right"></i>
            </span>
        </button>
    );
}

export default save;
