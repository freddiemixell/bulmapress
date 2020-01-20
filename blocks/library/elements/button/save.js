import { getClassNames, inlineStyles } from '../../../editor/textcontrols/helpers';

const save = props => {
    const { textContent, buttonColor, url, target } = props.attributes;
    const classNames = getClassNames( props );
    const style = inlineStyles( props );
    const buttonStyle = {}

    if ( typeof buttonColor !== 'undefined' ) {
        buttonStyle.backgroundColor = buttonColor;
    }

    let linkProps = {}
    if ( target ) {
        linkProps.target = '_blank'
        linkProps.rel = 'noopener noreferrer'
    }

    return (
        <a
            href={ url }
            className={ `paperpress-button paperpress-is-primary ${ classNames }` }
            style={ buttonStyle }
            { ...linkProps }
        >
            <span style={ style }>{ textContent }</span>
            <span className="paperpress-icon">
                <i className="fas fa-arrow-right"></i>
            </span>
        </a>
    );
}

export default save;
