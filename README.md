# angular-imagesloaded

<!--<img src="http://cdn.benjamincharity.com/open_source/angular-imagesloaded/imagesloaded-logo.jpg" align="right" alt="angular-imagesloaded">-->

[![MIT License][license_image]][license_url] [![NPM version][npm_version_image]][npm_url] [![Coverage Status][coveralls_badge]][coveralls_link] [![CircleCI][circle_badge]][circle_link]

:camera: :white_check_mark: AngularJS integration for the imagesloaded library.

> [:tv: **Demos and Examples**][demo_collection]

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

#### Manual

```html
<script src="path/to/lib/dist/angular-imagesloaded.min.js"></script>
```

## Dependencies

- Angular.js (^1.4.0)
- imagesloaded (^4.1.1)


## Usage

Include `bc.imagesloaded` as a dependency in your project:

```javascript
angular.module('YourModule', ['bc.imagesloaded']);
```

### `bc-imagesloaded`

Use this directive directly on an image as an attribute to create an imagesloaded instance for that
specific image:

```html
<img
  src="http://lorempixel.com/400/300"
  bc-imagesloaded
  alt=""
/>
```

> [:tv: Demo for use on element][demo_element]

You can also pass in a selector string, NodeList or array to target multiple child elements:

```html
<div bc-imagesloaded=".test">
  <img
    class="test"
    src="http://lorempixel.com/400/300"
    alt=""
  />
  <img
    class="test"
    src="http://lorempixel.com/400/300"
    alt=""
  />
</div>
```

> [:tv: Demo for use with selector string][demo_always]

### `bc-background`

Set this attribute to `true` to enable imagesloaded on the background of the current element:

```html
<div
  bc-imagesloaded
  bc-background="true"
  style="background-image: url(http://lorempixel.com/400/300)"
></div>
```

You can also pass in a selector string to enable imagesloaded on multiple child elements:

```html
<div
  bc-imagesloaded
  bc-background=".test"
>
  <div
    class="test"
    style="background-image: url(http://lorempixel.com/400/300)"
  ></div>
  <div
    class="test"
    style="background-image: url(http://lorempixel.com/400/300)"
  ></div>
</div>
```

> [:tv: Demo for background image][demo_background]

### 'bc-debug'

When this attribute is set to `true`, imagesloaded will output debug logs to the console.

```html
<img
  src="http://lorempixel.com/400/300"
  bc-imagesloaded
  bc-debug="true"
  alt=""
/>
```

> [:tv: Demo debug][demo_debug]

## Events

Events can help ....

### Always

Triggered after all images have been either loaded or confirmed broken.

### Done

Triggered after all images have successfully loaded without any broken images.

### Fail

Triggered after all images have been loaded with at least one broken image.

### Progress

Triggered after each image has been loaded.


## Development

- `npm run build` - Build JS
- `npm run watch` - Watch JS and rebuild on change
- `npm run watch:tests` - Watch tests and re-run on change



## About imagesloaded

> _JavaScript is all like "You images done yet or what?"_

Created by [David DeSandro][desandro].

- [imagesloaded on Github][il_github]
- [imagesloaded Documentation][il_docs]





[issues]: https://github.com/benjamincharity/angular-imagesloaded/issues
[demo_collection]: https://codepen.io/collection/AeMEpV/
[demo_element]: https://codepen.io/benjamincharity/pen/BLJOWm?editors=0010
[demo_done]: https://codepen.io/benjamincharity/pen/PGEawB/?editors=0010
[demo_always]: https://codepen.io/benjamincharity/pen/RGxZwx?editors=0010
[demo_fail]: https://codepen.io/benjamincharity/pen/QKaVmV?editors=0010
[demo_progress]: https://codepen.io/benjamincharity/pen/QKaRQL?editors=0010
[demo_background]: https://codepen.io/benjamincharity/pen/LRZowA?editors=0010
[demo_debug]:https://codepen.io/benjamincharity/pen/YGYoVr?editors=0010

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

