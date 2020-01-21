const inlineStyles = (props) => {
    const { attributes: { textColor, textSizeCustom } } = props
    let styles = {}
    if ( typeof textColor !== 'undefined' ) {
        styles.color = textColor;
    }
    if ( typeof textSizeCustom !== 'undefined' ) {
        styles.fontSize = `${textSizeCustom}px`;
        styles.lineHeight = `${textSizeCustom}px`
    }
    return styles;
}

const getClassNames = ( { attributes } ) => {
    const {
        alignment, weight, textSize,
        transform, italic, buttonSubset,
        buttonGroupMod, isPrimary, isOutlined,
        isInverted, isRounded,
    } = attributes;

    let classNames = [];
    if ( typeof alignment !== 'undefined' ) {
        classNames = [ ...classNames, alignment ]
    }
    if ( typeof weight !== 'undefined' ) {
        classNames = [ ...classNames, weight ]
    }
    if ( typeof textSize !== 'undefined' ) {
        classNames = [ ...classNames, textSize ]
    }
    if ( typeof transform !== 'undefined' ) {
        classNames = [ ...classNames, transform ]
    }
    if ( typeof italic !== 'undefined' ) {
        classNames = [ ...classNames, italic ]
    }
    if ( typeof buttonSubset !== 'undefined' ) {
        classNames = [ ...classNames, buttonSubset ]
    }
    if ( typeof buttonGroupMod !== 'undefined' ) {
        classNames = [ ...classNames, buttonGroupMod ]
    }
    if ( typeof isPrimary !== 'undefined' ) {
        classNames = [ ...classNames, isPrimary ]
    }
    if ( typeof isOutlined !== 'undefined' ) {
        classNames = [ ...classNames, isOutlined ]
    }
    if ( typeof isInverted !== 'undefined' ) {
        classNames = [ ...classNames, isInverted ]
    }
    if ( typeof isRounded !== 'undefined' ) {
        classNames = [ ...classNames, isRounded ]
    }
    return classNames.join( ' ' );
}

export {
    inlineStyles,
    getClassNames,
}
