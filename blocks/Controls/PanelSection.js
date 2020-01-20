
const PanelSection = ( { label, children } ) => {
    return (
        <div style={{marginBottom: '19.5px'}}>
            <p style={{marginBottom: '13px'}}>{ label }</p>
            { children }
        </div>
    );
}

export default PanelSection;
