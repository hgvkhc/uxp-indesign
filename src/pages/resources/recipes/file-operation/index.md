# File operations

To perform any file operations including read, write, create, and delete, UXP provides a couple of options. But before we look at the APIs, let's get acquainted with a few concepts.

## Concepts

### Sandbox and other locations
UXP, by default, only allows access to certain locations in the user's file system. These locations are referred to as the sandbox. 

<InlineAlert variant="info" slots="header, text1, text2"/>

Scripts and plugins

**In plugins**, a sandbox is typically the plugin's folder, plus a temporary and data folder. The plugin's location is read-only. Whereas, the temporary and data folders are provided to you to store transitory information. Note that the data stored here can get accidentally erased and should not be considered permanent.

**In scripts**, lorem ipsum. // TODO What about sandbox locations in scripts?


However, we understand that there are circumstances when you would like to have access to other locations as well. Accessing such locations, too, is possible in UXP but you will need to seek permission first.


### Manifest permission
For file system access you require permission for the `localFileSystem` module.

<InlineAlert variant="info" slots="header, text1, text2"/>

Scripts and plugins

**In scripts**, these permissions are fixed to '' and you cannot alter them //(TODO Add link to details) and ignore the manifest details below. 

**In plugins**, you should seek permission for `localFileSystem` in your manifest.<br></br> IMPORTANT: Be sure you know about the [manifest permissions](../../../plugins/concepts/manifest/#permissionsdefinition) module before you proceed.


Let's understand the manifest settings a bit more in detail.
```json
/* manifest.json */
{  
    "requiredPermissions": {
        "localFileSystem": "plugin"
    }
}
```
Allowed values for `localFileSystem` are:
- `plugin`: Default value. Provides access to the sandbox.
- `request`: Let's you request the user to select a folder location of their choice.
- `fullAccess`: Provides full access to the user file system
//TODO Q: Does fullAccess file system include system folders?

*Protip*: Make sure you pick the most accurate permission for your use case because in the future we may ask users to provide their consent based on it. You may find 'fullAccess' to be the least restrictive and hence the safest to pick, but a user may not be comfortable giving full access to their system unless it's absolutely necessary and might deny the installation of your plugin. 

### Schemas
UXP provides a shorthand representation of these locations via schemas.

For sandbox, you can use `plugin:/`, `plugin-data:/`and `plugin-temp:/`. // TODO Q: Do these work in scripts? <br></br>
And, for other locations, use `file:/`.

```html
<img src="plugin:/sample.png" />
<img src="file:/Users/user/Downloads/sample.png" /> <!-- update the path based on your system -->
```

## APIs
You have two options to access the file system - `LocalFileSytem` and `FS` module.
// TODO Q: How should a developer choose between the FS module and localfilesystem? What special use cases are supported by them?

### LocalFileSytem API
Available via `require('uxp').storage.localFileSystem` which returns an instance of `FileSystemProvider`.

**Nomenclature**
A file system is a conglomerate of files and folders. You can use the `File` and `Folder` classes to refer to them. However, these classes have a base class called `Entry`. The nomenclature of some of the APIs uses 'entry' in them typically when the output type can be either of the two - `File` or `Folder` and be determined only at runtime. Therefore, it's a good practice to check using `isfile` or `isFolder` before using specific APIs.

```js
const {localFileSystem, types} = require('uxp').storage;
async function foo(){
    // Create new folder and file
    try {
        const newFolderEntry = await localFileSystem.createEntryWithUrl("plugin-temp:/temp", { type: types.folder });
        if (newFolderEntry.isFolder) {
            const newFile = await newFolderEntry.createFile("temp.txt", {overwrite: true});
            await newFile.write("Sample file created.");
        }
    } catch (e) {
        console.error(e);
    }
}
```

Now let's take a look at some examples to access system locations based on permission settings.

**Accessing sandbox**

<CodeBlock slots="heading, code" repeat="2" languages="JSON, JavaScript" />

#### JavaScript
```js
const fsProvider = require('uxp').storage.localFileSystem;
async function foo() {
    // Access sandbox
    if (fsProvider.isFileSystemProvider) {
        try {
            const pluginFolder = await fsProvider.getEntryWithUrl("plugin-data:/");
            console.log(`File path: ${pluginFolder.nativePath}`);
        } catch (e) {
            console.error(e);
        }
    }
}
```

#### manifest
```json
{
    "requiredPermissions": {
        "localFileSystem": "plugin"
    }
}
```

**Accessing other locations**

<CodeBlock slots="heading, code" repeat="2" languages="JSON, JavaScript" />

#### JavaScript
```js
const fsProvider = require('uxp').storage.localFileSystem;
async function foo() {
    // Access other location
    if (fsProvider.isFileSystemProvider) {
        try {
            const pluginFolder = await fsProvider.getEntryWithUrl("file:/Users/user/Documents"); // update the path based on your system
            console.log(`File path: ${pluginFolder.nativePath}`);
        } catch (e) {
            console.error(e);
        }
    }
}
```

#### manifest
```json
{
    "requiredPermissions": {
        "localFileSystem": "fullAccess"
    }
}
```

<br></br>

**User's choice of location**

These APIs are particularly handy when you want to request the user to select a folder/file location of their choice. For example, the below code snippet using `getFileForOpening` and `getFileForSaving` methods presents a file picker for the user to choose from.

<CodeBlock slots="heading, code" repeat="2" languages="JSON, JavaScript" />

#### JavaScript
```js
const fsProvider = require('uxp').storage.localFileSystem;

async function foo() {
    // Ask user to select a file. Show their 'Desktop' as the default folder.
    if (fsProvider.isFileSystemProvider) {
        const { domains, fileTypes } = require('uxp').storage;

        try {
            const file = await fsProvider.getFileForOpening({ initialDomain: domains.userDesktop, types: fileTypes.text });
            if (!file) {
                console.error("Something went wrong.");
                return;
            }
            const text = await file.read();
            console.log(`File content: ${text}`);
        } catch (err) {
            console.error(err);
        }
    }
}

async function bar() {
    // Ask user to select a location to save a file
    if (fsProvider.isFileSystemProvider) {
        try {
            const file = await fsProvider.getFileForSaving("sample.txt", { types: ["txt"] });
            if (!file) {
                console.error("Something went wrong.");
                return;
            }
            await file.write("UXP saved sample file.");
        } catch (err) {
            console.error(err);
        }        
    }
}
```

#### manifest
```json
{
    "requiredPermissions": {
        "localFileSystem": "request"
    }
}
```
**Save user's choice of location**

If you would like to remember the user's choice for an extended period, you can do it with the help of a token. The example below shows the essence of this usage but you should ideally save these tokens in the storage (more details covered in [Storage](./storage.md) section) for later use.

```js
const fsProvider = require('uxp').storage.localFileSystem;

const { domains, fileTypes } = require('uxp').storage;
const entry = await fsProvider.getFileForOpening({ initialDomain: domains.userDesktop, types: fileTypes.text });
const token = await fsProvider.createPersistentToken(entry); // store for future use

async function readFileUsingTokensInLocalFileSystem() {
    // In the future, access the entry using the token directly
    try {
        const file = await fsProvider.getEntryForPersistentToken(token);
        const text = await file.read();
        console.log(`File content: ${text}`);
    } catch (err) {
        console.error(err);
    }
}
```

//TODO Q: What is the difference between persistent and session token?

#### Reference material
- Instance of [localFileSystem](/indesign/uxp/reference/uxp-api/reference-js/Modules/uxp/Persistent%20File%20Storage/FileSystemProvider/)
- [Entry](/indesign/uxp/reference/uxp-api/reference-js/Modules/uxp/Persistent%20File%20Storage/Entry/) and [Entry metadata](/indesign/uxp/reference/uxp-api/reference-js/Modules/uxp/Persistent%20File%20Storage/EntryMetadata/)
- [File](/indesign/uxp/reference/uxp-api/reference-js/Modules/uxp/Persistent%20File%20Storage/File/) and [Folder](/indesign/uxp/reference/uxp-api/reference-js/Modules/uxp/Persistent%20File%20Storage/Folder/)
- [Path](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/Path/)

### FS Module
Based on NodeJS file system APIs, these provide direct access to file locations with the help of schema.

**Accessing sandbox**

<CodeBlock slots="heading, code" repeat="2" languages="JavaScript, JSON" />

#### JavaScript
```js
const fs = require("fs");
async function foo() {
    // Read a file from sandbox using fs module
    try {
        const text = await fs.readFile("plugin:/sample.txt", 'utf8');
        console.log(`File content: ${text}`);
    } catch (e) {
        console.error(e);
    }
}
```

#### manifest
```json
{
    "requiredPermissions": {
        "localFileSystem": "plugin"
    }
}
```


**Accessing other locations**

<CodeBlock slots="heading, code" repeat="2" languages="JavaScript, JSON" />

#### JavaScript
```js
const fs = require("fs");
async function foo() {
    // Write to a arbitrary location using fs module
    try {
        await fs.writeFile("/Users/user/Desktop/output.txt", "This is a sample text.", {encoding: "utf-8"}); // update the path based on your system
    } catch (e) {
        console.error(e);
    }
}
```

#### manifest
```json
{
    "requiredPermissions": {
        "localFileSystem": "fullAccess"
    }
}
```

#### Reference material
- [FS module](/indesign/uxp/reference/uxp-api/reference-js/Modules/FileSystem/)
- [Path](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/Path/)

## Applicable to
- InDesign version v18.5
- UXP version v7.1
- Manifest v5

