const attributes = {
    title: {
        type: 'string',
        source: 'html',
        selector: '.paperpress-title',
    },
    subtitle: {
        type: 'string',
        source: 'html',
        selector: '.paperpress-subtitle',
    },
    imgURL: {
        type: 'string',
        source: 'attribute',
        attribute: 'src',
        selector: 'img',
    },
    imgID: {
        type: 'number',
    },
    imgAlt: {
        type: 'string',
        source: 'attribute',
        attribute: 'alt',
        selector: 'img',
    },
    buttonTxt: {
        type: 'string'
    },
    heroTextMod: {
      type: 'string',
    }
  };
  
  export default attributes;