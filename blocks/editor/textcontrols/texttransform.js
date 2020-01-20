import Picker from '../components/picker';
import PanelSection from '../components/panelsection';

const { __ } = wp.i18n;

const options = [
    { label: "None", value: "" },
    { label: "Capitalized", value: "paperpress-is-capitalized" },
    { label: "Lowercase", value: "paperpress-is-lowercase" },
    { label: "Uppercase", value: "paperpress-is-uppercase" },
];

export default function TextTransform( props ) {
    const {
        setAttributes,
    } = props;
    return (
        <PanelSection label={ __( 'Transform', 'paper-blocks' ) }>
            <Picker
                options={ options }
                onChange={ transform => setAttributes( { transform } ) }
            />
        </PanelSection>
    );
}
