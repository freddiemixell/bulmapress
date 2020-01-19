import Controls from './Controls';

const { registerBlockType } = wp.blocks;
const { RichText,  } = wp.blockEditor;
const { __ } = wp.i18n;
const { Fragment } = wp.element;

export default registerBlockType(
    'paperblocks/title',
    {
        title: __( 'Paper Title', 'paper-blocks' ),
        description: __( 'Bulma title block.', 'paper-blocks' ),
        category: 'common',
        icon: 'editor-textcolor',
        keywords: [
            __( 'Heading', 'paper-blocks' ),
            __( 'Title', 'paper-blocks' ),
            __( 'Bulma', 'paper-blocks' ),
        ],
        attributes: {
            textContent: {
                type: 'string',
                source: 'html',
                selector: '.paperpress-title',
            },
            alignment: {
                type: 'string',
            },
            level: {
                type: "number",
                default: 2
            },
            weight: {
                type: 'string'
            }
        },
        edit: props => {
            const { attributes: { textContent, level, alignment, weight }, setAttributes } = props;
            const onChangeText = textContent => { setAttributes( { textContent } ) };

            return (
                <Fragment>
                    <Controls {...{ setAttributes, ...props }} />
                    <RichText
                        tagName={ `h${level}` }
                        className={`paperpress-title ${ typeof alignment !== 'undefined' ? alignment : '' } ${ typeof weight !== 'undefined' ? weight : '' }`}
                        placeholder="Hero Title."
                        onChange={ onChangeText }
                        value={ textContent }
                        formattingControls={[]}
                    />
                </Fragment>
            )
        },
        save: props => {
            const { textContent, level, alignment, weight } = props.attributes;

            return (
                <RichText.Content
                    tagName={ `h${level}` }
                    className={ `paperpress-title ${ typeof alignment !== 'undefined' ? alignment : '' } ${ typeof weight !== 'undefined' ? weight : '' }` }
                    value={ textContent }
                />
            );
        }
    }
);
