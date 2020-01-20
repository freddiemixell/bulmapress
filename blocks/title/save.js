import { getClassNames, inlineStyles } from './helpers';

const { RichText } = wp.blockEditor;

const save = props => {
    const { textContent, level } = props.attributes;
    const classNames = getClassNames( props );
    const style = inlineStyles( props );

    return (
        <RichText.Content
            tagName={ `h${level}` }
            className={ `paperpress-title ${ classNames }` }
            value={ textContent }
            style={ style }
        />
    );
}

export default save;
