/*!
 * 
 * paperPress
 * 
 * @author 
 * @version 0.1.0
 * @link UNLICENSED
 * @license UNLICENSED
 * 
 * Copyright (c) 2020 
 * 
 * This software is released under the UNLICENSED License
 * https://opensource.org/licenses/UNLICENSED
 * 
 * Compiled with the help of https://wpack.io
 * A zero setup Webpack Bundler Script for WordPress
 */
(window.wpackiopaperPressthemeJsonp=window.wpackiopaperPressthemeJsonp||[]).push([[4],[function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"a",(function(){return n}))},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}r.d(t,"a",(function(){return n}))},function(e,t,r){"use strict";function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}r.d(t,"a",(function(){return o}))},function(e,t,r){"use strict";function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}r.d(t,"a",(function(){return n}))},function(e,t,r){"use strict";function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}r.d(t,"a",(function(){return o}))},function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var o=r(7);function i(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?Object(o.a)(e):t}r.d(t,"a",(function(){return i}))},function(e,t,r){"use strict";var n="paperPressdist".replace(/[^a-zA-Z0-9_-]/g,"");r.p=window["__wpackIo".concat(n)]},function(e,t,r){"use strict";function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}r.d(t,"a",(function(){return n}))},,,,,,,function(e,t,r){r(6),e.exports=r(15)},function(e,t,r){"use strict";r.r(t);var n=r(0);function o(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var i=function(e){var t=e.attributes,r=t.textColor,n=t.textSizeCustom,o={};return void 0!==r&&(o.color=r),void 0!==n&&(o.fontSize="".concat(n,"px"),o.lineHeight="".concat(n,"px")),o},c=function(e){var t=e.attributes,r=t.alignment,n=t.weight,i=t.textSize,c=t.transform,a=[];return void 0!==r&&(a=[].concat(o(a),[r])),void 0!==n&&(a=[].concat(o(a),[n])),void 0!==i&&(a=[].concat(o(a),[i])),void 0!==c&&(a=[].concat(o(a),[c])),a.join(" ")},a=r(1),l=r(2),s=r(5),p=r(3),u=r(4),f=wp.components,b=f.Path,v=f.SVG;function m(e){var t=e.level,r=e.isPressed,n=void 0!==r&&r,o={1:"M9 5h2v10H9v-4H5v4H3V5h2v4h4V5zm6.6 0c-.6.9-1.5 1.7-2.6 2v1h2v7h2V5h-1.4z",2:"M7 5h2v10H7v-4H3v4H1V5h2v4h4V5zm8 8c.5-.4.6-.6 1.1-1.1.4-.4.8-.8 1.2-1.3.3-.4.6-.8.9-1.3.2-.4.3-.8.3-1.3 0-.4-.1-.9-.3-1.3-.2-.4-.4-.7-.8-1-.3-.3-.7-.5-1.2-.6-.5-.2-1-.2-1.5-.2-.4 0-.7 0-1.1.1-.3.1-.7.2-1 .3-.3.1-.6.3-.9.5-.3.2-.6.4-.8.7l1.2 1.2c.3-.3.6-.5 1-.7.4-.2.7-.3 1.2-.3s.9.1 1.3.4c.3.3.5.7.5 1.1 0 .4-.1.8-.4 1.1-.3.5-.6.9-1 1.2-.4.4-1 .9-1.6 1.4-.6.5-1.4 1.1-2.2 1.6V15h8v-2H15z",3:"M12.1 12.2c.4.3.8.5 1.2.7.4.2.9.3 1.4.3.5 0 1-.1 1.4-.3.3-.1.5-.5.5-.8 0-.2 0-.4-.1-.6-.1-.2-.3-.3-.5-.4-.3-.1-.7-.2-1-.3-.5-.1-1-.1-1.5-.1V9.1c.7.1 1.5-.1 2.2-.4.4-.2.6-.5.6-.9 0-.3-.1-.6-.4-.8-.3-.2-.7-.3-1.1-.3-.4 0-.8.1-1.1.3-.4.2-.7.4-1.1.6l-1.2-1.4c.5-.4 1.1-.7 1.6-.9.5-.2 1.2-.3 1.8-.3.5 0 1 .1 1.6.2.4.1.8.3 1.2.5.3.2.6.5.8.8.2.3.3.7.3 1.1 0 .5-.2.9-.5 1.3-.4.4-.9.7-1.5.9v.1c.6.1 1.2.4 1.6.8.4.4.7.9.7 1.5 0 .4-.1.8-.3 1.2-.2.4-.5.7-.9.9-.4.3-.9.4-1.3.5-.5.1-1 .2-1.6.2-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1l1.1-1.4zM7 9H3V5H1v10h2v-4h4v4h2V5H7v4z",4:"M9 15H7v-4H3v4H1V5h2v4h4V5h2v10zm10-2h-1v2h-2v-2h-5v-2l4-6h3v6h1v2zm-3-2V7l-2.8 4H16z",5:"M12.1 12.2c.4.3.7.5 1.1.7.4.2.9.3 1.3.3.5 0 1-.1 1.4-.4.4-.3.6-.7.6-1.1 0-.4-.2-.9-.6-1.1-.4-.3-.9-.4-1.4-.4H14c-.1 0-.3 0-.4.1l-.4.1-.5.2-1-.6.3-5h6.4v1.9h-4.3L14 8.8c.2-.1.5-.1.7-.2.2 0 .5-.1.7-.1.5 0 .9.1 1.4.2.4.1.8.3 1.1.6.3.2.6.6.8.9.2.4.3.9.3 1.4 0 .5-.1 1-.3 1.4-.2.4-.5.8-.9 1.1-.4.3-.8.5-1.3.7-.5.2-1 .3-1.5.3-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1-.1-.1 1-1.5 1-1.5zM9 15H7v-4H3v4H1V5h2v4h4V5h2v10z",6:"M9 15H7v-4H3v4H1V5h2v4h4V5h2v10zm8.6-7.5c-.2-.2-.5-.4-.8-.5-.6-.2-1.3-.2-1.9 0-.3.1-.6.3-.8.5l-.6.9c-.2.5-.2.9-.2 1.4.4-.3.8-.6 1.2-.8.4-.2.8-.3 1.3-.3.4 0 .8 0 1.2.2.4.1.7.3 1 .6.3.3.5.6.7.9.2.4.3.8.3 1.3s-.1.9-.3 1.4c-.2.4-.5.7-.8 1-.4.3-.8.5-1.2.6-1 .3-2 .3-3 0-.5-.2-1-.5-1.4-.9-.4-.4-.8-.9-1-1.5-.2-.6-.3-1.3-.3-2.1s.1-1.6.4-2.3c.2-.6.6-1.2 1-1.6.4-.4.9-.7 1.4-.9.6-.3 1.1-.4 1.7-.4.7 0 1.4.1 2 .3.5.2 1 .5 1.4.8 0 .1-1.3 1.4-1.3 1.4zm-2.4 5.8c.2 0 .4 0 .6-.1.2 0 .4-.1.5-.2.1-.1.3-.3.4-.5.1-.2.1-.5.1-.7 0-.4-.1-.8-.4-1.1-.3-.2-.7-.3-1.1-.3-.3 0-.7.1-1 .2-.4.2-.7.4-1 .7 0 .3.1.7.3 1 .1.2.3.4.4.6.2.1.3.3.5.3.2.1.5.2.7.1z"};return o.hasOwnProperty(t)?React.createElement(v,{width:"20",height:"20",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",isPressed:n},React.createElement(b,{d:o[t]})):null}var h=lodash.range,d=wp.i18n,g=d.__,y=d.sprintf,O=wp.element.Component,w=wp.components.ToolbarGroup,j=function(e){function t(){return Object(a.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"createLevelControl",value:function(e,t,r){var n=e===t;return{icon:React.createElement(m,{level:e,isPressed:n}),title:y(g("Heading %d"),e),isActive:n,onClick:function(){return r(e)}}}},{key:"render",value:function(){var e=this,t=this.props,r=t.isCollapsed,n=void 0===r||r,o=t.minLevel,i=t.maxLevel,c=t.selectedLevel,a=t.onChange;return React.createElement(w,{isCollapsed:n,icon:React.createElement(m,{level:c}),controls:h(o,i).map((function(t){return e.createLevelControl(t,c,a)}))})}}]),t}(O),C=r(7),x=wp.element.Component,P=wp.components,E=P.SelectControl,k=P.Button,S=P.TextControl,z=wp.i18n.__,R=[{label:"default",value:""},{label:"Huge",value:"paperpress-is-size-1"},{label:"Large",value:"paperpress-is-size-2"},{label:"Medium",value:"paperpress-is-size-3"},{label:"Normal",value:"paperpress-is-size-4"},{label:"Small",value:"paperpress-is-size-5"}],_=function(e){function t(){var e;return Object(a.a)(this,t),e=Object(s.a)(this,Object(p.a)(t).apply(this,arguments)),Object(n.a)(Object(C.a)(e),"resetSize",(function(){return e.props.setAttributes({textSizeCustom:void 0,textSize:void 0})})),e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.attributes,r=t.textSize,n=t.textSizeCustom,o=e.setAttributes;return React.createElement("fieldset",{className:"components-font-size-picker"},React.createElement("legend",{className:"screen-reader-text"},z("Font Size")),React.createElement("div",{className:"components-font-size-picker__controls"},React.createElement(E,{className:"components-font-size-picker__select",label:z("Preset Size"),options:R,value:r,onChange:function(e){return o({textSize:e})}}),React.createElement(S,{label:z("Custom"),type:"number",value:parseInt(n)||0,onChange:function(e){return o({textSizeCustom:parseInt(e)})},style:{marginRight:"5px",marginBottom:0,width:"50px"}}),React.createElement(k,{className:"components-color-palette__clear",onClick:this.resetSize,isSmall:!0,isSecondary:!0,style:{marginBottom:"32.5px",display:"flex",justifyContent:"center"}},z("Reset"))))}}]),t}(x),H=wp.components,A=H.SelectControl,V=H.Button,D=wp.element.Fragment,L=wp.i18n.__,T=[{label:"Capitalized",value:"paperpress-is-capitalized"},{label:"Lowercase",value:"paperpress-is-lowercase"},{label:"Uppercase",value:"paperpress-is-uppercase"},{label:"Italic",value:"paperpress-is-italic"}];function B(e){var t=e.attributes.transform,r=e.setAttributes;return React.createElement(D,null,React.createElement(A,{label:L("Transform"),options:T,value:t,onChange:function(e){return r({transform:e})}}),React.createElement(V,{isSmall:!0,isSecondary:!0,onClick:function(){return r({transform:void 0})}},"Reset"))}function N(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function M(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?N(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var I=wp.i18n.__,F=wp.element.Component,J=wp.blockEditor,G=J.InspectorControls,U=J.ColorPalette,Z=wp.components.PanelBody,q=function(e){function t(){return Object(a.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.attributes,r=t.level,n=t.textColor,o=e.setAttributes;return React.createElement(G,null,React.createElement(Z,{title:I("Title Settings","paper-blocks"),initialOpen:!1},React.createElement("p",null,I("Level")),React.createElement(j,{isCollapsed:!1,minLevel:1,maxLevel:7,selectedLevel:r,onChange:function(e){return o({level:e})}}),React.createElement("p",null,I("Color")),React.createElement(U,{value:n,onChange:function(e){o({textColor:e})}}),React.createElement(_,M({setAttributes:o},this.props)),React.createElement(B,M({setAttributes:o},this.props))))}}]),t}(F);function K(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var Q=lodash.find,W=wp.i18n.__,X=wp.components.Toolbar,Y=[{icon:"editor-alignleft",title:W("Align text left"),align:"paperpress-has-text-left"},{icon:"editor-aligncenter",title:W("Align text center"),align:"paperpress-has-text-centered"},{icon:"editor-alignright",title:W("Align text right"),align:"paperpress-has-text-right"}];var $=function(e){e.withJustify&&(Y=[].concat(o(Y),[{icon:"editor-justify",title:W("Align justify"),align:"paperpress-has-text-justified"}]));var t=e.value,r=e.onChange,i=e.alignmentControls,c=void 0===i?Y:i,a=e.label,l=void 0===a?W("Change text alignment"):a,s=e.isCollapsed,p=void 0===s||s;function u(e){return function(){return r(t===e?void 0:e)}}var f=Q(c,(function(e){return e.align===t}));return React.createElement(X,{isCollapsed:p,icon:f?f.icon:"editor-alignleft",label:l,controls:c.map((function(e){var r=e.align;return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?K(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):K(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e,{isActive:t===r,role:p?"menuitemradio":void 0,onClick:u(r)})}))})};function ee(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var te=lodash.find,re=wp.i18n.__,ne=wp.components.Toolbar,oe=[{icon:"editor-bold",title:re("Light"),weight:"paperpress-has-text-weight-light"},{icon:"editor-bold",title:re("Normal"),weight:"paperpress-has-text-weight-normal"},{icon:"editor-bold",title:re("Medium"),weight:"paperpress-has-text-weight-medium"},{icon:"editor-bold",title:re("Semibold"),weight:"paperpress-has-text-weight-semibold"},{icon:"editor-bold",title:re("Bold"),weight:"paperpress-has-text-weight-bold"}];var ie=function(e){var t=e.value,r=e.onChange,o=e.weightControls,i=void 0===o?oe:o,c=e.label,a=void 0===c?re("Change text weight"):c,l=e.isCollapsed,s=void 0===l||l;function p(e){return function(){return r(t===e?void 0:e)}}var u=te(i,(function(e){return e.weight===t}));return React.createElement(ne,{isCollapsed:s,icon:u?u.icon:"editor-bold",label:a,controls:i.map((function(e){var r=e.weight;return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ee(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ee(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e,{isActive:t===r,role:s?"menuitemradio":void 0,onClick:p(r)})}))})},ce=(wp.i18n.__,wp.element.Component),ae=wp.blockEditor.BlockControls,le=function(e){function t(){return Object(a.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.attributes,r=t.alignment,n=t.level,o=t.weight,i=e.setAttributes;return React.createElement(ae,null,React.createElement(j,{minLevel:1,maxLevel:5,selectedLevel:n,onChange:function(e){return i({level:e})}}),React.createElement($,{value:r,onChange:function(e){i({alignment:e})},withJustify:!1}),React.createElement(ie,{value:o,onChange:function(e){i({weight:e})}}))}}]),t}(ce);function se(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function pe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?se(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):se(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ue=wp.element.Fragment,fe=wp.blockEditor.RichText,be=["core/italic","core/link","paperblocks/color","paperblocks/background-color"],ve=function(e){var t=e.attributes,r=t.textContent,n=t.level,o=e.setAttributes,a=c(e),l=i(e);return React.createElement(ue,null,React.createElement(le,pe({setAttributes:o},e)),React.createElement(q,pe({setAttributes:o},e)),React.createElement(fe,{tagName:"h".concat(n),className:"paperpress-title ".concat(a),placeholder:"Hero Title.",onChange:function(e){o({textContent:e})},value:r,allowedFormats:be,style:l}))},me=wp.blockEditor.RichText,he=function(e){var t=e.attributes,r=t.textContent,n=t.level,o=c(e),a=i(e);return React.createElement(me.Content,{tagName:"h".concat(n),className:"paperpress-title ".concat(o),value:r,style:a})},de=wp.blocks.registerBlockType,ge=wp.i18n.__;t.default=de("paperblocks/title",{title:ge("Paper Title","paper-blocks"),description:ge("Bulma title block.","paper-blocks"),category:"common",icon:"editor-textcolor",keywords:[ge("Heading","paper-blocks"),ge("Title","paper-blocks"),ge("Bulma","paper-blocks")],attributes:{textContent:{type:"string",source:"html",selector:".paperpress-title"},alignment:{type:"string"},level:{type:"number",default:2},weight:{type:"string"},textColor:{type:"string"},textSize:{type:"string"},textSizeCustom:{type:"number"},transform:{type:"string"}},edit:ve,save:he})}],[[14,0]]]);
//# sourceMappingURL=title-59aaa376.js.map