const { SelectControl, Button } = wp.components;
const { Fragment } = wp.element;
const { __ } = wp.i18n;

const options = [
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
        <Fragment>
            <SelectControl
                label={ __( 'Transform' ) }
                options={ options }
                value={ transform }
                onChange={ transform => setAttributes( { transform } ) }
            />
            <Button
                isSmall
                isSecondary
                onClick={ () => setAttributes( { transform: undefined } ) }
            >
                Reset
            </Button>
        </Fragment>
    );
}