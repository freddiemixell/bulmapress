import Controls from './Controls';
import Inspector from './Inspector';

const { registerBlockType } = wp.blocks;
const { RichText,  } = wp.blockEditor;
const { __ } = wp.i18n;
const { Fragment } = wp.element;

const inlineStyles = (props) => {
    const { attributes: { textColor, textSizeCustom } } = props
    let styles = {}
    if ( typeof textColor !== 'undefined' ) {
        styles.color = textColor;
    }
    if ( typeof textSizeCustom !== 'undefined' ) {
        styles.fontSize = `${textSizeCustom}px`;
        styles.lineHeight = `${textSizeCustom}px`
    }
    return styles;
}

const getClassNames = (props) => {
    const { attributes: { alignment, weight, textSize } } = props
    let classNames = [];
    if ( typeof alignment !== 'undefined' ) {
        classNames = [ ...classNames, alignment ]
    }
    if ( typeof weight !== 'undefined' ) {
        classNames = [ ...classNames, weight ]
    }
    if ( typeof textSize !== 'undefined' ) {
        classNames = [ ...classNames, textSize ]
    }
    return classNames.join( ' ' );
}

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
            },
            textColor: {
                type: "string",
            },
            textSize: {
                type: "string"
            },
            textSizeCustom: {
                type: "number"
            }
        },
        edit: props => {
            const { attributes: { textContent, level, textColor }, setAttributes } = props;
            const onChangeText = textContent => { setAttributes( { textContent } ) };
            const classNames = getClassNames( props );
            const style = inlineStyles( props );

            return (
                <Fragment>
                    <Controls {...{ setAttributes, ...props }} />
                    <Inspector {...{ setAttributes, ...props }} />
                    <RichText
                        tagName={ `h${level}` }
                        className={`paperpress-title ${ classNames }`}
                        placeholder="Hero Title."
                        onChange={ onChangeText }
                        value={ textContent }
                        allowedFormats={[ 'core/italic', 'core/link', 'paperblocks/color', 'paperblocks/background-color' ]}
                        style={ style }
                    />
                </Fragment>
            )
        },
        save: props => {
            const { textContent, level, textColor, textSizeCustom } = props.attributes;
            const classNames = getClassNames( props );
            const style = inlineStyles( props );

            return (
                <RichText.Content
                    tagName={ `h${level}` }
                    className={ `paperpress-title ${ classNames }` }
                    value={ textContent }
                    style={ style }
                />
            );
        }
    }
);
