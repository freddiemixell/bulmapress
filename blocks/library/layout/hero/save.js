const { InnerBlocks } = wp.blockEditor;

const save = props => {
    const { attributes: { imgURL, imgAlt } } = props;
    return (
        <section className={ "paperpress-hero paperpress-is-fullheight-with-navbar  " }>
            <div className="paperpress-hero-body">
                <div className="paperpress-container">
                    <div className="paperpress-columns">
                        <div className="paperpress-column">
                            <div>
                                <InnerBlocks.Content />
                            </div>
                        </div>
                        <div className="paperpress-column">
                            <img
                                src={imgURL}
                                alt={imgAlt}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default save;
