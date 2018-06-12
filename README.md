<p align="center">
  <img height="256px" width="256px" style="text-align: center;" src="https://cdn.rawgit.com/angular-material-extensions/layout/master/demo/src/assets/logo.svg">
</p>

# layout - Set of angular directives that allow developers to boost and easy enhance their app development&#39;s layout

[![npm version](https://badge.fury.io/js/layout.svg)](https://badge.fury.io/js/layout),
[![Build Status](https://travis-ci.org/angular-material-extensions/layout.svg?branch=master)](https://travis-ci.org/angular-material-extensions/layout)
[![Coverage Status](https://coveralls.io/repos/github/angular-material-extensions/layout/badge.svg?branch=master)](https://coveralls.io/github/angular-material-extensions/layout?branch=master)
[![dependency Status](https://david-dm.org/angular-material-extensions/layout/status.svg)](https://david-dm.org/angular-material-extensions/layout)
[![devDependency Status](https://david-dm.org/angular-material-extensions/layout/dev-status.svg?branch=master)](https://david-dm.org/angular-material-extensions/layout#info=devDependencies)
[![Greenkeeper Badge](https://badges.greenkeeper.io/angular-material-extensions/layout.svg)](https://greenkeeper.io/)

## Demo

View all the directives in action at https://angular-material-extensions.github.io/layout

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
import { LibModule } from '@angular-material-extensions/layout';
```
The only remaining part is to list the imported module in your application module. The exact method will be slightly
different for the root (top-level) module for which you should end up with the code similar to (notice ` LibModule .forRoot()`):
```js
import { LibModule } from '@angular-material-extensions/layout';

@NgModule({
  declarations: [AppComponent, ...],
  imports: [LibModule.forRoot(), ...],  
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

Other modules in your application can simply import ` LibModule `:

```js
import { LibModule } from '@angular-material-extensions/layout';

@NgModule({
  declarations: [OtherComponent, ...],
  imports: [LibModule, ...], 
})
export class OtherModule {
}
```

## Usage

<a name="other-angular-libraries"/>

## Other Angular Libraries
- [ngx-auth-firebaseui](https://github.com/AnthonyNahas/ngx-auth-firebaseui)
- [ngx-material-pages](https://github.com/AnthonyNahas/ngx-material-pages)
- [ngx-material-password-strength](https://github.com/AnthonyNahas/ngx-material-password-strength)
- [ngx-material-contacts](https://github.com/AnthonyNahas/ngx-material-contacts)
- [@angular-material-extensions/faq](https://github.com/angular-material-extensions/faq)
- [@angular-material-extensions/combination-generator](https://github.com/angular-material-extensions/combination-generator)


---

<a name="license"/>

## License

Copyright (c) 2018 Anthony Nahas. Licensed under the MIT License (MIT)

