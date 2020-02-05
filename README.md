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
|root|  false   | JSX  | define your root option |


## License

MIT © [arsengit](https://github.com/arsengit)
