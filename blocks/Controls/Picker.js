const { Component, Fragment } = wp.element;

export default class Picker extends Component {
    constructor() {
        super(...arguments);
    }

    onChangeSelect = ( event ) => {
        const { onChange } = this.props;
        onChange( event.target.value );
        return;
	};

    render() {
        const mappedOptions = this.props.options.map( ( { label, value } ) => {
            return (
                <Fragment key={ `${label}${value}` }>
                    <option value={ value }>{ label }</option>
                </Fragment>
            );
        } );

        return (
            <Fragment>
                { typeof this.props.label !== 'undefined' ? <label htmlFor={ this.props.id }>{ this.props.label }</label> : null }
                <select
                    id={ this.props.id }
                    className="components-select-control__input"
                    onChange={ this.onChangeSelect }
                >
                    {
                        mappedOptions
                    }
                </select>
            </Fragment>
        );
    }
}