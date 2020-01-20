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
(window.wpackiopaperPressthemeJsonp=window.wpackiopaperPressthemeJsonp||[]).push([[3],{0:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"a",(function(){return n}))},12:function(e,t,r){r(6),e.exports=r(17)},13:function(e,t){wp.element.createElement;var r=wp.richText,n=r.registerFormatType,o=r.applyFormat,a=r.removeFormat,c=r.getActiveFormat,i=wp.blockEditor,l=i.InspectorControls,p=i.PanelColorSettings;wp.i18n.__;[{name:"color",title:"Inline Text Color"},{name:"background-color",title:"Inline Background Color"}].forEach((function(e){var t=e.name,r=e.title,i="paperblocks/".concat(t);n(i,{title:r,tagName:"span",className:t,attributes:{style:"style"},edit:function(e){var n,s=e.isActive,u=e.value,m=e.onChange;s&&(n=c(u,i).attributes.style.replace(new RegExp("^".concat(t,":\\s*")),""));return React.createElement(l,null,React.createElement(p,{title:r,initialOpen:!1,colorSettings:[{value:n,onChange:function(e){m(e?o(u,{type:i,attributes:{style:"".concat(t,":").concat(e)}}):a(u,i))},label:"Apply color to the selected text."}]}))}})}))},17:function(e,t,r){"use strict";r.r(t);r(13);var n=r(0);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}wp.element.createElement;var a=wp.richText.registerFormatType,c=wp.blockEditor.InspectorControls,i=wp.components,l=i.PanelBody,p=i.Button,s=wp.i18n.__;a("paperblocks/remove-formatting",{title:"Remove formatting",tagName:"span",className:"remove",edit:function(e){var t=e.value,r=e.onChange;return React.createElement(c,null,React.createElement(l,{title:s("Remove Formatting","paper-blocks"),initialOpen:!1},React.createElement(p,{isDefault:!0,onClick:function(){return r(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},t,{formats:Array(t.formats.length)}))}},"Remove formatting")))}})},6:function(e,t,r){"use strict";var n="paperPressdist".replace(/[^a-zA-Z0-9_-]/g,"");r.p=window["__wpackIo".concat(n)]}},[[12,0]]]);
//# sourceMappingURL=textControls-55cfd4a2.js.map