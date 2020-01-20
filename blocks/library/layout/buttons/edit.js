import Inspector from './inspector';
import { getClassNames } from '../../../editor/textcontrols/helpers';

const { InnerBlocks } = wp.blockEditor;

const ALLOWED_BLOCKS = [ 'paperblocks/button' ];

const edit = props => {
    const { setAttributes } = props;
    const classNames = getClassNames( props );

    return (
        <>
        <Inspector {...{ setAttributes, ...props }} />
        <div className={ `paperpress-buttons ${ classNames }` }>
            <InnerBlocks
                allowedBlocks={ ALLOWED_BLOCKS }
            />
        </div>
        </>
    )
}

export default edit;
