import Popover from '../../../editor/components/popover';
import { faIcons } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as icons from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const { useState } = wp.element;
const { Toolbar } = wp.components;
const { BlockControls } = wp.blockEditor;

const ToolBarButton = styled.div.attrs(() => ({
    className: 'components-button components-toolbar__control has-icon'
}))`
    .paperpress-toolbar-button {
        display: flex;
        justify-content: center;
        width: 100%;
        font-size: 1.25em;
    }
`;

export default function Controls( { setAttributes } ) {
    const [ isIconPickerOpen, setIconPickerOpen ] = useState( false );

    const options = Object.keys(icons)
    .filter(iconKey => ( iconKey !== 'fas' && iconKey !== 'prefix') )
    .map(iconKey => {
        const icon = icons[iconKey];
        return (
            <div
                key={ iconKey }
                style={{justifyContent: 'center'}}
                className="paperpress-column paperpress-is-one-quarter paperpress-is-flex"
                onClick={ () => {
                    setAttributes( { iconDef: icon } )
                    setIconPickerOpen( false )
                } }
            >
                <FontAwesomeIcon size="sm" icon={ icon } />
            </div>
        )
    });

    return (
        <>
        {
            isIconPickerOpen ? (
            <Popover
                title="Font Awesome Icon Picker"
                isOpen={ isIconPickerOpen }
                toggleOpen={ setIconPickerOpen }
                width={ 300 }
                height={ 200 }
            >
                <div className="paperpress-columns paperpress-is-multiline" style={{height: 'inherit'}}>
                { options }
                </div>
            </Popover>
            ) : null
        }
        <BlockControls>
            <Toolbar>
                <ToolBarButton onClick={ () => setIconPickerOpen( true ) }>
                    <FontAwesomeIcon className="paperpress-toolbar-button" size="xs" icon={ faIcons } />
                </ToolBarButton>
            </Toolbar>
        </BlockControls>
        </>
        )

}
