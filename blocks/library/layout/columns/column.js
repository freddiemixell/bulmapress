import { faColumns } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Picker from '../../../editor/components/picker';
import PanelSection from '../../../editor/components/panelsection';

const { InnerBlocks, InspectorControls } = wp.blockEditor;
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const {  PanelBody, ToggleControl } = wp.components;

const Column = props => {
    const { attributes: { columnWidth, columnOffset, columnNarrow }, setAttributes } = props;
    return (
        <>
        <Inspector {...{ setAttributes, columnWidth, columnOffset, columnNarrow } } />
        <div className={ `paperpress-column ${ typeof columnWidth !== 'undefined' ? columnWidth : '' }` }>
            <InnerBlocks templateLock={false} />
        </div>
        </>
    );
};

const Inspector = props => {
    const { setAttributes, columnWidth, columnOffset, columnNarrow } = props;

    return (
        <InspectorControls>
            <PanelBody
             title={ __( 'Column Settings', 'paper-blocks' ) }
             initialOpen={true}
            >
                <PanelSection label="Width">
                    <Picker
                        id="paperpress-columns-width"
                        onChange={ columnWidth => {
                            setAttributes( { columnWidth } );
                        } }
                        value={ columnWidth }
                        options={[
                            { label: 'Auto', value: '' },
                            { label: 'Three Quarter', value: 'paperpress-is-three-quarters' },
                            { label: 'Two Thirds', value: 'paperpress-is-two-thirds' },
                            { label: 'Half', value: 'paperpress-is-half' },
                            { label: 'One Third', value: 'paperpress-is-one-third' },
                            { label: 'One Quarter', value: 'paperpress-is-one-quarter' },
                            { label: 'Full', value: 'paperpress-is-full' },
                            { label: 'Four Fifths', value: 'paperpress-is-four-fifths' },
                            { label: 'Three Fifths', value: 'paperpress-is-three-fifths' },
                            { label: 'Two Fifths', value: 'paperpress-is-two-fifths' },
                            { label: 'One Fifth', value: 'paperpress-is-one-fifth' },
                        ]}
                    />
                </PanelSection>
                <PanelSection label="Offset">
                    <Picker
                        id="paperpress-columns-offset"
                        onChange={ columnOffset => {
                            setAttributes( { columnOffset } );
                        } }
                        value={ columnOffset }
                        options={[
                            { label: 'None', value: '' },
                            { label: 'One', value: 'paperpress-is-offset-1' },
                            { label: 'Two', value: 'paperpress-is-offset-2' },
                            { label: 'Three', value: 'paperpress-is-offset-3' },
                            { label: 'Four', value: 'paperpress-is-offset-4' },
                            { label: 'Five', value: 'paperpress-is-offset-5' },
                        ]}
                    />
                </PanelSection>
                <PanelSection label="Modifiers">
                    <ToggleControl
                        label="Narrow"
                        checked={ columnNarrow }
                        onChange={ columnNarrow => setAttributes( { columnNarrow } ) }
                    />
                </PanelSection>
            </PanelBody>
        </InspectorControls>
    )
}

export default registerBlockType(
    'paperblocks/column',
    {
        title: __( 'Column', 'paper-blocks' ),
        description: __( 'Single column', 'paper-blocks' ),
        category: 'layout',
        icon: () => <FontAwesomeIcon size="sm" icon={ faColumns } />,   
        keywords: [
            __( 'Column', 'paper-blocks' ),
            __( 'Bulma', 'paper-blocks' ),
        ],
        attributes: {
            columnWidth: {
                type: 'string',
                default: ''
            },
            columnOffset: {
                type: 'string',
                default: ''
            },
            columnNarrow: {
                type: 'boolean',
                default: false
            },
        },
        edit: props => <Column { ...props } />,
        save: props => {
            const classNames = getClassNames( props );

            return (
                <div className={ `paperpress-column ${ classNames }` }>
                    <InnerBlocks.Content />
                </div>
            );
        },
    },
);

function getClassNames( props ) {
    let classNames = [];

    if ( typeof props.attributes.columnWidth !== 'undefined' ) {
        classNames = [ ...classNames, props.attributes.columnWidth ];
    }

    if ( typeof props.attributes.columnOffset !== 'undefined' ) {
        classNames = [ ...classNames, props.attributes.columnOffset ];
    }

    if ( props.attributes.columnNarrow ) {
        classNames = [ ...classNames, 'paperpress-is-narrow' ];
    }

    return classNames.join( ' ' );
}
