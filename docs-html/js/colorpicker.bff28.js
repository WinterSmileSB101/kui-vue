/*! kui-vue v1.8.8 by chuchur (c) 2018 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{"/N+f":function(t,e,n){"use strict";n.r(e);var o=n("ZJgF"),a=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);e.default=a.a},"2RRQ":function(t,e,n){"use strict";n.r(e);var o=n("yapp"),a=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);e.default=a.a},AGwT:function(t,e,n){"use strict";n.r(e);var o=n("QKlc"),a=n("2RRQ");for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);var s=n("KHd+"),r=Object(s.a)(a.default,o.a,o.b,!1,null,null,null);e.default=r.exports},O8AV:function(t,e,n){"use strict";n.r(e);var o=n("aO0F"),a=n("/N+f");for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);var s=n("KHd+"),r=Object(s.a)(a.default,o.a,o.b,!1,null,null,null);e.default=r.exports},QKlc:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"resize",rawName:"v-resize",value:t.setHeight,expression:"setHeight"}],ref:"dom",class:t.classes,style:t.styles},[n("div",{ref:"demo",staticClass:"k-demo-main"},[n("div",{staticClass:"k-content"},[t._t("content")],2),t._v(" "),n("div",{staticClass:"k-desc"},[n("a",{staticClass:"k-desc-title"},[t._v(t._s(t.title))]),t._v(" "),n("div",{staticClass:"k-desc-content"},[t._t("desc")],2),t._v(" "),n("a",{staticClass:"k-code-expan",on:{click:t.toggle}},[n("Icon",{attrs:{type:t.icons}})],1)])]),t._v(" "),n("div",{staticClass:"k-demo-line"}),t._v(" "),n("Collapse",[n("Code",{directives:[{name:"show",rawName:"v-show",value:t.expand,expression:"expand"}],ref:"code",attrs:{lang:t.lang}},[t._t("code")],2)],1)],1)},a=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return a})},ZJgF:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o,a=n("ZNdt"),i=(o=a)&&o.__esModule?o:{default:o};e.default={components:{Demo:i.default},data:function(){return{defaultColor:"#eeece1",base:'<ColorPicker v-model="defaultColor"></ColorPicker>'}}}},ZNdt:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o,a=n("AGwT"),i=(o=a)&&o.__esModule?o:{default:o};e.default=i.default},aO0F:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("ColorPicker 颜色")]),t._v(" "),n("Alert",[t._v("注意：非 template/render 模式下，需使用 color-picker。")]),t._v(" "),n("h3",[t._v("代码示例")]),t._v(" "),n("Demo",{attrs:{title:"基础用法"}},[n("div",{attrs:{slot:"content"},slot:"content"},[n("p",[t._v(t._s(t.defaultColor))]),t._v(" "),n("ColorPicker",{model:{value:t.defaultColor,callback:function(e){t.defaultColor=e},expression:"defaultColor"}})],1),t._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("数据模型是从offce 颜色组件扒下来的。")]),t._v(" "),n("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.base))])]),t._v(" "),n("h3",[t._v("API")]),t._v(" "),t._m(0)],1)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"table-border"},[n("table",[n("tr",[n("th",[t._v("属性")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("默认值")])]),t._v(" "),n("tr",[n("td",[t._v("value")]),t._v(" "),n("td",[t._v("绑定的值，可使用 v-model 双向绑定")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("'#000000'")])]),t._v(" "),n("tr",[n("td",[t._v("transfer")]),t._v(" "),n("td",[t._v("是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[t._v("false")])]),t._v(" "),n("tr",[n("td",[t._v("change")]),t._v(" "),n("td",[t._v("当绑定值变化时触发，返回当前值")]),t._v(" "),n("td",[t._v("Function")]),t._v(" "),n("td",[t._v("-")])])])])}];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return a})},yapp:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=r(n("YEIV")),a=r(n("w3Nn")),i=r(n("Ff65")),s=r(n("7+I9"));function r(t){return t&&t.__esModule?t:{default:t}}e.default={directives:{resize:s.default},components:{Code:a.default,Collapse:i.default},name:"Demo",props:{layout:{type:String,default:"vertical"},title:String,lang:String},data:function(){return{domHeight:0,demoHeight:0,codeHeight:"0",expand:!1}},computed:{icons:function(){return this.expand?"code-working":"code"},classes:function(){return["k-demo",(0,o.default)({},"k-demo-"+this.layout,this.layout)]},styles:function(){return"horizontal"==this.layout?{height:this.expand?this.domHeight+"px":this.demoHeight+"px"}:{}},codeStyles:function(){return"horizontal"==this.layout?{}:{height:""+this.codeHeight}}},methods:{setHeight:function(){"horizontal"==this.layout&&(this.domHeight=this.$refs.dom.scrollHeight,this.demoHeight=this.$refs.demo.scrollHeight)},toggle:function(){var t=this.expand;this.expand=!t,"vertical"==this.layout&&(this.codeHeight=this.expand?"auto":0)}},mounted:function(){this.setHeight()}}}}]);