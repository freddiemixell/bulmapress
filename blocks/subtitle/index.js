import attributes from './attributes';
import edit from './edit';
import save from './save';

const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;

export default registerBlockType(
    'paperblocks/subtitle',
    {
        title: __( 'Paper Subtitle', 'paper-blocks' ),
        description: __( 'Bulma subtitle block.', 'paper-blocks' ),
        category: 'common',
        icon: 'editor-textcolor',
        keywords: [
            __( 'Heading', 'paper-blocks' ),
            __( 'Subtitle', 'paper-blocks' ),
            __( 'Bulma', 'paper-blocks' ),
        ],
        attributes,
        edit,
        save,
    }
);
