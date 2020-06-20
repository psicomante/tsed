(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{491:function(n,a,s){"use strict";s.r(a);var t=s(44),e=Object(t.a)({},(function(){var n=this,a=n.$createElement,s=n._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("h1",{attrs:{id:"converterservice"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#converterservice"}},[n._v("#")]),n._v(" ConverterService "),s("Badge",{attrs:{text:"Service",type:"service"}})],1),n._v(" "),s("section",{staticClass:"symbol-info"},[s("table",{staticClass:"is-full-width"},[s("tbody",[s("tr",[s("th",[n._v("Module")]),s("td",[s("div",{staticClass:"lang-typescript"},[s("span",{staticClass:"token keyword"},[n._v("import")]),n._v(" { ConverterService } "),s("span",{staticClass:"token keyword"},[n._v("from")]),n._v(" "),s("span",{staticClass:"token string"},[n._v('"@tsed/common"')])])])]),s("tr",[s("th",[n._v("Source")]),s("td",[s("a",{attrs:{href:"https://github.com/TypedProject/tsed/blob/v5.58.0/packages/common/src/converters/services/ConverterService.ts#L0-L0"}},[n._v("/packages/common/src/converters/services/ConverterService.ts")])])])])])]),n._v(" "),s("h2",{attrs:{id:"overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[n._v("#")]),n._v(" Overview")]),n._v(" "),s("div",{staticClass:"language-typescript"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("class")]),n._v(" ConverterService "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n"),s("div",{pre:!0,attrs:{class:"language- extra-class"}},[s("pre",[s("code",[n._v('<span class="token keyword">constructor</span><span class="token punctuation">(</span>injectorService<span class="token punctuation">:</span> <a href="/api/di/services/InjectorService.html"><span class="token">InjectorService</span></a><span class="token punctuation">,</span> configuration<span class="token punctuation">:</span> <a href="/api/di/decorators/Configuration.html"><span class="token">Configuration</span></a><span class="token punctuation">)</span><span class="token punctuation">;</span>\n/**\n * Return a JsonMetadata for a properties.\n * @param properties\n * @param propertyKey\n * @returns <span class="token punctuation">{</span>undefined|V|<span class="token keyword">string</span>|<span class="token keyword">any</span>|T|IDBRequest<span class="token punctuation">}</span>\n */\n<span class="token keyword">static</span> <span class="token function">getPropertyMetadata</span><span class="token punctuation">(</span>properties<span class="token punctuation">:</span> Map&lt;<span class="token keyword">string</span> | symbol<span class="token punctuation">,</span> <a href="/api/common/jsonschema/class/PropertyMetadata.html"><span class="token">PropertyMetadata</span></a>&gt;<span class="token punctuation">,</span> propertyKey<span class="token punctuation">:</span> <span class="token keyword">string</span> | symbol<span class="token punctuation">)</span><span class="token punctuation">:</span> <a href="/api/common/jsonschema/class/PropertyMetadata.html"><span class="token">PropertyMetadata</span></a> | undefined<span class="token punctuation">;</span>\n/**\n * Convert instance to plainObject.\n *\n * ### <a href="/api/common/mvc/decorators/method/Options.html"><span class="token">Options</span></a>\n *\n * - `checkRequiredValue`<span class="token punctuation">:</span> Disable the required check condition.\n *\n * @param obj\n * @param options\n */\n<span class="token function">serialize</span><span class="token punctuation">(</span>obj<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">,</span> options?<span class="token punctuation">:</span> <a href="/api/common/converters/interfaces/IConverterOptions.html"><span class="token">IConverterOptions</span></a><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">;</span>\n/**\n *\n * @param obj\n * @param <span class="token punctuation">{</span><a href="/api/common/converters/interfaces/IConverterOptions.html"><span class="token">IConverterOptions</span></a><span class="token punctuation">}</span> options\n * @returns <span class="token punctuation">{</span><span class="token keyword">any</span><span class="token punctuation">}</span>\n */\n<span class="token function">serializeClass</span><span class="token punctuation">(</span>obj<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">,</span> options?<span class="token punctuation">:</span> <a href="/api/common/converters/interfaces/IConverterOptions.html"><span class="token">IConverterOptions</span></a><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">;</span>\n/**\n * Convert a plainObject to targetType.\n *\n * ### <a href="/api/common/mvc/decorators/method/Options.html"><span class="token">Options</span></a>\n *\n * - `ignoreCallback`<span class="token punctuation">:</span> callback called for each object which will be deserialized. The callback can return a <span class="token keyword">boolean</span> to avoid the default converter behavior.\n * - `checkRequiredValue`<span class="token punctuation">:</span> Disable the required check condition.\n *\n * @param obj Object source that will be deserialized\n * @param targetType <a href="/api/common/jsonschema/decorators/Pattern.html"><span class="token">Pattern</span></a> of the object deserialized\n * @param baseType\n * @param options\n * @returns <span class="token punctuation">{</span><span class="token keyword">any</span><span class="token punctuation">}</span>\n */\n<span class="token function">deserialize</span><span class="token punctuation">(</span>obj<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">,</span> targetType<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">,</span> baseType?<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">,</span> options?<span class="token punctuation">:</span> <a href="/api/common/converters/interfaces/IConverterOptions.html"><span class="token">IConverterOptions</span></a><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">;</span>\n/**\n *\n * @param targetType\n * @returns <span class="token punctuation">{</span><span class="token keyword">any</span><span class="token punctuation">}</span>\n */\ngetConverter&lt;T <span class="token keyword">extends</span> <a href="/api/common/converters/interfaces/IConverter.html"><span class="token">IConverter</span></a>&gt;<span class="token punctuation">(</span>targetType<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">)</span><span class="token punctuation">:</span> T | undefined<span class="token punctuation">;</span>\n/**\n *\n * @param <span class="token punctuation">{</span><a href="/api/core/interfaces/Type.html"><span class="token">Type</span></a>&lt;<span class="token keyword">any</span>&gt;<span class="token punctuation">}</span> target\n * @returns <span class="token punctuation">{</span>"error" | "accept" | "ignore"<span class="token punctuation">}</span>\n */\n<span class="token function">getAdditionalPropertiesLevel</span><span class="token punctuation">(</span>target<span class="token punctuation">:</span> <a href="/api/core/interfaces/Type.html"><span class="token">Type</span></a>&lt;<span class="token keyword">any</span>&gt;<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token string">"error"</span> | "accept" | "ignore" | undefined<span class="token punctuation">;</span>\n/**\n *\n * @param obj\n * @param instance\n * @param <span class="token punctuation">{</span><span class="token keyword">string</span><span class="token punctuation">}</span> propertyName\n * @param <span class="token punctuation">{</span><a href="/api/common/jsonschema/class/PropertyMetadata.html"><span class="token">PropertyMetadata</span></a><span class="token punctuation">}</span> propertyMetadata\n * @param options\n */\n\n/**\n * @deprecated\n * @param instance\n * @param <span class="token punctuation">{</span>Map&lt;<span class="token keyword">string</span> | symbol<span class="token punctuation">,</span> <a href="/api/common/jsonschema/class/PropertyMetadata.html"><span class="token">PropertyMetadata</span></a>&gt;<span class="token punctuation">}</span> properties\n */\n\n/**\n *\n * @param instance\n * @param <span class="token punctuation">{</span><span class="token keyword">string</span><span class="token punctuation">}</span> propertyKey\n * @param <span class="token punctuation">{</span><a href="/api/common/jsonschema/class/PropertyMetadata.html"><span class="token">PropertyMetadata</span></a> | undefined<span class="token punctuation">}</span> propertyMetadata\n * @param options\n */\n')])])]),s("p",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")])])])])]),s("p")])}),[],!1,null,null,null);a.default=e.exports}}]);