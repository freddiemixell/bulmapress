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

const getClassNames = (props) => {
    const { attributes: { alignment, weight, textSize, transform, italic } } = props
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
    return classNames.join( ' ' );
}

export {
    inlineStyles,
    getClassNames,
}