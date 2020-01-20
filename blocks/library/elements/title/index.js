import attributes from './attributes';
import edit from './edit';
import save from './save';

const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;

export default registerBlockType(
    'paperblocks/title',
    {
        title: __( 'Paper Title', 'paper-blocks' ),
        description: __( 'Bulma title block.', 'paper-blocks' ),
        category: 'common',
        icon: 'editor-textcolor',
        keywords: [
            __( 'Heading', 'paper-blocks' ),
            __( 'Title', 'paper-blocks' ),
            __( 'Bulma', 'paper-blocks' ),
        ],
        attributes,
        edit,
        save,
    }
);
