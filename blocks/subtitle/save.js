import { getClassNames, inlineStyles } from '../TextControls/helpers';

const { RichText } = wp.blockEditor;

const save = props => {
    const { textContent } = props.attributes;
    const classNames = getClassNames( props );
    const style = inlineStyles( props );

    return (
        <RichText.Content
            tagName={ `p` }
            className={ `paperpress-subtitle ${ classNames }` }
            value={ textContent }
            style={ style }
        />
    );
}

export default save;
