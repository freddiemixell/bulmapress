import attributes from './attributes';
import edit from './edit';
import save from './save';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

export default registerBlockType(
    'paperblocks/buttons',
    {
        title: __( 'Paper Buttons', 'paper-blocks' ),
        description: __( 'Button group.', 'paper-blocks' ),
        category: 'common',
        icon: 'welcome-write-blog',   
        keywords: [
            __( 'Button group', 'paper-blocks' ),
            __( 'Bulma', 'paper-blocks' ),
        ],
        attributes,
        edit,
        save,
    },
);
