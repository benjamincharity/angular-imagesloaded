# angular-imagesloaded

<!--<img src="http://cdn.benjamincharity.com/open_source/angular-imagesloaded/imagesloaded-logo.jpg" align="right" alt="angular-imagesloaded">-->

[![MIT License][license_image]][license_url] [![NPM version][npm_version_image]][npm_url] [![Coverage Status][coveralls_badge]][coveralls_link] [![CircleCI][circle_badge]][circle_link]

:camera: :white_check_mark: AngularJS integration for the imagesloaded library.

_[Comments and Pull Requests welcome!][issues]_


## Contents

- [Installation](#installation)
- [Dependencies](#dependencies)
- [Usage](#usage)
- [Events](#events)
- [Development](#development)
- [About imagesloaded](#about-imagesloaded)



## Installation

#### NPM
```bash
npm install angular-imagesloaded --save
```

#### Bower
```bash
bower install angular-imagesloaded --save
```

## Dependencies

- Angular.js (^1.4.0)


## Usage

### `bc-imagesloaded`

As attribute:

```html
<img
  src="http://lorempixel.com/400/300"
  bc-imagesloaded
  bc-always-method="vm.always(instance)"
  alt=""
/>
```

can accept:

- string (selector)
- object (element or multiple elements)


Pass selector:

```html
<div
  bc-imagesloaded=".imagesloaded__test"
  bc-always-method="vm.always(instance)"
>
  <img
    class="imagesloaded__test"
    src="http://lorempixel.com/400/300"
    alt=""
  />
</div>
```

### `bc-background`

can accept:

- string (selector)
- bool

```html
<div
  bc-imagesloaded
  bc-background="true"
  style="background-image: url(http://lorempixel.com/400/300)"
></div>
```

```html
<div
  bc-imagesloaded
  bc-background=".test"
>
  <div
    class="test"
    style="background-image: url(http://lorempixel.com/400/300)"
  ></div>
</div>
```


## Events


### Always


### Done


### Fail


### Progress



## Development

- `npm run build` - Build JS/CSS/HTML/SVG
- `npm run build:js` - Build JS
- `npm run build:css` - Build CSS
- `npm run watch:css` - Watch CSS and rebuild on change
- `npm run watch:js` - Watch JS/HTML and rebuild on change
- `npm run watch` - Watch JS/CSS/HTML and rebuild on change



## About imagesloaded

> _JavaScript is all like "You images done yet or what?"_

Created by [David DeSandro][desandro].

- [imagesloaded on Github][il_github]
- [imagesloaded Documentation][il_docs]





[issues]: https://github.com/benjamincharity/angular-imagesloaded/issues

[il_github]: https://github.com/desandro/imagesloaded
[il_docs]: http://imagesloaded.desandro.com/
[desandro]: http://desandro.com/

[coveralls_badge]: https://coveralls.io/repos/github/benjamincharity/angular-imagesloaded/badge.svg?branch=master
[coveralls_link]: https://coveralls.io/github/benjamincharity/angular-imagesloaded?branch=master
[license_image]: http://img.shields.io/badge/license-MIT-blue.svg
[license_url]: LICENSE
[npm_url]: https://npmjs.org/package/angular-imagesloaded
[npm_version_image]: http://img.shields.io/npm/v/angular-imagesloaded.svg
[circle_badge]: https://circleci.com/gh/benjamincharity/angular-imagesloaded/tree/master.svg?style=svg
[circle_link]: https://circleci.com/gh/benjamincharity/angular-imagesloaded/tree/master

