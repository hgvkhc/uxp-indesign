"use strict";(self.webpackChunkuxp_indesign=self.webpackChunkuxp_indesign||[]).push([[97],{99539:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return p},default:function(){return h}});var o=t(87462),i=t(45987),a=(t(15007),t(64983)),r=t(91515);const l=["components"],p={},s=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.mdx)("div",n)},d=s("InlineAlert"),m=s("CodeBlock"),u={_frontmatter:p},c=r.Z;function h(e){let{components:n}=e,t=(0,i.Z)(e,l);return(0,a.mdx)(c,(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"plugin-lifecycle-events"},"Plugin Lifecycle events"),(0,a.mdx)("p",null,"You can detect whether or not your plugin panel is visible with the help of UXP APIs"),(0,a.mdx)(d,{variant:"warning",slots:"text1, text2, text3",mdxType:"InlineAlert"}),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"IMPORTANT")),(0,a.mdx)("p",null,"This is only applicable to plugins with a panel. You cannot detect the execution of a command plugin via these hooks.\nFamiliarize yourself with ",(0,a.mdx)("a",{parentName:"p",href:"../../concepts/entry-points/"},"plugin entrypoints")," to know the difference between a command and a panel plugin."),(0,a.mdx)("p",null,"Also, for plugins that have multiple panels, you cannot differentiate between them, at present. "),(0,a.mdx)("h2",{id:"example"},"Example"),(0,a.mdx)(m,{slots:"heading, code",repeat:"2",languages:"JavaScript, JSON",mdxType:"CodeBlock"}),(0,a.mdx)("h4",{id:"javascript"},"JavaScript"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"const entrypoints = require(\"uxp\").entrypoints;\nentrypoints.setup({\n  panels: {\n    \"mainPanel\": {\n      create(rootNode) {\n        return new Promise(function (resolve, reject) {\n          console.log('Plugin panel created');\n          resolve();\n        });\n      },\n      destroy(rootNode) {\n        return new Promise(function (resolve, reject) {\n          console.log('Destroy panel');\n          resolve();\n        });\n      }\n    }\n  }\n});\n")),(0,a.mdx)("h4",{id:"manifest"},"manifest"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  /**/\n  "entrypoints": [{\n      "type": "panel",\n      "id": "mainPanel",\n      "label": "My plugin",\n      "minimumSize": {\n          "width": 400,\n          "height": 400\n      },\n      "maximumSize": {\n          "width": 800,\n          "height": 800\n      },\n      "preferredDockedSize": {\n          "width": 400,\n          "height": 400\n      },\n      "preferredFloatingSize": {\n          "width": 600,\n          "height": 600\n      }\n  }]\n}\n')))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-plugins-tutorials-plugin-lifecycle-hooks-index-md-1a6f92d048cb86033511.js.map