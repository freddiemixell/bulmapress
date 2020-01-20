import { getClassNames, inlineStyles } from '../../../editor/textcontrols/helpers';

const save = props => {
    const { textContent } = props.attributes;
    const classNames = getClassNames( props );
    const style = inlineStyles( props );

    return (
        <button className={ `paperpress-button paperpress-is-primary ${ classNames }` }>
            <span style={ style }>{ textContent }</span>
            <span className="paperpress-icon">
                <i className="fas fa-arrow-right"></i>
            </span>
        </button>
    );
}

export default save;
