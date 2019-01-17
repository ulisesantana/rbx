(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{"./src/__docs__/components/index.ts":function(e,t,n){"use strict";var r=n("./node_modules/@mdx-js/tag/dist/mdx-provider.js"),o=n("./node_modules/react/index.js"),a=n.n(o),l=n("./src/elements/index.ts"),i=n("./node_modules/docz/dist/index.m.js"),c=Object.assign(function(e){var t=e.primaryName,n=e.primaryColor,r=e.secondaryName,o=e.secondaryColor,c=e.url,s=void 0===c?{}:/^\/[a-z]/.test(c)?{as:i.c,to:c}:{as:"a",href:c,target:"_blank"};return a.a.createElement(l.g,null,a.a.createElement(l.s.Group,Object.assign({gapless:!0},s),a.a.createElement(l.s,{color:n},t),a.a.createElement(l.s,{color:o},r)))},{Group:function(e){var t=e.children;return a.a.createElement(l.i,{kind:"group",children:t})}}),s=function(e){var t=e.asType;return a.a.createElement(c,{primaryName:"as",primaryColor:"light",secondaryName:t,secondaryColor:"warning",url:"/architecture/inversion-of-control"})},p=function(e){var t=e.docPath,n=void 0!==t?"https://bulma.io/documentation".concat(t):void 0,r=void 0!==t?"Bulma":"n/a",o=void 0!==t?"primary":"dark";return a.a.createElement(c,{primaryName:"docs",primaryColor:"light",secondaryName:r,secondaryColor:o,url:n})},u=function(e){var t=e.customize,n=!0===t?"yes":"no",r=!0===t?"success":"danger";return a.a.createElement(c,{primaryName:"customize",primaryColor:"light",secondaryName:n,secondaryColor:r,url:"/architecture/customize"})},m=function(e){var t=e.asType,n=e.docPath,r=e.customize;return a.a.createElement(c.Group,null,a.a.createElement(s,{asType:t}),a.a.createElement(u,{customize:r}),a.a.createElement(p,{docPath:n}))};function d(e){return(d="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g=function(e){return Object.keys(e).sort(function(e,t){return e<t?-1:e===t?0:1}).map(function(t){return{key:t,value:e[t]}})},T=function(e){function t(){var e,n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,c=new Array(i),s=0;s<i;s++)c[s]=arguments[s];return r=this,o=(e=b(t)).call.apply(e,[this].concat(c)),n=!o||"object"!==d(o)&&"function"!==typeof o?y(r):o,E(y(y(n)),"renderBody",function(){var e=n.props.props;if(void 0!==e)return a.a.createElement("tbody",null,g(e).map(function(e){var t=e.key,r=e.value;return n.renderRow(t,r)}))}),E(y(y(n)),"renderCellName",function(e){return a.a.createElement(l.r.Cell,null,a.a.createElement("code",null,e))}),E(y(y(n)),"renderCellRequired",function(e){var t={children:!0===e?"true":"false",textColor:!0===e?"danger":"grey-light"};return a.a.createElement(l.r.Cell,t)}),E(y(y(n)),"renderCellType",function(e,t){var r=n.props.components.tooltip,o=void 0===t?e:a.a.createElement(r,{text:t},e);return a.a.createElement(l.r.Cell,null,a.a.createElement("code",null,o))}),E(y(y(n)),"renderCellDescription",function(e){if(n.hasDescription)return void 0===e?a.a.createElement(l.r.Cell,null):a.a.createElement(l.r.Cell,null,e)}),E(y(y(n)),"renderCellDefaultValue",function(e){if(void 0===e)return a.a.createElement(l.r.Cell,{textColor:"grey-light"},a.a.createElement("em",null,"-"));var t="''"===e?"[Empty String]":e.replace(/\'/g,"");return a.a.createElement(l.r.Cell,null,a.a.createElement("code",null,t))}),E(y(y(n)),"renderRow",function(e,t){return a.a.createElement(l.r.Row,{key:e},n.renderCellName(e),n.renderCellType(t.typeName,t.typeTip),n.renderCellRequired(t.required),n.renderCellDefaultValue(t.defaultValue),n.renderCellDescription(t.description))}),n}var n,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,a.a.Component),n=t,(r=[{key:"render",value:function(){if(void 0!==this.props.props){var e=this.hasDescription?a.a.createElement("th",{style:{width:"40%"}},"Description"):void 0;return a.a.createElement(l.r,{bordered:!0,narrow:!0,hoverable:!0,fullwidth:!0},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"Property"),a.a.createElement("th",null,"Type"),a.a.createElement("th",null,"Required"),a.a.createElement("th",null,"Default"),e)),this.renderBody())}}},{key:"hasDescription",get:function(){var e=this.props.props;return void 0!==e&&Object.keys(e).some(function(t){return void 0!==e[t].description})}}])&&f(n.prototype,r),o&&f(n,o),t}(),v=Object(r.withMDXComponents)(T);function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var x={description:a.a.createElement("span",null,"the React Component or JSX Element (e.g. ",a.a.createElement("code",null,'"div"')," or"," ",a.a.createElement("code",null,"span"),") to render as"),typeName:"ReactType"},C={description:a.a.createElement("span",null,"a handle to the underlying ",a.a.createElement("code",null,"React Component")," or"," ",a.a.createElement("code",null,"JSX Element")),typeName:"Ref"},D=function(e){var t=e.asType,n=e.components,r=e.customize,o=e.docPath,i=e.name,c=e.props,s={asType:t,customize:r,docPath:o};return a.a.createElement(a.a.Fragment,null,a.a.createElement(l.u,{as:"h4",size:4},i),a.a.createElement(m,s),a.a.createElement(T,{components:n,props:c}))},O=(Object(r.withMDXComponents)(D),Object(r.withMDXComponents)(function(e){for(var t=e.component,n=e.components,r=e.customize,o=e.docPath,l=e.props,i=t.defaultProps.as,c="string"===typeof i?i:void 0!==i.displayName?i.displayName:JSON.stringify(i),s=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){_(e,t,n[t])})}return e}({as:x,ref:C},l),p=Object.keys(s),u=0;u<p.length;u++){var m=p[u],d=t.defaultProps[m];void 0!==d&&(s[m].defaultValue=JSON.stringify(d))}return a.a.createElement(D,{asType:c,components:n,customize:r,docPath:o,name:t.displayName,props:s})})),w=n("./node_modules/react-dom/index.js"),j=n.n(w);function S(e){return(S="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){P(e,t,n[t])})}return e}function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function F(e){return(F=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(e,t){return(k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function X(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var N=function(e){function t(){var e,n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var l=arguments.length,i=new Array(l),c=0;c<l;c++)i[c]=arguments[c];return r=this,o=(e=F(t)).call.apply(e,[this].concat(i)),n=!o||"object"!==S(o)&&"function"!==typeof o?X(r):o,P(X(X(n)),"ref",a.a.createRef()),P(X(X(n)),"updateHeightEnabled",!1),P(X(X(n)),"updateHeightTimeout",void 0),P(X(X(n)),"iframeRoot",void 0),P(X(X(n)),"cloneStyles",function(){if(null!==n.ref.current&&null!==n.ref.current.contentDocument){for(var e=Array.from(document.getElementsByTagName("link")),t=0;t<e.length;t++){var r=e[t];"stylesheet"===r.rel&&n.ref.current.contentDocument.head.appendChild(r.cloneNode(!0))}for(var o=Array.from(document.head.getElementsByTagName("style")),a=0;a<o.length;a++){var l=o[a];n.ref.current.contentDocument.head.appendChild(l.cloneNode(!0))}}}),P(X(X(n)),"handleLoad",function(){null!==n.ref.current&&null!==n.ref.current.contentDocument&&null!==n.ref.current.contentDocument.body&&(n.iframeRoot=n.ref.current.contentDocument.body,n.cloneStyles(),n.forceUpdate(),n.doUpdateHeight())}),P(X(X(n)),"doUpdateHeight",function(){!0!==n.props.forceHeight&&null!==n.ref.current&&null!==n.ref.current.contentDocument&&null!==n.ref.current.contentDocument.body&&(n.ref.current.style.height="".concat(n.ref.current.contentDocument.body.scrollHeight,"px")),n.updateHeight()}),P(X(X(n)),"updateHeight",function(){var e=n.props.updateHeightDelay;0!==e&&void 0!==e?(n.updateHeightEnabled=!0,n.updateHeightTimeout=setTimeout(n.doUpdateHeight,e)):n.updateHeightEnabled=!1}),n}var n,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(t,a.a.Component),n=t,(r=[{key:"componentDidMount",value:function(){null!==this.ref.current&&this.ref.current.addEventListener("load",this.handleLoad)}},{key:"componentWillUnmount",value:function(){null!==this.ref.current&&(this.ref.current.removeEventListener("load",this.handleLoad),this.updateHeightEnabled&&(this.updateHeightEnabled=!1),void 0!==this.updateHeightTimeout&&clearTimeout(this.updateHeightTimeout))}},{key:"render",value:function(){var e=this.props.children;return a.a.createElement("iframe",{ref:this.ref,sandbox:"allow-same-origin",srcDoc:"<!DOCTYPE html>",style:z({height:"0px",width:"100%"},this.props.style)},void 0!==this.iframeRoot&&null!==this.ref.current&&null!==this.ref.current.contentDocument?"function"===typeof e?j.a.createPortal(e({document:this.ref.current.contentDocument}),this.iframeRoot):j.a.createPortal(e,this.iframeRoot):void 0)}}])&&A(n.prototype,r),o&&A(n,o),t}();function R(e){return(R="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function M(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function U(e){return(U=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function L(e,t){return(L=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function H(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}P(N,"defaultProps",{forceHeight:!1,updateHeightDelay:200});var B={backgroundColor:"transparent",borderColor:"#ddd",borderStyle:"dashed",borderWidth:"1px 0 0 0"},J=function(e){function t(){var e,n,r,o,l,i,c;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var s=arguments.length,p=new Array(s),u=0;u<s;u++)p[u]=arguments[u];return r=this,n=!(o=(e=U(t)).call.apply(e,[this].concat(p)))||"object"!==R(o)&&"function"!==typeof o?H(r):o,l=H(H(n)),c=function(e,t){var n;switch(R(t)){case"boolean":n=!0===t?void 0:"{false}";break;case"number":n="{".concat(t,"}");break;case"undefined":n="{undefined}";break;default:n=JSON.stringify(t)}var r="".concat(e).concat(void 0!==n?"=".concat(n):"");return a.a.createElement("code",{key:e,style:{marginRight:"10px"}},r)},(i="renderProp")in l?Object.defineProperty(l,i,{value:c,enumerable:!0,configurable:!0,writable:!0}):l[i]=c,n}var n,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&L(e,t)}(t,a.a.Component),n=t,(r=[{key:"render",value:function(){var e=this,t=this.props,n=t.children,r=t.index,o=t.props,i=void 0!==r&&0!==r?a.a.createElement("hr",{style:B}):void 0;return a.a.createElement(l.a,null,i,a.a.createElement(l.u,{as:"h6",size:6},Object.keys(o).map(function(t){return e.renderProp(t,o[t])})),n)}}])&&M(n.prototype,r),o&&M(n,o),t}(),q=function(e){return e.map(function(e){return"string"===typeof e?'"'.concat(e,'"'):"".concat(e)}).join(" \u2502 ")};n.d(t,"b",function(){return O}),n.d(t,"f",function(){return x}),n.d(t,"h",function(){return C}),n.d(t,"a",function(){return m}),n.d(t,"c",function(){return N}),n.d(t,"d",function(){return J}),n.d(t,"e",function(){return v}),n.d(t,"g",function(){return q})},"./src/elements/form/__docs__/textarea.docs.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return E});var r=n("./node_modules/react/index.js"),o=n.n(r),a=n("./node_modules/@mdx-js/tag/dist/index.js"),l=n("./node_modules/docz/dist/index.m.js"),i=n("./src/__docs__/components/index.ts"),c=n("./src/base/helpers/variables.ts"),s=n("./src/elements/form/control.tsx"),p=n("./src/elements/form/field.tsx"),u=n("./src/elements/form/textarea.tsx");function m(e){return(m="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t){return!t||"object"!==m(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var E=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=b(this,h(t).call(this,e))).layout=null,n}var n,r,m;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,o.a.Component),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.components,n=d(e,["components"]);return o.a.createElement(a.MDXTag,{name:"wrapper",components:t},o.a.createElement(a.MDXTag,{name:"h1",components:t,props:{id:"textarea"}},"Textarea"),o.a.createElement(a.MDXTag,{name:"p",components:t},"The multiline ",o.a.createElement(a.MDXTag,{name:"strong",components:t,parentName:"p"},"textarea")," and its variations."),o.a.createElement(l.e,{__position:0,__code:'<Textarea placeholder="e.g. Hello world" />',__scope:{props:this?this.props:n,ForwardRefAsExoticComponentDoc:i.b,mapEnumerable:i.g,OptionBlock:i.d,DEFAULTS:c.a,Control:s.b,Field:p.b,Textarea:u.b,TEXTAREA_DEFAULTS:u.a}},o.a.createElement(u.b,{placeholder:"e.g. Hello world"})),o.a.createElement(a.MDXTag,{name:"p",components:t},"Using the standard ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"rows")," prop, you can adjust the number of visibile rows."),o.a.createElement(l.e,{__position:1,__code:'<Textarea rows={10} placeholder="10 lines of textarea" />',__scope:{props:this?this.props:n,ForwardRefAsExoticComponentDoc:i.b,mapEnumerable:i.g,OptionBlock:i.d,DEFAULTS:c.a,Control:s.b,Field:p.b,Textarea:u.b,TEXTAREA_DEFAULTS:u.a}},o.a.createElement(u.b,{rows:10,placeholder:"10 lines of textarea"})),o.a.createElement(a.MDXTag,{name:"h3",components:t,props:{id:"colors"}},"Colors"),o.a.createElement(a.MDXTag,{name:"p",components:t},"Use the ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"color")," prop to set the color of the ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<Textarea>"),"."),o.a.createElement(l.e,{__position:2,__code:"() =>\n  DEFAULTS.colors.map((color, i) => (\n    <OptionBlock props={{ color }} index={i} key={i}>\n      <Field>\n        <Control>\n          <Textarea color={color} placeholder={`${color} textarea`} />\n        </Control>\n      </Field>\n    </OptionBlock>\n  ))\n",__scope:{props:this?this.props:n,ForwardRefAsExoticComponentDoc:i.b,mapEnumerable:i.g,OptionBlock:i.d,DEFAULTS:c.a,Control:s.b,Field:p.b,Textarea:u.b,TEXTAREA_DEFAULTS:u.a}},function(){return c.a.colors.map(function(e,t){return o.a.createElement(i.d,{props:{color:e},index:t,key:t},o.a.createElement(p.b,null,o.a.createElement(s.b,null,o.a.createElement(u.b,{color:e,placeholder:"".concat(e," textarea")}))))})}),o.a.createElement(a.MDXTag,{name:"h3",components:t,props:{id:"sizes"}},"Sizes"),o.a.createElement(a.MDXTag,{name:"p",components:t},"Use the ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"size")," prop to set the size of the text in an ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<Textarea>"),"."),o.a.createElement(l.e,{__position:3,__code:"() => {\n  const sizes = TEXTAREA_DEFAULTS.sizes.map(size => ({ name: size, size }))\n  sizes.splice(1, 0, { name: 'normal', size: undefined })\n  return sizes.map(({ name, size }, i) => (\n    <OptionBlock props={{ size }} index={i} key={i}>\n      <Field>\n        <Control>\n          <Textarea size={size} placeholder={`${name} textarea`} />\n        </Control>\n      </Field>\n    </OptionBlock>\n  ))\n}",__scope:{props:this?this.props:n,ForwardRefAsExoticComponentDoc:i.b,mapEnumerable:i.g,OptionBlock:i.d,DEFAULTS:c.a,Control:s.b,Field:p.b,Textarea:u.b,TEXTAREA_DEFAULTS:u.a}},function(){var e=u.a.sizes.map(function(e){return{name:e,size:e}});return e.splice(1,0,{name:"normal",size:void 0}),e.map(function(e,t){var n=e.name,r=e.size;return o.a.createElement(i.d,{props:{size:r},index:t,key:t},o.a.createElement(p.b,null,o.a.createElement(s.b,null,o.a.createElement(u.b,{size:r,placeholder:"".concat(n," textarea")}))))})}),o.a.createElement(a.MDXTag,{name:"h3",components:t,props:{id:"states"}},"States"),o.a.createElement(a.MDXTag,{name:"p",components:t},"Use the ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"state")," prop to force the state of the ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<Textarea>"),"."),o.a.createElement(l.e,{__position:4,__code:"() => {\n  const states = TEXTAREA_DEFAULTS.states.map(state => ({\n    name: state,\n    state,\n  }))\n  states.splice(0, 0, { name: 'normal', size: undefined })\n  return states.map(({ name, state }, i) => (\n    <OptionBlock props={{ state }} index={i} key={i}>\n      <Field>\n        <Control>\n          <Textarea state={state} placeholder={`${name} textarea`} />\n        </Control>\n      </Field>\n    </OptionBlock>\n  ))\n}",__scope:{props:this?this.props:n,ForwardRefAsExoticComponentDoc:i.b,mapEnumerable:i.g,OptionBlock:i.d,DEFAULTS:c.a,Control:s.b,Field:p.b,Textarea:u.b,TEXTAREA_DEFAULTS:u.a}},function(){var e=u.a.states.map(function(e){return{name:e,state:e}});return e.splice(0,0,{name:"normal",size:void 0}),e.map(function(e,t){var n=e.name,r=e.state;return o.a.createElement(i.d,{props:{state:r},index:t,key:t},o.a.createElement(p.b,null,o.a.createElement(s.b,null,o.a.createElement(u.b,{state:r,placeholder:"".concat(n," textarea")}))))})}),o.a.createElement(a.MDXTag,{name:"h3",components:t,props:{id:"loading"}},"Loading"),o.a.createElement(a.MDXTag,{name:"p",components:t},"Use the ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"loading")," prop on the ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<Control>")," that contains the ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<Textarea>")," to add a loading spinner.\nYou can adjust the size of the spinner using the ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"size")," prop on the ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<Control>"),"."),o.a.createElement(l.e,{__position:5,__code:'<Field>\n  <Control size="small" loading>\n    <Textarea size="small" placeholder="small loading textarea" />\n  </Control>\n</Field>\n<Field>\n  <Control loading>\n    <Textarea placeholder="normal loading textarea" />\n  </Control>\n</Field>\n<Field>\n  <Control size="medium" loading>\n    <Textarea size="medium" placeholder="medium loading textarea" />\n  </Control>\n</Field>\n<Field>\n  <Control size="large" loading>\n    <Textarea size="large" placeholder="large loading textarea" />\n  </Control>\n</Field>',__scope:{props:this?this.props:n,ForwardRefAsExoticComponentDoc:i.b,mapEnumerable:i.g,OptionBlock:i.d,DEFAULTS:c.a,Control:s.b,Field:p.b,Textarea:u.b,TEXTAREA_DEFAULTS:u.a}},o.a.createElement(p.b,null,o.a.createElement(s.b,{size:"small",loading:!0},o.a.createElement(u.b,{size:"small",placeholder:"small loading textarea"}))),o.a.createElement(p.b,null,o.a.createElement(s.b,{loading:!0},o.a.createElement(u.b,{placeholder:"normal loading textarea"}))),o.a.createElement(p.b,null,o.a.createElement(s.b,{size:"medium",loading:!0},o.a.createElement(u.b,{size:"medium",placeholder:"medium loading textarea"}))),o.a.createElement(p.b,null,o.a.createElement(s.b,{size:"large",loading:!0},o.a.createElement(u.b,{size:"large",placeholder:"large loading textarea"})))),o.a.createElement(a.MDXTag,{name:"h3",components:t,props:{id:"disabled"}},"Disabled"),o.a.createElement(a.MDXTag,{name:"p",components:t},"Use the standard ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"disabled")," prop to disable a ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<Textarea>"),"."),o.a.createElement(l.e,{__position:6,__code:'<Control>\n  <Textarea placeholder="Disabled textarea" disabled />\n</Control>',__scope:{props:this?this.props:n,ForwardRefAsExoticComponentDoc:i.b,mapEnumerable:i.g,OptionBlock:i.d,DEFAULTS:c.a,Control:s.b,Field:p.b,Textarea:u.b,TEXTAREA_DEFAULTS:u.a}},o.a.createElement(s.b,null,o.a.createElement(u.b,{placeholder:"Disabled textarea",disabled:!0}))),o.a.createElement(a.MDXTag,{name:"h3",components:t,props:{id:"read-only"}},"Read-only"),o.a.createElement(a.MDXTag,{name:"p",components:t},"Use the standard ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"readOnly")," prop to make a ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<Textarea>")," read-only."),o.a.createElement(l.e,{__position:7,__code:'<Control>\n  <Textarea placeholder="Read-only textarea" readOnly />\n</Control>',__scope:{props:this?this.props:n,ForwardRefAsExoticComponentDoc:i.b,mapEnumerable:i.g,OptionBlock:i.d,DEFAULTS:c.a,Control:s.b,Field:p.b,Textarea:u.b,TEXTAREA_DEFAULTS:u.a}},o.a.createElement(s.b,null,o.a.createElement(u.b,{placeholder:"Read-only textarea",readOnly:!0}))),o.a.createElement(a.MDXTag,{name:"h3",components:t,props:{id:"fixed-size"}},"Fixed-size"),o.a.createElement(a.MDXTag,{name:"p",components:t},"Use the ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"fixedSize")," prop of a ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<Textarea>")," to remove the user's ability to resize the textarea."),o.a.createElement(l.e,{__position:8,__code:'<Control>\n  <Textarea placeholder="Fixed-size textarea" fixedSize />\n</Control>',__scope:{props:this?this.props:n,ForwardRefAsExoticComponentDoc:i.b,mapEnumerable:i.g,OptionBlock:i.d,DEFAULTS:c.a,Control:s.b,Field:p.b,Textarea:u.b,TEXTAREA_DEFAULTS:u.a}},o.a.createElement(s.b,null,o.a.createElement(u.b,{placeholder:"Fixed-size textarea",fixedSize:!0}))),o.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"api"}},"API"),o.a.createElement(i.b,{component:u.b,customize:!0,docPath:"/form/textarea",props:{color:{description:"change the textarea's color",typeName:"string",typeTip:Object(i.g)(c.a.colors)},fixedSize:{description:"remove the drag handle from the textarea",typeName:"boolean"},size:{description:"change the textarea's size",typeName:"string",typeTip:Object(i.g)(u.a.sizes)},state:{description:"change the textarea's state",typeName:"string",typeTip:Object(i.g)(u.a.states)}}}))}}])&&f(n.prototype,r),m&&f(n,m),t}()}}]);
//# sourceMappingURL=src-elements-form-docs-textarea-docs.e2053d6aa30b0b91e958.js.map