import Inspector from './inspector';

const { InnerBlocks } = wp.blockEditor;

const columnPresets = {
    layoutOne: [
        [ 'paperblocks/column', {} ],
        [ 'paperblocks/column', {} ],
        [ 'paperblocks/column', {} ],
        [ 'paperblocks/column', {} ],
    ],
    layoutTwo: [
        [ 'paperblocks/column', {
            columnWidth: 'paperpress-is-half',
        } ],
        [ 'paperblocks/column', {
            columnWidth: 'paperpress-is-one-quarter',
        } ],
        [ 'paperblocks/column', {
            columnWidth: 'paperpress-is-one-quarter',
        } ],
    ],
    layoutThree: [
        [ 'paperblocks/column', {
            columnWidth: 'paperpress-is-one-quarter'
        } ],
        [ 'paperblocks/column', {} ],
    ],
    layoutFour: [
        [ 'paperblocks/column', {
            columnNarrow: true
        } ],
        [ 'paperblocks/column', {
            columnNarrow: true
        } ],
        [ 'paperblocks/column', {
            columnNarrow: true
        } ],
        [ 'paperblocks/column', {
            columnNarrow: true
        } ],
        [ 'paperblocks/column', {
            columnNarrow: true
        } ],
    ],
}

const edit = props => {
    const { setAttributes, attributes: { columnCount, columnMultiline, columnCentered, columnVerticalAlign } } = props;

    const classNames = getClassNames( props );

    return (
        <>
            <Inspector { ...{ setAttributes, columnCount, columnMultiline, columnCentered, columnVerticalAlign } } />
            <div className={ `wp-block-columns ${ classNames }` }>
                <InnerBlocks
                    allowedBlocks={ [ 'paperblocks/column' ] }
                    template={ columnPresets.layoutFour }
                    templateLock="all"
                />
            </div>
        </>
    );
}

export default edit;

export function getClassNames( props ) {
    let classNames = [];

    if ( true === props.attributes.columnMultiline ) {
        classNames = [ ...classNames, 'paperpress-is-multiline' ];
    }

    if ( true === props.attributes.columnCentered ) {
        classNames = [ ...classNames, 'paperpress-is-centered' ];
    }

    if ( true === props.attributes.columnVerticalAlign ) {
        classNames = [ ...classNames, 'paperpress-is-vcentered' ];
    }

    return classNames.join( ' ' );
}
