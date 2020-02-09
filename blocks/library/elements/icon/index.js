import attributes from './attributes';
import edit from './edit';
import save from './save';

const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;

export default registerBlockType(
    'paperblocks/icon',
    {
        title: __( 'Paper Icon', 'paper-blocks' ),
        description: __( 'Bulma icon block.', 'paper-blocks' ),
        category: 'common',
        icon: 'palmtree',
        keywords: [
            __( 'Icon', 'paper-blocks' ),
        ],
        attributes,
        edit,
        save,
    }
);
