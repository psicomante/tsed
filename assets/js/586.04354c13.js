(window.webpackJsonp=window.webpackJsonp||[]).push([[586],{1025:function(s,t,a){"use strict";a.r(t);var e=a(44),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"socketmiddleware"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#socketmiddleware"}},[s._v("#")]),s._v(" SocketMiddleware "),a("Badge",{attrs:{text:"Decorator",type:"decorator"}})],1),s._v(" "),a("section",{staticClass:"symbol-info"},[a("table",{staticClass:"is-full-width"},[a("tbody",[a("tr",[a("th",[s._v("Module")]),a("td",[a("div",{staticClass:"lang-typescript"},[a("span",{staticClass:"token keyword"},[s._v("import")]),s._v(" { SocketMiddleware } "),a("span",{staticClass:"token keyword"},[s._v("from")]),s._v(" "),a("span",{staticClass:"token string"},[s._v('"@tsed/socketio"')])])])]),a("tr",[a("th",[s._v("Source")]),a("td",[a("a",{attrs:{href:"https://github.com/TypedProject/tsed/blob/v5.58.0/packages/socketio/src/decorators/socketMiddleware.ts#L0-L0"}},[s._v("/packages/socketio/src/decorators/socketMiddleware.ts")])])])])])]),s._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[s._v("#")]),s._v(" Overview")]),s._v(" "),a("div",{staticClass:"language-typescript"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[s._v("function "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("SocketMiddleware")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Function"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])]),s._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[s._v("#")]),s._v(" Description")]),s._v(" "),a("div",{pre:!0},[a("p",[s._v("Declare a new SocketMiddleware.")]),s._v(" "),a("h3",{pre:!0,attrs:{id:"example"}},[a("a",{pre:!0,attrs:{class:"header-anchor",href:"#example"}},[s._v("#")]),s._v(" Example")]),s._v(" "),a("p",[s._v("A middleware can be also used on a "),a("code",[s._v("SocketService")]),s._v(" either on a class or on a method.")]),s._v(" "),a("p",[s._v("Here an example of a middleware:")]),s._v(" "),a("div",{pre:!0,attrs:{class:"language-typescript line-numbers-mode"}},[a("pre",{pre:!0,attrs:{"v-pre":"",class:"language-typescript"}},[a("code",[s._v("@"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("SocketMiddleware")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("UserConverterSocketMiddleware")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("constructor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" converterService"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" ConverterService")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("async")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("@"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Args")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" args"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// update Arguments")]),s._v("\n        user "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("converterService"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("deserialize")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" User"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{pre:!0,attrs:{class:"line-numbers-wrapper"}},[a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("1")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("2")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("3")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("4")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("5")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("6")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("7")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("8")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("9")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("10")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("11")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("12")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("13")]),a("br")])]),a("blockquote",[a("p",[s._v("The user instance will be forwarded to the next middleware and to your decorated method.")])]),s._v(" "),a("p",[s._v("Then:")]),s._v(" "),a("div",{pre:!0,attrs:{class:"language-typescript line-numbers-mode"}},[a("pre",{pre:!0,attrs:{"v-pre":"",class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("SocketService"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" SocketUseAfter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" SocketUseBefore"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Emit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Input"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@tsed/socketio"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("UserConverterSocketMiddleware"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"../middlewares"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("User"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"../models/User"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n@"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("SocketService")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/my-namespace"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n@"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("SocketUseBefore")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("UserConverterSocketMiddleware"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// global version")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MySocketService")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n   @"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Input")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"eventName"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n   @"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Emit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"responseEventName"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// or Broadcast or BroadcastOthers")]),s._v("\n   @"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("SocketUseBefore")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("UserConverterSocketMiddleware"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("async")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("myMethod")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("@"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Args")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" user"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" User")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n       "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("console")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n       "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{pre:!0,attrs:{class:"line-numbers-wrapper"}},[a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("1")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("2")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("3")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("4")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("5")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("6")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("7")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("8")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("9")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("10")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("11")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("12")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("13")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("14")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("15")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("16")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("17")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("18")]),a("br")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);