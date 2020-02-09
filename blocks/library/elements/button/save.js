import { getClassNames, inlineStyles } from '../../../editor/textcontrols/helpers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const save = props => {
    const { textContent, buttonColor, url, target, icon } = props.attributes;
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
            className={ `paperpress-button ${ classNames }` }
            style={ buttonStyle }
            { ...linkProps }
        >
            <span style={ style }>{ textContent }</span>
            {
                typeof icon !== 'undefined' ?
                <span className="paperpress-icon">
                    <FontAwesomeIcon icon={ icon } />
                </span> :
                null
            }
        </a>
    );
}

export default save;
