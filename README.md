<p align="center">
  <img height="256px" width="256px" style="text-align: center;" src="https://cdn.jsdelivr.net/gh/angular-material-extensions/layout/demo/src/assets/logo.svg">
</p>

# layout - Set of angular directives that allow developers to boost and easy enhance their app development&#39;s layout

[![npm version](https://badge.fury.io/js/%40angular-material-extensions%2Flayout.svg)](https://badge.fury.io/js/%40angular-material-extensions%2Flayout)
[![npm demo](https://img.shields.io/badge/demo-online-ed1c46.svg)](https://angular-material-extensions.github.io/layout)
[![Join the chat at https://gitter.im/angular-material-extensions/Lobby](https://badges.gitter.im/angular-material-extensions/Lobby.svg)](https://gitter.im/angular-material-extensions/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![CircleCI branch](https://img.shields.io/circleci/project/github/angular-material-extensions/layout/master.svg?label=circleci)](https://circleci.com/gh/angular-material-extensions/layout)
[![Build Status](https://travis-ci.org/angular-material-extensions/layout.svg?branch=master)](https://travis-ci.org/angular-material-extensions/layout)
[![Coverage Status](https://coveralls.io/repos/github/angular-material-extensions/layout/badge.svg?branch=master)](https://coveralls.io/github/angular-material-extensions/layout?branch=master)
[![dependency Status](https://david-dm.org/angular-material-extensions/layout/status.svg)](https://david-dm.org/angular-material-extensions/layout)
[![devDependency Status](https://david-dm.org/angular-material-extensions/layout/dev-status.svg?branch=master)](https://david-dm.org/angular-material-extensions/layout#info=devDependencies)
[![Greenkeeper Badge](https://badges.greenkeeper.io/angular-material-extensions/layout.svg)](https://greenkeeper.io/)
[![license](https://img.shields.io/github/license/angular-material-extensions/layout.svg?style=flat-square)](https://github.com/angular-material-extensions/layout/blob/master/LICENSE)


## Built by and for developers :heart:
Do you have any question or suggestion ? Please do not hesitate to contact us!
Alternatively, provide a PR | open an appropriate issue [here](https://github.com/angular-material-extensions/layout/issues)

If did you like this project, support [angular-material-extensions](https://github.com/angular-material-extensions) 
by starring :star: and sharing it :loudspeaker:

## Table of Contents
- [Demo](#demo)
- [Components](#components)
- [Dependencies](#dependencies)
- [Peer Dependencies](#peerDependencies)
- [Additional Requirements - material (Include a theme)](#additional-requirements-material-theme)
- [Additional Requirements - material icons](#additional-requirements-material-icons)
- [Installation](#installation)
- [API](#api)
- [Usage](#usage)
- [Documentation](#documentation)
- [Run Demo App Locally](#run-demo-app-locally)
- [Development](#development)
- [Other Angular Libraries](#other-angular-libraries)
- [Support](#support)
- [License](#license)

<a name="demo"/>

## [Demo](https://angular-material-extensions.github.io/layout)

View all the directives and components in action at [https://angular-material-extensions.github.io/layout](https://angular-material-extensions.github.io/layout)

<a name="components"/>

## Library's directives

### [Container](https://angular-material-extensions.github.io/layout/utilities/container)
- `matContainer`

### [Width](https://angular-material-extensions.github.io/layout/utilities/width)
- `matWidth`
- `matMinWidth`
- `matMaxWidth`

### [Height](https://angular-material-extensions.github.io/layout/utilities/height)
- `matHeight`
- `matMinHeight`
- `matMaxHeight`

### [Margin](https://angular-material-extensions.github.io/layout/utilities/margin)
- `matMargin`
- `matMarginTop`
- `matMarginBottom`
- `matMarginLeft`
- `matMarginRight`

### [Padding](https://angular-material-extensions.github.io/layout/utilities/padding)
- `matPadding`
- `matPaddingTop`
- `matPaddingBottom`
- `matPaddingLeft`
- `matPaddingRight`

## Dependencies
* [Angular](https://angular.io) (*requires* Angular 2 or higher, tested with 2.0.0)

## Installation
Install above dependencies via *npm*. 

Now install `@angular-material-extensions/layout` via:
```shell
npm install --save @angular-material-extensions/layout
```

---
##### SystemJS
>**Note**:If you are using `SystemJS`, you should adjust your configuration to point to the UMD bundle.
In your systemjs config file, `map` needs to tell the System loader where to look for `@angular-material-extensions/layout`:
```js
map: {
  '@angular-material-extensions/layout': 'node_modules/@angular-material-extensions/layout/bundles/layout.umd.js',
}
```
---

Once installed you need to import the main module:
```js
import { MatLayoutModule } from '@angular-material-extensions/layout';
```
The only remaining part is to list the imported module in your application module. The exact method will be slightly
different for the root (top-level) module for which you should end up with the code similar to (notice ` MatLayoutModule .forRoot()`):
```js
import { MatLayoutModule } from '@angular-material-extensions/layout';

@NgModule({
  declarations: [AppComponent, ...],
  imports: [MatLayoutModule.forRoot(), ...],  
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

Other modules in your application can simply import ` MatLayoutModule `:

```js
import { MatLayoutModule } from '@angular-material-extensions/layout';

@NgModule({
  declarations: [OtherComponent, ...],
  imports: [MatLayoutModule, ...], 
})
export class OtherModule {
}
```

## Usage

Please see the example of the demo app here https://angular-material-extensions.github.io/layout

<a name="other-angular-libraries"/>

## Other Angular Libraries
- [@firebaseui/ng-bootstrap](https://github.com/firebaseui/ng-bootstrap)
- [ngx-linkifyjs](https://github.com/anthonynahas/ngx-linkifyjs)
- [@angular-material-extensions/password-strength](https://github.com/angular-material-extensions/password-strength)
- [@angular-material-extensions/password-strength](https://github.com/angular-material-extensions/google-maps-autocomplete)
- [@angular-material-extensions/link-preview](https://github.com/angular-material-extensions/link-preview)
- [@angular-material-extensions/pages](https://github.com/angular-material-extensions/pages)
- [@angular-material-extensions/contacts](https://github.com/angular-material-extensions/contacts)
- [@angular-material-extensions/faq](https://github.com/angular-material-extensions/faq)
- [@angular-material-extensions/combination-generator](https://github.com/angular-material-extensions/combination-generator)

---

<a name="support"/>

## Support
+ Drop an email to: [Anthony Nahas](mailto:anthony.na@hotmail.de)
+ or open an appropriate [issue](https://github.com/angular-material-extensions/layout/issues)
+ let us chat on [Gitter](https://gitter.im/angular-material-extensions/Lobby)
 
 Built by and for developers :heart: we will help you :punch:

---

![jetbrains logo](https://raw.githubusercontent.com/angular-material-extensions/layout/HEAD/assets/jetbrains-variant-4_logos/jetbrains-variant-4.png)

This project is supported by [jetbrains](https://www.jetbrains.com/) with 1 ALL PRODUCTS PACK OS LICENSE incl. [webstorm](https://www.jetbrains.com/webstorm)

---

<a name="license"/>

## License

Copyright (c) 2018 Anthony Nahas. Licensed under the MIT License (MIT)

