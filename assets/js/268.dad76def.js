(window.webpackJsonp=window.webpackJsonp||[]).push([[268],{707:function(t,s,a){"use strict";a.r(s);var n=a(44),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"requestcontext"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requestcontext"}},[t._v("#")]),t._v(" RequestContext "),a("Badge",{attrs:{text:"Class",type:"class"}})],1),t._v(" "),a("section",{staticClass:"symbol-info"},[a("table",{staticClass:"is-full-width"},[a("tbody",[a("tr",[a("th",[t._v("Module")]),a("td",[a("div",{staticClass:"lang-typescript"},[a("span",{staticClass:"token keyword"},[t._v("import")]),t._v(" { RequestContext } "),a("span",{staticClass:"token keyword"},[t._v("from")]),t._v(" "),a("span",{staticClass:"token string"},[t._v('"@tsed/common"')])])])]),a("tr",[a("th",[t._v("Source")]),a("td",[a("a",{attrs:{href:"https://github.com/TypedProject/tsed/blob/v5.58.0/packages/common/src/platform/domain/RequestContext.ts#L0-L0"}},[t._v("/packages/common/src/platform/domain/RequestContext.ts")])])])])])]),t._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),a("div",{staticClass:"language-typescript"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" RequestContext "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" Map<"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),t._v("> "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    /**\n     * "),a("a",{pre:!0,attrs:{href:"/api/common/mvc/decorators/params/Request.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("Request")])]),t._v(" id generated by @@contextMiddleware@@.\n     *\n     * "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" tip\n     * By default Ts.ED generate uuid like that `"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("uuidv4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("."),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("/-/gi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(' ""'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("`.\n     * Dash are removed to simplify tracking logs in Kibana\n     * "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n     *\n     * "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" tip\n     * "),a("a",{pre:!0,attrs:{href:"/api/common/mvc/decorators/params/Request.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("Request")])]),t._v(" id can by customized by changing the server configuration.\n     *\n     * ```typescript\n     * @"),a("span",{pre:!0,attrs:{class:"token function"}},[a("a",{pre:!0,attrs:{href:"/api/common/platform-express/decorators/ServerSettings.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("ServerSettings")])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     *   logger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     *     reqIdBuilder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" createUniqId // give your own id generator function\n     *   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n     * "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n     * "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" Server "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     *\n     * "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n     * ```\n     * "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n     *\n     */\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("readonly")]),t._v(" id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Date")]),t._v(" when request have been handled by the server. @@"),a("a",{pre:!0,attrs:{href:"/api/common/platform/domain/RequestLogger.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("RequestLogger")])]),t._v("@@ use this date to log request duration.\n     */\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("readonly")]),t._v(" dateStart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * The request container used by the Ts.ED DI. It contain all services annotated with `@"),a("span",{pre:!0,attrs:{class:"token function"}},[a("a",{pre:!0,attrs:{href:"/api/di/decorators/Scope.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("Scope")])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("a",{pre:!0,attrs:{href:"/api/di/interfaces/ProviderScope.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("ProviderScope")])]),t._v(".REQUEST"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("`\n     */\n    container"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("a",{pre:!0,attrs:{href:"/api/di/class/LocalsContainer.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("LocalsContainer")])]),t._v("<"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),t._v(">"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * The current @@"),a("a",{pre:!0,attrs:{href:"/api/common/mvc/models/EndpointMetadata.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("EndpointMetadata")])]),t._v("@@ resolved by Ts.ED during the request.\n     */\n    endpoint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("a",{pre:!0,attrs:{href:"/api/common/mvc/models/EndpointMetadata.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("EndpointMetadata")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * The data return by the previous endpoint if you use multiple handler on the same route. By default data is empty.\n     */\n    data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * Logger attached to the context request.\n     */\n    logger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("a",{pre:!0,attrs:{href:"/api/common/platform/domain/RequestLogger.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("RequestLogger")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    injector"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("a",{pre:!0,attrs:{href:"/api/di/services/InjectorService.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("InjectorService")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("constructor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" injector"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" logger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ...options "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("a",{pre:!0,attrs:{href:"/api/common/platform/domain/IRequestContextOptions.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("IRequestContextOptions")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("destroy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Promise<"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(">"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("emit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("eventName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ...args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Promise<"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(">"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);