
# Host Environment
Sometimes it's necessary to find out what a plugin's or script's host environment is. You can find a range of information such as the host OS, locale, home folder, installed application version, etc, by using UXP APIs.

## Example
<CodeBlock slots="heading, code" repeat="1" languages="JavaScript" />

#### JavaScript
```js
async function foo() {
    const { host, versions } = require('uxp');
    const osInfo = require('os');

    console.log(`System information: ${osInfo.platform()} v${osInfo.release()}`);
    console.log(`Application: ${host.name} v${host.version} powered by ${versions.uxp}`);
}
```


## Reference material
- [Host](/indesign/uxp/reference/uxp-api/reference-js/Modules/uxp/Host%20Information/Host/) APIs
- [Versions](/indesign/uxp/reference/uxp-api/reference-js/Modules/uxp/Versions/Versions/) APIs
- [OS](/indesign/uxp/reference/uxp-api/reference-js/Modules/os/OS/) APIs

## Compatibility
- InDesign version v18.5
- UXP version v7.1
- Manifest version v5

| Scripts | Plugins |
| ------- | ------- |
| ✅      |  ✅      |

| InDesign | InDesign Cloud Server | InDesign Server |
| -------- | --------------------- | -------------- |
| ✅       | ✅ (via Scripts only)  | ❌ (via Scripts only)  |

// TODO Q: What will be the value re IDCS and IDS

