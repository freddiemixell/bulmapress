/**
 * Block dependencies
 */

import icons from './icons';
import attributes from "./attributes";
import Inspector from './Inspector';
import Controls from './Controls';

/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, MediaUpload } = wp.blockEditor;
const { Button } = wp.components;

/**
 * Register block
 */
export default registerBlockType(
    'paperblocks/hero',
    {
        title: __( 'Paper Hero', 'paper-blocks' ),
        description: __( 'Add a hero section to your page.', 'paper-blocks' ),
        category: 'common',
        icon: 'welcome-write-blog',   
        keywords: [
            __( 'Hero', 'paper-blocks' ),
            __( 'Bulma', 'paper-blocks' ),
        ],
        getEditWrapperProps() {
            return { "data-align": "full" };
        },
        attributes,
        edit: props => {
            const { attributes: { title, subtitle, imgID, imgURL, imgAlt, heroTextMod }, setAttributes, isSelected } = props;
            const onChangeTitle = title => { setAttributes( { title } ) };
            const onChangeSubtitle = subtitle => { setAttributes( { subtitle } ) };
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
                    <Controls {...{ setAttributes, ...props }} />
                    <div className="paperpress-hero-body">
                        <div className="paperpress-container">
                            <div className="paperpress-columns">
                                <div className="paperpress-column">
                                    <div>
                                        <RichText
                                            tagName="h1"
                                            className={`paperpress-title ${ heroTextMod }`}
                                            placeholder="Hero Title."
                                            onChange={ onChangeTitle }
                                            value={ title }
                                        />
                                        <RichText
                                            tagName="p"
                                            className="paperpress-subtitle"
                                            placeholder="Hero subtitle goes here."
                                            onChange={ onChangeSubtitle }
                                            value={ subtitle }
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
        },
        save: props => {
            const { attributes: { title, subtitle, imgURL, imgAlt, heroTextMod } } = props;
            return (
                <section className={ "paperpress-hero paperpress-is-fullheight-with-navbar  " }>
                    <div className="paperpress-hero-body">
                        <div className="paperpress-container">
                            <div className="paperpress-columns">
                                <div className="paperpress-column">
                                    <div>
                                        <h1 className={ `paperpress-title ${heroTextMod}` } dangerouslySetInnerHTML={ {
                                            __html: title,
                                        } }/>
                                        <p className="paperpress-subtitle" dangerouslySetInnerHTML={ { 
                                            __html: subtitle,
                                         } }/>
                                        <div className="paperpress-buttons">
                                            <a
                                                className="paperpress-button paperpress-is-primary"
                                                href="#"
                                            >
                                            <span>Get Started</span>
                                                <span className="paperpress-icon">
                                                    <i className="fas fa-arrow-right"></i>
                                                </span>
                                            </a>
                                        </div>
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
        },
    },
);
