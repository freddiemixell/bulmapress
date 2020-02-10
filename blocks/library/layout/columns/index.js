import attributes from './attributes';
import edit from './edit';
import save from './save';
import { faColumns } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

export default registerBlockType(
    'paperblocks/columns',
    {
        title: __( 'Bulma Columns', 'paper-blocks' ),
        description: __( 'Button group.', 'paper-blocks' ),
        category: 'layout',
        icon: () => <FontAwesomeIcon size="sm" icon={ faColumns } />,   
        keywords: [
            __( 'Column', 'paper-blocks' ),
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
