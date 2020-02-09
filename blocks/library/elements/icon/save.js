import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getClassNames, inlineStyles } from '../../../editor/textcontrols/helpers';

const save = props => {
    const { iconDef } = props.attributes;
    const classNames = getClassNames( props );
    const style = inlineStyles( props );

    return (
        <span className={ `paperpress-icon ${ classNames }` } style={ style }>
            <FontAwesomeIcon  icon={ iconDef } />
        </span>
    )
}

export default save;
