import { getClassNames, inlineStyles } from '../TextControls/helpers';
import Inspector from './Inspector';
import Controls from './Controls';

const { Fragment } = wp.element;
const { RichText } = wp.blockEditor;

const allowedFormats = [ 'core/italic', 'core/link', 'paperblocks/color', 'paperblocks/background-color' ];

const edit = props => {
    const { attributes: { textContent, level }, setAttributes } = props;
    const onChangeText = textContent => { setAttributes( { textContent } ) };
    const classNames = getClassNames( props );
    const style = inlineStyles( props );

    return (
        <Fragment>
            <Controls {...{ setAttributes, ...props }} />
            <Inspector {...{ setAttributes, ...props }} />
            <RichText
                tagName={ `h${level}` }
                className={`paperpress-title ${ classNames }`}
                placeholder="Hero Title."
                onChange={ onChangeText }
                value={ textContent }
                allowedFormats={ allowedFormats }
                style={ style }
            />
        </Fragment>
    )
}

export default edit;
