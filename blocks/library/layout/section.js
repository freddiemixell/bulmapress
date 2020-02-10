import { faColumns } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const { InnerBlocks } = wp.blockEditor;
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

const Section = () => (
    <div className="paperpress-section">
        <div className="paperpress-container">
        <InnerBlocks
        />
        </div>
    </div>
);

export default registerBlockType(
    'paperblocks/section',
    {
        title: __( 'Section', 'paper-blocks' ),
        description: __( 'Single column', 'paper-blocks' ),
        category: 'layout',
        icon: () => <FontAwesomeIcon size="sm" icon={ faColumns } />,   
        keywords: [
            __( 'Section', 'paper-blocks' ),
            __( 'Bulma', 'paper-blocks' ),
        ],
        attributes: {},
        getEditWrapperProps() {
            return { "data-align": "full" };
        },
        edit: () => <Section/>,
        save: () => (
            <div className="paperpress-section">
                <div className="paperpress-container">
                <InnerBlocks.Content />
                </div>
            </div>
        ),
    },
);