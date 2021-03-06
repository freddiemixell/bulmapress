import { getClassNames, inlineStyles } from '../../../editor/textcontrols/helpers';
import Inspector from './inspector';
import Controls from './controls';

const { Fragment } = wp.element;
const { RichText } = wp.blockEditor;

const allowedFormats = [ 'core/italic', 'core/link', 'paperblocks/color', 'paperblocks/background-color' ];

const edit = props => {
    const { attributes: { textContent }, setAttributes } = props;
    const onChangeText = textContent => { setAttributes( { textContent } ) };
    const classNames = getClassNames( props );
    const style = inlineStyles( props );

    return (
        <Fragment>
            <Controls {...{ setAttributes, ...props }} />
            <Inspector {...{ setAttributes, ...props }} />
            <RichText
                tagName={ `p` }
                className={`paperpress-subtitle ${ classNames }`}
                placeholder="Subtitle."
                onChange={ onChangeText }
                value={ textContent }
                allowedFormats={ allowedFormats }
                style={ style }
            />
        </Fragment>
    )
}

export default edit;
