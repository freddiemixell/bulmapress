export default {
    textContent: {
        type: 'string',
        source: 'html',
        selector: '.paperpress-title',
    },
    alignment: {
        type: 'string',
    },
    level: {
        type: "number",
        default: 2
    },
    weight: {
        type: 'string'
    },
    textColor: {
        type: "string",
    },
    textSize: {
        type: "string"
    },
    textSizeCustom: {
        type: "number"
    },
    transform: {
        type: "string"
    }
}
