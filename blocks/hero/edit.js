import Inspector from './Inspector';
import icons from './icons';

const { MediaUpload, InnerBlocks } = wp.blockEditor;
const { Button } = wp.components;
const { __ } = wp.i18n;

const edit = props => {
    const { attributes: { imgID, imgURL, imgAlt }, setAttributes, isSelected } = props;
    const onSelectImage = img => {
        setAttributes( {
            imgID: img.id,
            imgURL: img.url,
            imgAlt: img.alt,
        } );
    };
    const onRemoveImage = () => {
        setAttributes({
            imgID: null,
            imgURL: null,
            imgAlt: null,
        });
    }
    return (
        <section className={ "paperpress-hero paperpress-is-fullheight-with-navbar" }>
            <Inspector {...{ setAttributes, ...props }} />
            <div className="paperpress-hero-body">
                <div className="paperpress-container">
                    <div className="paperpress-columns">
                        <div className="paperpress-column">
                            <div>
                                <InnerBlocks
                                    allowedBlocks={ [ 'paperblocks/title', 'paperblocks/subtitle' ] }
                                    template={ [
                                        [ 'paperblocks/title', { textContent: 'Hero Title', textSize: 'paperpress-is-size-1' } ],
                                        [ 'paperblocks/subtitle', { textContent: 'Hero subtitle.' } ],
                                    ] }
                                    templateLock="all"
                                />
                                <div className="paperpress-buttons">
                                    <button className="paperpress-button paperpress-is-primary">
                                    <span>Get Started</span>
                                        <span className="paperpress-icon">
                                        <i className="fas fa-arrow-right"></i>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="paperpress-column">
                        { ! imgID ? (
                            <MediaUpload
                                onSelect={ onSelectImage }
                                type="image"
                                value={ imgID }
                                render={ ( { open } ) => (
                                    <Button
                                        className={ "button button-large" }
                                        onClick={ open }
                                    >
                                        { icons.upload }
                                        { __( ' Upload Image', 'jsforwpblocks' ) }
                                    </Button>
                                ) }
                            >
                            </MediaUpload>

                            ) : (

                            <p className="image-wrapper">
                                <img
                                    src={ imgURL }
                                    alt={ imgAlt }
                                />

                                { isSelected ? (

                                    <Button
                                        className="remove-image"
                                        onClick={ onRemoveImage }
                                    >
                                        { icons.remove }
                                    </Button>

                                ) : null }

                            </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default edit;
