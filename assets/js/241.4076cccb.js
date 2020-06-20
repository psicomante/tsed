(window.webpackJsonp=window.webpackJsonp||[]).push([[241],{679:function(t,s,a){"use strict";a.r(s);var r=a(44),e=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"expressrouter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#expressrouter"}},[t._v("#")]),t._v(" ExpressRouter "),a("Badge",{attrs:{text:"Decorator",type:"decorator"}})],1),t._v(" "),a("section",{staticClass:"symbol-info"},[a("table",{staticClass:"is-full-width"},[a("tbody",[a("tr",[a("th",[t._v("Module")]),a("td",[a("div",{staticClass:"lang-typescript"},[a("span",{staticClass:"token keyword"},[t._v("import")]),t._v(" { ExpressRouter } "),a("span",{staticClass:"token keyword"},[t._v("from")]),t._v(" "),a("span",{staticClass:"token string"},[t._v('"@tsed/common"')])])])]),a("tr",[a("th",[t._v("Source")]),a("td",[a("a",{attrs:{href:"https://github.com/TypedProject/tsed/blob/v5.58.0/packages/common/src/platform-express/decorators/ExpressRouter.ts#L0-L0"}},[t._v("/packages/common/src/platform-express/decorators/ExpressRouter.ts")])])])])])]),t._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),a("div",{staticClass:"language-typescript"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("type ExpressRouter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(" = ")]),t._v("Express.Router & "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("a",{pre:!0,attrs:{href:"/api/core/interfaces/Type.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("Type")])]),t._v("<"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),t._v(">"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" targetKey"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" descriptor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" TypedPropertyDescriptor<Function> | "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n/**\n * "),a("a",{pre:!0,attrs:{href:"/api/di/decorators/Inject.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("Inject")])]),t._v(" the ExpressRouter "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Express.Router"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" instance.\n *\n * ### "),a("a",{pre:!0,attrs:{href:"/api/swagger/decorators/Example.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("Example")])]),t._v("\n *\n * ```typescript\n * "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("ExpressRouter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("a",{pre:!0,attrs:{href:"/api/di/decorators/Service.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("Service")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(' "@tsed/common"'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n *\n * @"),a("span",{pre:!0,attrs:{class:"token function"}},[a("a",{pre:!0,attrs:{href:"/api/common/mvc/decorators/class/Controller.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("Controller")])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v('"/"'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n * "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" default "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" OtherService "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n *    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("constructor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("@ExpressRouter router"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ExpressRouter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n * "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n * ```\n *\n * @param "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("a",{pre:!0,attrs:{href:"/api/core/interfaces/Type.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("Type")])]),t._v("<"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),t._v(">"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" target\n * @param "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" targetKey\n * @param "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("TypedPropertyDescriptor<Function> | "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" descriptor\n * @returns "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n * @decorator\n * @deprecated "),a("a",{pre:!0,attrs:{href:"/api/common/mvc/decorators/method/Use.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("Use")])]),t._v(" "),a("a",{pre:!0,attrs:{href:"/api/common/platform/services/PlatformRouter.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("PlatformRouter")])]),t._v(" instead of.\n */\nfunction "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ExpressRouter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("a",{pre:!0,attrs:{href:"/api/core/interfaces/Type.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("Type")])]),t._v("<"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),t._v(">"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" targetKey"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" descriptor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" TypedPropertyDescriptor<Function> | "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])]),t._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),a("div",{pre:!0},[a("p",[t._v("Inject the ExpressRouter (Express.Router) instance.")]),t._v(" "),a("h3",{pre:!0,attrs:{id:"example"}},[a("a",{pre:!0,attrs:{class:"header-anchor",href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("div",{pre:!0,attrs:{class:"language-typescript line-numbers-mode"}},[a("pre",{pre:!0,attrs:{"v-pre":"",class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("ExpressRouter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@tsed/common"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n@"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Controller")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OtherService")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("constructor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("@ExpressRouter router"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ExpressRouter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{pre:!0,attrs:{class:"line-numbers-wrapper"}},[a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("1")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("2")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("3")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("4")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("5")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("6")]),a("br")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);