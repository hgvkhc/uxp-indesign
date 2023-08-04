"use strict";(self.webpackChunkuxp_indesign=self.webpackChunkuxp_indesign||[]).push([[3571],{42801:function(e,a,i){i.r(a),i.d(a,{_frontmatter:function(){return o},default:function(){return g}});var t=i(87462),n=i(45987),s=(i(15007),i(64983)),p=i(91515);const d=["components"],o={},c=(r="InlineAlert",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.mdx)("div",e)});var r;const l={_frontmatter:o},m=p.Z;function g(e){let{components:a}=e,i=(0,n.Z)(e,d);return(0,s.mdx)(m,(0,t.Z)({},l,i,{components:a,mdxType:"MDXLayout"}),(0,s.mdx)("h1",{id:"packaging"},"Packaging"),(0,s.mdx)("p",null,"As the first step, you need to prepare your script or plugin for sharing."),(0,s.mdx)("h2",{id:"scripts"},"Scripts"),(0,s.mdx)("p",null,"Preparing your scripts for sharing needs no additional steps. The ",(0,s.mdx)("inlineCode",{parentName:"p"},".idjs")," file can be shared as it is with other developers and users."),(0,s.mdx)("h2",{id:"plugins"},"Plugins"),(0,s.mdx)("p",null,"UXP plugins are distributed in the form of a ",(0,s.mdx)("inlineCode",{parentName:"p"},".ccx")," file. Under the hood, this is a zip file. "),(0,s.mdx)(c,{variant:"info",slots:"text1, text1",mdxType:"InlineAlert"}),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"IMPORTANT notes"),":"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"Unless you have some special requirements, you should not be creating this zip file yourself."),(0,s.mdx)("li",{parentName:"ul"},"Before you package your plugin for distribution outside your own computer, make sure you've obtained a valid plugin ID from the ",(0,s.mdx)("a",{parentName:"li",href:"https://developer.adobe.com/developer-distribution/creative-cloud/overview/guides/plugin_id/"},"Developer Distribution portal"),". Without an id (which goes in the ",(0,s.mdx)("inlineCode",{parentName:"li"},"id")," field of your plugin's ",(0,s.mdx)("inlineCode",{parentName:"li"},"manifest.json")," file), you won't be able to distribute your plugin in the Creative Cloud Marketplace.")),(0,s.mdx)("h3",{id:"packaging-a-plugin"},"Packaging a plugin"),(0,s.mdx)("p",null,"Taking your plugin code and packaging it has never been easier."),(0,s.mdx)("p",null,"Using the ",(0,s.mdx)("a",{parentName:"p",href:"../../devtool/"},"UXP Developer Tool"),", choose ",(0,s.mdx)("inlineCode",{parentName:"p"},"Package")," from the Actions menu (the ellipsis on the right side of the Developer Tool window, on the same line as your plugin name):"),(0,s.mdx)("p",null,(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"280px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"240%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/uxp-indesign/static/15139edff2136f8ebc716710fc7f54fc/7ee82/udt-package-menu.webp 280w"],sizes:"(max-width: 280px) 100vw, 280px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/uxp-indesign/static/15139edff2136f8ebc716710fc7f54fc/2a48b/udt-package-menu.png 280w"],sizes:"(max-width: 280px) 100vw, 280px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/uxp-indesign/static/15139edff2136f8ebc716710fc7f54fc/2a48b/udt-package-menu.png",alt:"Package Menu",title:"Package Menu",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,s.mdx)("p",null,'This shows a "Select target directory" dialog. Choose a directory where your built plugin ',(0,s.mdx)("inlineCode",{parentName:"p"},".ccx")," file should reside."),(0,s.mdx)("p",null,"After the ",(0,s.mdx)("inlineCode",{parentName:"p"},".ccx")," file has been created, you should see this message at the bottom of the Developer Tool window:"),(0,s.mdx)("p",null,(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"788px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"14.375000000000002%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/uxp-indesign/static/f1bdd32ca30c6a49ec9754b201dea5a6/5530d/package-success.webp 320w","/uxp-indesign/static/f1bdd32ca30c6a49ec9754b201dea5a6/0c8fb/package-success.webp 640w","/uxp-indesign/static/f1bdd32ca30c6a49ec9754b201dea5a6/8b443/package-success.webp 788w"],sizes:"(max-width: 788px) 100vw, 788px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/uxp-indesign/static/f1bdd32ca30c6a49ec9754b201dea5a6/dd4a7/package-success.png 320w","/uxp-indesign/static/f1bdd32ca30c6a49ec9754b201dea5a6/0f09e/package-success.png 640w","/uxp-indesign/static/f1bdd32ca30c6a49ec9754b201dea5a6/c3dd4/package-success.png 788w"],sizes:"(max-width: 788px) 100vw, 788px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/uxp-indesign/static/f1bdd32ca30c6a49ec9754b201dea5a6/c3dd4/package-success.png",alt:"Package Success",title:"Package Success",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,s.mdx)("p",null,"If instead, you see this:"),(0,s.mdx)("p",null,(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"660px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"15%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/uxp-indesign/static/ae9f0d6fdff6a0eec3482a2cf2a550e5/5530d/package-failed.webp 320w","/uxp-indesign/static/ae9f0d6fdff6a0eec3482a2cf2a550e5/0c8fb/package-failed.webp 640w","/uxp-indesign/static/ae9f0d6fdff6a0eec3482a2cf2a550e5/3d671/package-failed.webp 660w"],sizes:"(max-width: 660px) 100vw, 660px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/uxp-indesign/static/ae9f0d6fdff6a0eec3482a2cf2a550e5/dd4a7/package-failed.png 320w","/uxp-indesign/static/ae9f0d6fdff6a0eec3482a2cf2a550e5/0f09e/package-failed.png 640w","/uxp-indesign/static/ae9f0d6fdff6a0eec3482a2cf2a550e5/7c811/package-failed.png 660w"],sizes:"(max-width: 660px) 100vw, 660px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/uxp-indesign/static/ae9f0d6fdff6a0eec3482a2cf2a550e5/7c811/package-failed.png",alt:"Package Failed",title:"Package Failed",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,s.mdx)("p",null,"Click on ",(0,s.mdx)("inlineCode",{parentName:"p"},"Details")," to view a window that shows why the packaging failed."),(0,s.mdx)("p",null,"Once your ",(0,s.mdx)("inlineCode",{parentName:"p"},".ccx")," file has been built, you should test it locally before doing anything else. To install a .ccx file into any Creative Cloud application, double-click it. This will open the Creative Cloud application, and you'll get a warning that your plugin hasn't been verified by Adobe:"),(0,s.mdx)("p",null,(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"868px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"62.18749999999999%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/uxp-indesign/static/fdf4caedca661a86d5cbec07a7325fb2/5530d/verify-failed.webp 320w","/uxp-indesign/static/fdf4caedca661a86d5cbec07a7325fb2/0c8fb/verify-failed.webp 640w","/uxp-indesign/static/fdf4caedca661a86d5cbec07a7325fb2/cef0d/verify-failed.webp 868w"],sizes:"(max-width: 868px) 100vw, 868px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/uxp-indesign/static/fdf4caedca661a86d5cbec07a7325fb2/dd4a7/verify-failed.png 320w","/uxp-indesign/static/fdf4caedca661a86d5cbec07a7325fb2/0f09e/verify-failed.png 640w","/uxp-indesign/static/fdf4caedca661a86d5cbec07a7325fb2/9a8ca/verify-failed.png 868w"],sizes:"(max-width: 868px) 100vw, 868px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/uxp-indesign/static/fdf4caedca661a86d5cbec07a7325fb2/9a8ca/verify-failed.png",alt:"Verify Failed",title:"Verify Failed",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,s.mdx)("p",null,"Since you wrote the plugin, it's probably safe to install. Click ",(0,s.mdx)("inlineCode",{parentName:"p"},"Install")," and you'll see another warning:"),(0,s.mdx)("p",null,(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"50.31250000000001%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/uxp-indesign/static/9f2b1998096aac9e60a920bea16d1e51/5530d/install-warning.webp 320w","/uxp-indesign/static/9f2b1998096aac9e60a920bea16d1e51/0c8fb/install-warning.webp 640w","/uxp-indesign/static/9f2b1998096aac9e60a920bea16d1e51/94b1e/install-warning.webp 1280w","/uxp-indesign/static/9f2b1998096aac9e60a920bea16d1e51/3ac9e/install-warning.webp 1368w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/uxp-indesign/static/9f2b1998096aac9e60a920bea16d1e51/dd4a7/install-warning.png 320w","/uxp-indesign/static/9f2b1998096aac9e60a920bea16d1e51/0f09e/install-warning.png 640w","/uxp-indesign/static/9f2b1998096aac9e60a920bea16d1e51/bbbf7/install-warning.png 1280w","/uxp-indesign/static/9f2b1998096aac9e60a920bea16d1e51/cc0ea/install-warning.png 1368w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/uxp-indesign/static/9f2b1998096aac9e60a920bea16d1e51/bbbf7/install-warning.png",alt:"Install Warning",title:"Install Warning",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,s.mdx)("p",null,"Since, in this case, ",(0,s.mdx)("em",{parentName:"p"},"you")," are the third-party developer, it's safe to click OK. Obviously, if someone else sends you a ",(0,s.mdx)("inlineCode",{parentName:"p"},".ccx")," file and you get this dialog, you should make sure you trust the person who sent it."),(0,s.mdx)("p",null,"Now that you have your plugin installed, test it again to make sure the packaged version performs correctly. Then move on to ",(0,s.mdx)("a",{parentName:"p",href:"../distribution-options"},"Options for Distribution")," to get your plugin out into the world."))}g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-introduction-next-steps-distribution-packaging-index-md-8463d4d4a9d25748825a.js.map