import Picker from '../../../editor/components/picker';

const { __ } = wp.i18n;
const { InspectorControls } = wp.blockEditor;
const {  PanelBody, ToggleControl } = wp.components;

const options = [
    { label: __( 'Two', 'paper-blocks' ), value: 2 },
    { label: __( 'Three', 'paper-blocks' ), value: 3 },
    { label: __( 'Four', 'paper-blocks' ), value: 4 },
    { label: __( 'Five', 'paper-blocks' ), value: 5 },
    { label: __( 'Six', 'paper-blocks' ), value: 6 },
];

const Inspector = props => {
    const { columnCount, setAttributes, columnMultiline, columnCentered, columnVerticalAlign } = props;

    return (
        <InspectorControls>
            <PanelBody
                title={ __( 'Column Settings', 'paper-blocks' ) }
                initialOpen={true}
            >
               <Picker
                 options={ options }
                 value={ columnCount }
                 onChange={ columnCount => {
                   setAttributes( { columnCount: parseInt(columnCount) } );
                 }}
               />
               <ToggleControl
                    label="Vertically Align"
                    checked={ columnVerticalAlign }
                    onChange={ columnVerticalAlign => setAttributes( { columnVerticalAlign } ) }
                />
                <ToggleControl
                    label="Multiline"
                    checked={ columnMultiline }
                    onChange={ columnMultiline => setAttributes( { columnMultiline } ) }
                />
                {
                    columnMultiline ?
                        <ToggleControl
                            label="Centered"
                            checked={ columnCentered }
                            onChange={ columnCentered => setAttributes( { columnCentered } ) }
                        /> :
                        null
                }
            </PanelBody>
        </InspectorControls>
    );
}

export default Inspector;