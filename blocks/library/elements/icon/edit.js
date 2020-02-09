import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getClassNames, inlineStyles } from '../../../editor/textcontrols/helpers';
import Controls from './controls';
import Inspector from './inspector';

const edit = props => {
    const { attributes: { iconDef }, setAttributes } = props;
    const classNames = getClassNames( props );
    const style = inlineStyles( props );

    return (
        <>
        <Controls {...{ setAttributes, ...props }} />
        <Inspector {...{ setAttributes, ...props }} />
        <span className={ `paperpress-icon ${ classNames }` } style={ style }>
            { typeof iconDef !== 'undefined' ? <FontAwesomeIcon icon={ iconDef } /> : null }
        </span>
        </>
    )
}

export default edit;