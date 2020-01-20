import attributes from "./attributes";
import edit from './edit';
import save from './save';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

export default registerBlockType(
    'paperblocks/hero',
    {
        title: __( 'Paper Hero', 'paper-blocks' ),
        description: __( 'Add a hero section to your page.', 'paper-blocks' ),
        category: 'common',
        icon: 'welcome-write-blog',   
        keywords: [
            __( 'Hero', 'paper-blocks' ),
            __( 'Bulma', 'paper-blocks' ),
        ],
        getEditWrapperProps() {
            return { "data-align": "full" };
        },
        attributes,
        edit,
        save,
    },
);
