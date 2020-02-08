import styled from 'styled-components';
import TextWeightToolbar from '../../../editor/textcontrols/textweight';
import { faIcons } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as icons from '@fortawesome/free-solid-svg-icons';
import Popover from '../../../editor/components/popover';

const { __ } = wp.i18n;
const { useState } = wp.element;
const {  ToolbarButton, Button, Toolbar, ToggleControl } = wp.components
const { BlockControls, URLPopover } = wp.blockEditor;

const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

const UrlPopoverStyled = styled( URLPopover )`
    .block-editor-url-popover__row:not(.block-editor-url-popover__settings) {
        display: flex;
        padding: 5px;
    }
`

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

export default function Controls( { attributes: { weight, url, target }, setAttributes } ) {
    const [ isUrlPickerOpen, setUrlPickerOpen ] = useState( false );
    const [ isIconPickerOpen, setIconPickerOpen ] = useState( false );

    const onChangeWeight = weight => {
        setAttributes( { weight } )
    }

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
                    setAttributes( { icon } )
                    setIconPickerOpen( false )
                } }
            >
                <FontAwesomeIcon size="sm" icon={ icon } />
            </div>
        )
    });

    return (
        <>
        { isUrlPickerOpen ? (
        <UrlPopoverStyled
            onClose={ () => setUrlPickerOpen( false )  }
            renderSettings={ () => (
                <ToggleControl
                    label={ __( 'Open in New Tab' ) }
                    checked={ target }
                    onChange={ ( target ) => setAttributes( { target } ) }
                />
            ) }
        >
            <Form onSubmit={ ( event ) => {
                event.preventDefault();
                setUrlPickerOpen( false );
                return;
            } }>
                <input type="url" value={ url } onChange={ ( event ) => console.log(event.target.value) } />
                <Button icon="editor-break" label={ __( 'Apply' ) } type="submit" />
            </Form>
        </UrlPopoverStyled>
        ) : null
        }
        { isIconPickerOpen ? 
        (
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
            <TextWeightToolbar
                value={ weight }
                onChange={ onChangeWeight }
            />
            <Toolbar>
                <ToolbarButton
                    name="link"
                    icon="admin-links"
                    title={ __( 'Link' ) }
                    onClick={ () => setUrlPickerOpen( true ) }
                />
                <ToolBarButton onClick={ () => setIconPickerOpen( true ) }>
                    <FontAwesomeIcon className="paperpress-toolbar-button" size="xs" icon={ faIcons } />
                </ToolBarButton>
            </Toolbar>
        </BlockControls>
        </>
    );

}
