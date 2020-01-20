import styled from 'styled-components';
import TextWeightToolbar from '../../../editor/textcontrols/textweight';

const { __ } = wp.i18n;
const { Component } = wp.element;
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

export default class Controls extends Component {
    constructor() {
        super( ...arguments );

        this.state = {
            isUrlPickerOpen: false,
        }
    }

    render() {
        const { attributes: { weight, url, target }, setAttributes } = this.props;
        const onChangeWeight = weight => {
            setAttributes( { weight } )
        }
        return (
            <>
            { this.state.isUrlPickerOpen ? (
            <UrlPopoverStyled
                onClose={ () => this.setState( { isUrlPickerOpen: false } )  }
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
                    this.setState( { isUrlPickerOpen: false } );
                    return;
                } }>
                    <input type="url" value={ url } onChange={ ( event ) => console.log(event.target.value) } />
                    <Button icon="editor-break" label={ __( 'Apply' ) } type="submit" />
                </Form>
            </UrlPopoverStyled>
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
                        onClick={ () => this.setState( { isUrlPickerOpen: true } ) }
                    />
                </Toolbar>
            </BlockControls>
            </>
        );
    }
}
