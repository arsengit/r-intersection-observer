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
 ```bash

  inView returns boolean if element is intersecting or not

 ```
## Properties
|Name| Required | Type | Description | Default Value |
|----| -------- | ---- | ------------------- | ---- |
|rootMargin| false | string | define rootMargin option| 0px |
|threshold| false | number | define threshold option| 0 |
|root|  false   | JSX  | define root option | -- |
|callBack| false | function | callback after intersecting| -- |
|onlyCallBack| false | boolean | returns only callBack function| false |
|onlyOnce| false | boolean | intersecting entry only once| true |
|className| false | string | define className for Observer| -- |

|function| arguments |
| ------ | ---------- |
| callBack| (isIntersecting: boolean, entry: IntersectionObserverEntry)|


## License

MIT © [arsengit](https://github.com/arsengit)
