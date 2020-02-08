function cssTriangle(size = '6', round = false, ...Params) {
    const sizeFix = 0 - Math.round( parseInt(size) / 2.5 );
    const color = Params['0'] || 'blue';
    const direction = Params['1'] || 'down';
    return (`
        width: 0;
        height: 0;
        ${round ? 'border-radius: 3px;' : ''}
        ${direction === 'down' ? 'border-left:' + size + 'px' + ' solid transparent;' : ''}
        ${direction === 'down' ? 'border-right:' + size + 'px' + ' solid transparent;' : ''}
        ${direction === 'down' ? 'border-top:' + size + 'px' + ' solid ' + color + ';' : ''}
        ${direction === 'down' ? 'margin-top: ' + sizeFix + 'px;' : ''}
        ${direction === 'up' ? 'border-left: ' + size + 'px' + ' solid transparent;' : ''}
        ${direction === 'up' ? 'border-right: ' + size + 'px' + ' solid transparent;' : ''}
        ${direction === 'up' ? 'border-bottom: ' + size + 'px' + ' solid ' + color + ';' : ''}
        ${direction === 'up' ? 'margin-bottom: ' + sizeFix + 'px;' : ''}
        ${direction === 'right' ? 'border-top: ' + size + 'px' + ' solid transparent;' : ''}
        ${direction === 'right' ? 'border-bottom: ' + size + 'px' + ' solid transparent;' : ''}
        ${direction === 'right' ? 'border-left: ' + size + 'px' + ' solid ' + color + ';' : ''}
        ${direction === 'right' ? 'margin-right: ' + '-' + size + 'px;' : ''}
        ${direction === 'left' ? 'border-top:' + size + 'px' + ' solid transparent;' : ''}
        ${direction === 'left' ? 'border-bottom:' + size + 'px' + ' solid transparent;' : ''}
        ${direction === 'left' ? 'border-right:' + size + 'px' + ' solid ' + color + ';' : ''}
        ${direction === 'left' ? 'margin-left:' + '-' + size + 'px' : ''}
    `);
}

export {
    cssTriangle
}
