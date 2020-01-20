const { InnerBlocks } = wp.blockEditor;

const save = () => {
    return (
        <div className="paperpress-buttons">
            <InnerBlocks.Content />
        </div>
    )
}

export default save;
