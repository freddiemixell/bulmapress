import styled from 'styled-components';

const PanelWrapper = styled.div`
    margin-bottom: 19.5px;

    p {
        margin-bottom: 13px;
    }
`;

const PanelSection = ( { label, children } ) => {
    return (
        <PanelWrapper>
            <p>{ label }</p>
            { children }
        </PanelWrapper>
    );
}

export default PanelSection;
