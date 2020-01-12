const attributes = {
    textAlignment: {
      type: "string"
    },
    blockAlignment: {
      type: "string"
    },
    colorPaletteControl: {
      type: "string",
      default: "#000000"
    },
    colorPaletteControl2: {
      type: "string",
      default: "#ffffff"
    },
    checkboxControl: {
      type: "boolean",
      default: true
    },
    dateTimeControl: {
      type: "string"
    },
    radioControl: {
      type: "string",
      default: "a"
    },
    rangeControl: {
      type: "number",
      default: "10"
    },
    textControl: {
      type: "string"
    },
    textareaControl: {
      type: "text"
    },
    toggleControl: {
      type: "boolean"
    },
    selectControl: {
      type: "string"
    },
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
    }
  };
  
  export default attributes;