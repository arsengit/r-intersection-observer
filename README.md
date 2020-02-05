# r-intersection-observer

> Custom React intersection observer component

[![NPM](https://img.shields.io/npm/v/r-intersection-observer.svg)](https://www.npmjs.com/package/r-intersection-observer) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save r-intersection-observer
```

## Usage

```tsx
import * as React from 'react'

import Observer from 'r-intersection-observer'

function Example () {
    return (
      <Observer>
      {
        inView => (
          <div>
           Observing Element
          </div>
        )
      }
      </Observer>
    )
 }

```
## Properties
|Name| Required | Type | Default Description |
|----| -------- | ---- | ------------------- |
|rootMargin| false | strin | define rootMargin option|
|threshold| false | number | define threshold option|
|root|  false   | JSX  | define root option |
|callBack| false | function | callback after intersecting|
|onlyCallBack| false | boolean | returns only callBack function|
|onlyOnce| false | boolean | intersecting entry only once|
|classname| false | string | define classname for component|




## License

MIT © [arsengit](https://github.com/arsengit)
