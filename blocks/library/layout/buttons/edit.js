const { InnerBlocks } = wp.blockEditor;

const ALLOWED_BLOCKS = [ 'paperblocks/button' ];

const edit = () => {
    return (
        <div className="paperpress-buttons">
            <InnerBlocks
                allowedBlocks={ ALLOWED_BLOCKS }
            />
        </div>
    )
}

export default edit;
