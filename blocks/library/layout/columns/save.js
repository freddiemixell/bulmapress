import { getClassNames } from './edit';

const { InnerBlocks } = wp.blockEditor;

const save = props => {
    const classNames = getClassNames( props );

    return (
        <div className={ `paperpress-columns ${ classNames }` }>
            <InnerBlocks.Content />
        </div>
    );
}

export default save;