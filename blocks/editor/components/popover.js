import styled from 'styled-components';
import useFocus from '../hooks/useFocus';
import { cssTriangle } from '../lib/mixins';

const Tip = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    bottom: -10px;
    display: flex;
    justify-content: center;
    width: 100%;
    .tool-tip {
        ${ cssTriangle( 20, false, '#fff', 'down' ) }
    }
`;

const ToolTip = () => (
    <Tip>
        <div className="tool-tip"/>
    </Tip>
)

const { useRef } = wp.element;

const PopoverStyled = styled.div.attrs(( { isOpen } ) => ({
    className: `paperpress-panel ${ isOpen ? 'paperpress-is-active' : '' }`
}))`
    z-index: 200;
    background: #ffffff;
    position: absolute;
    bottom: 40px;
    .icon-section {
        width: ${ props => props.width ? props.width + 'px;' : 'initial;' }
        height: ${ props => props.height ? props.height + 'px;' : 'initial;' }
        overflow: scroll;
    }
`;

const Popover = ( { children, toggleOpen, isOpen, title, width, height } ) => {
    const popoverRef = useRef(null );

    useFocus( popoverRef, toggleOpen );

    return (
        <PopoverStyled ref={ popoverRef } isOpen={ isOpen } width={ width } height={ height }>
            <ToolTip/>
             <p className="paperpress-panel-heading paperpress-is-link paperpress-color-white">{ title }</p>
             <p className="paperpress-panel-tabs">
                <a className="paperpress-is-active">All</a>
                <a>Solid</a>
                <a>Regular</a>
                <a>Light</a>
                <a>Duotone</a>
                <a>Brands</a>
            </p>
            <div className="paperpress-panel-block">
                <input type="text" className="paperpress-input" placeholder="Search Icons"/>
            </div>
            <div className="paperpress-panel-block icon-section">
             { children }
            </div>
            <div className="paperpress-panel-block">
                <button className="paperpress-button paperpress-is-link paperpress-is-outlined paperpress-is-fullwidth">
                    Reset
                </button>
            </div>
        </PopoverStyled>
    );
};

export default Popover;
