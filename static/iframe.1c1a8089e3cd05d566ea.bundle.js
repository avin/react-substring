(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{428:function(e,n,t){"use strict";t.d(n,"a",function(){return T});var a=t(56),r=t.n(a),s=t(4),o=t.n(s),i=t(6),c=t.n(i),u=t(12),l=t.n(u),p=t(13),m=t.n(p),d=t(14),f=t.n(d),g=t(7),h=t.n(g),y=t(2),v=t.n(y),b=t(429),E=t.n(b),O=t(0),S=t.n(O),T=function(e){function n(){return o()(this,n),l()(this,m()(n).apply(this,arguments))}return f()(n,e),c()(n,[{key:"processContent",value:function(e,n){var t=[e],a=0;return n.forEach(function(e){var n=e.match,s=e.component,o=e.caseSensitive,i=e.props;i=i||{},s=s||"mark",Array.isArray(n)||(n=[n]),n.forEach(function(e){var n=[];t.forEach(function(t){if("string"==typeof t){if("string"==typeof e){var c="g";!0!==o&&(c+="i"),e=new RegExp(E()(e),c)}for(var u,l=0,p=0;u=e.exec(t);){var m=u.index,d=e.lastIndex,f=t.slice(l,m);f&&n.push(f);var g=t.slice(m,d);l=d,p=d,n.push(v.a.createElement(s,r()({key:a++},i),g))}var h=t.slice(p);h&&n.push(h)}else n.push(t)}),t=n})}),t}},{key:"render",value:function(){var e=this.props,n=e.children,t=e.substrings,a=e.className,r=e.style,s=e.outerTagName;return v.a.createElement(s,{className:a,style:r},this.processContent(n,t))}}]),n}(v.a.PureComponent);h()(T,"propTypes",{children:S.a.string,substrings:S.a.arrayOf(S.a.shape({match:S.a.oneOfType([S.a.instanceOf(RegExp),S.a.string,S.a.arrayOf(S.a.oneOfType([S.a.instanceOf(RegExp),S.a.string]))]).isRequired,component:S.a.oneOfType([S.a.string,S.a.func]),caseSensitive:S.a.bool,props:S.a.object})).isRequired,outerTagName:S.a.string,style:S.a.object,className:S.a.object}),h()(T,"defaultProps",{outerTagName:"span"}),T.__docgenInfo={description:"",methods:[{name:"processContent",docblock:null,modifiers:[],params:[{name:"content",type:null},{name:"substrings",type:null}],returns:null}],displayName:"Substring",props:{outerTagName:{defaultValue:{value:"'span'",computed:!1},type:{name:"string"},required:!1,description:"Tag name passed to document.createElement to create the outer container element."},children:{type:{name:"string"},required:!1,description:"Main content as string"},substrings:{type:{name:"arrayOf",value:{name:"shape",value:{match:{name:"union",value:[{name:"instanceOf",value:"RegExp"},{name:"string"},{name:"arrayOf",value:{name:"union",value:[{name:"instanceOf",value:"RegExp"},{name:"string"}]}}],description:"Pattern to search substrings for processing",required:!0},component:{name:"union",value:[{name:"string"},{name:"func"}],description:"React component or tag name taking matching content. (Default tag `mark`)",required:!1},caseSensitive:{name:"bool",description:"If use match as string - it allows to switch on case sensitive search substring (Default: `false`)",required:!1},props:{name:"object",description:"Additional props for matching component (can use `style`, `className` or something else)",required:!1}}}},required:!0,description:"Array on Substring objects"},style:{type:{name:"object"},required:!1,description:"Optional inline style to attach to outermost element."},className:{type:{name:"object"},required:!1,description:"Optional CSS class to attach to outermost element."}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\index.js"]={name:"Substring",docgenInfo:T.__docgenInfo,path:"src\\index.js"})},430:function(e,n,t){t(164),t(431),e.exports=t(432)},432:function(e,n,t){"use strict";t.r(n),function(e){var n=t(162);t(445);Object(n.configure)(function(){t(450)},e)}.call(this,t(263)(e))},445:function(e,n,t){var a=t(446);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(448)(a,r);a.locals&&(e.exports=a.locals)},446:function(e,n,t){(e.exports=t(447)(!1)).push([e.i,"",""])},450:function(e,n,t){"use strict";t.r(n),function(e){var n=t(2),a=t.n(n),r=t(162),s=t(428),o=function(e){var n=e.children;return a.a.createElement("span",null,n.toUpperCase())},i=function(e){var n=e.children;return a.a.createElement("span",{style:{color:"red"}},n)},c=function(e){var n=e.children;return a.a.createElement("span",{style:{color:"lightgreen"}},n)};Object(r.storiesOf)("react-substring",e).add("simple-demo",function(){return a.a.createElement("div",{className:"container"},a.a.createElement("div",null,a.a.createElement("span",null,a.a.createElement(s.a,{substrings:[{match:/This/gi,component:"b"},{match:/sample/gi,component:i},{match:/show/gi,component:c},{match:/Just/g},{match:"string",caseSensitive:!0,component:o},{match:["you","works"],props:{style:{backgroundColor:"red"}}}]},"This is sample [string String stRing]! Just to show you how it works."))))})}.call(this,t(263)(e))}},[[430,2,4]]]);
//# sourceMappingURL=iframe.1c1a8089e3cd05d566ea.bundle.js.map