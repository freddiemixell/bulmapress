const { __ } = wp.i18n;
const { Component } = wp.element;
const { BlockControls } = wp.blockEditor;

export default class Inspector extends Component {

    constructor() {
        super( ...arguments );
    }
    render() {
        const { attributes: {  }, setAttributes } = this.props;
        return (
            <BlockControls>
            </BlockControls>
        );
    }
}
