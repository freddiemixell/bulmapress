const { SelectControl } = wp.components;
const { __ } = wp.i18n;

const options = [
    { label: "None", value: "" },
    { label: "Capitalized", value: "paperpress-is-capitalized" },
    { label: "Lowercase", value: "paperpress-is-lowercase" },
    { label: "Uppercase", value: "paperpress-is-uppercase" },
];

export default function TextTransform( props ) {
    const {
        attributes: {
            transform
        },
        setAttributes,
    } = props;
    return (
        <SelectControl
            label={ __( 'Transform' ) }
            options={ options }
            value={ transform }
            onChange={ transform => setAttributes( { transform } ) }
        />
    );
}