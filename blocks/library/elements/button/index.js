import attributes from './attributes';
import edit from './edit';
import save from './save';

const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;

export default registerBlockType(
    'paperblocks/button',
    {
        title: __( 'Paper Button', 'paper-blocks' ),
        description: __( 'Bulma button block.', 'paper-blocks' ),
        category: 'common',
        icon: 'editor-removeformatting',
        keywords: [
            __( 'Button', 'paper-blocks' ),
            __( 'Bulma', 'paper-blocks' ),
        ],
        attributes,
        edit,
        save,
    }
);
