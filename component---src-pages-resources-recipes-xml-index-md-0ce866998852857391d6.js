"use strict";(self.webpackChunkuxp_indesign=self.webpackChunkuxp_indesign||[]).push([[1130],{23445:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return i},default:function(){return p}});var m=n(87462),o=n(45987),l=(n(15007),n(64983)),a=n(91515);const r=["components"],i={},s={_frontmatter:i},c=a.Z;function p(e){let{components:t}=e,n=(0,o.Z)(e,r);return(0,l.mdx)(c,(0,m.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"xml"},"XML"),(0,l.mdx)("h3",{id:"importing-xml"},"Importing XML"),(0,l.mdx)("p",null,"Once you set the XML import preferences using the ",(0,l.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/indesign/dom/api/x/XMLImportPreference/"},"XMLImportPreference")," API, you can import an XML file, as shown in the following script fragment:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-js"},'const { app } = require("indesign");\nlet ufs = require("uxp").storage.localFileSystem;\nlet myDocument = app.documents.item(0);\n//You\'ll have to fill in a valid file path for your system.\nlet folder =  await ufs.getEntryWithUrl("file:c:/Users/uxp/Desktop");\nlet filePath;\ntry {\n    filePath = await folder.getEntry("sampleXML.xml");\n}\ncatch (error){\n    filePath = await folder.createEntry("sampleXML.xml");\n}\nmyDocument = app.documents.item(0);\nmyDocument.xmlElements.item(0).importXML(filePath);\n')),(0,l.mdx)("p",null,"When you need to import the contents of an XML file into a specific XML element, use the importXML method of the XML element, rather than the corresponding method of the document. See the following script fragment (from the ImportXMLIntoElement tutorial script):"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-js"},'const { app, SelectionOptions } = require("indesign");\nlet ufs = require("uxp").storage.localFileSystem;\nlet myDocument = app.documents.item(0);\n//You\'ll have to fill in a valid file path for your system.\nlet folder =  await ufs.getEntryWithUrl("file:c:/Users/uxp/Desktop");\nlet filePath;\ntry {\n    filePath = await folder.getEntry("sampleXML.xml");\n}\ncatch (error){\n    filePath = await folder.createEntry("sampleXML.xml");\n}\nmyDocument = app.documents.item(0);\nlet myPage = app.activeWindow.activePage;\nmyDocument.importXML(filePath);\nlet myRootXMLElement = myDocument.xmlElements.item(0);\nlet myLastXMLElement = myRootXMLElement.xmlElements.item(-1);\n//Select the XML element\nmyDocument.select(myLastXMLElement, SelectionOptions.replaceWith);\nmyDocument.xmlImportPreferences.importToSelected = true;\nmyDocument.importXML(filePath);\n')),(0,l.mdx)("p",null,"You also can set the importToSelected property of the xmlImportPreferences object to true, then select the XML element, and then import the XML file, as shown in the following script fragment (from the ImportXMLIntoSelectedElement tutorial script):"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-js"},'const { app } = require("indesign");\nlet myDocument = app.documents.item(0);\nlet myXMLTag = myDocument.xmlTags.item("xml_element");\nlet myXMLElement = myDocument.xmlElements.item(0).xmlElements.add(myXMLTag);\nmyDocument.select(myXMLElement);\nmyDocument.xmlImportPreferences.importToSelected = true;\n//Import into the selected XML element.\nmyDocument.importXML(filePath);\n')),(0,l.mdx)("h3",{id:"loading-xml-tags"},"Loading XML tags"),(0,l.mdx)("p",null,"You can import XML tags from an XML file without importing the XML contents of the file. You might want to do this to work out a tag-to-style or style-to-tag mapping before you import the XML data., as shown in the following script fragment (from the LoadXMLTags tutorial script):"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-js"},'const { app } = require("indesign");\nlet ufs = require("uxp").storage.localFileSystem;\nlet myDocument = app.documents.item(0);\n//You\'ll have to fill in a valid file path for your system.\nlet folder =  await ufs.getEntryWithUrl("file:c:/Users/uxp/Desktop");\nlet filePath;\ntry {    \n    filePath = await folder.getEntry("sampleXML.indd");\n} \ncatch (error){    \n    filePath = await folder.createEntry("sampleXML.indd");\n}\nmyDocument.loadXMLTags (filePath);\n')),(0,l.mdx)("h3",{id:"saving-xml-tags"},"Saving XML tags"),(0,l.mdx)("p",null,"Just as you can load XML tags from a file, you can save XML tags to a file, as shown in the following script. When you do this, only the tags themselves are saved in the XML file; document data is not included. As you would expect, this process is much faster than exporting XML, and the resulting file is much smaller. The following sample script shows how to save XML tags (for the complete script, see SaveXMLTags):"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-js"},"//You'll have to fill in a valid file path for your system.\nmyDocument.saveXMLTags(filePath);\n")),(0,l.mdx)("h1",{id:"xml-rules"},"XML Rules"),(0,l.mdx)("h3",{id:"setting-up-a-sample-document"},"Setting up a sample document"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-js"},'const { app } = require("indesign");\nlet ufs = require("uxp").storage.localFileSystem;\nlet myDocument = app.documents.item(0);\nlet folder =  await ufs.getEntryWithUrl("file:c:/Users/uxp/Desktop");\nlet filePath;\ntry {\n    filePath = await folder.getEntry("sampleXML.xml");\n}\ncatch (error){\n    filePath = await folder.createEntry("sampleXML.xml");\n}\n \nmain();\nfunction main(){\n    let myDocument = app.documents.add();\n    myDocument.xmlImportPreferences.allowTransform = false;\n    myDocument.xmlImportPreferences.ignoreWhitespace = true;\n    myDocument.importXML(filePath);\n    let myBounds = myGetBounds(myDocument, myDocument.pages.item(0));\n    myDocument.xmlElements.item(0).placeIntoFrame(myDocument.pages.item(0), myBounds);\n    function myGetBounds(myDocument, myPage){\n        let myWidth = myDocument.documentPreferences.pageWidth;\n        let myHeight = myDocument.documentPreferences.pageHeight;\n        let myX1 = myPage.marginPreferences.left;\n        let myY1 = myPage.marginPreferences.top;\n        let myX2 = myWidth - myPage.marginPreferences.right;\n        let myY2 = myHeight - myPage.marginPreferences.bottom;\n        return [myY1, myX1, myY2, myX2];\n    }\n    function myGetScriptPath() {\n        try {\n            return app.activeScript;\n        }\n        catch(myError){\n            console.log(myError);\n        }\n    }\n}\n')))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-resources-recipes-xml-index-md-0ce866998852857391d6.js.map