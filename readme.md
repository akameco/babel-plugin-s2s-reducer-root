# babel-plugin-s2s-reducer-root
[![Build Status](https://travis-ci.org/akameco/babel-plugin-s2s-reducer-root.svg?branch=master)](https://travis-ci.org/akameco/babel-plugin-s2s-reducer-root)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

> compose state types


## Install

```
$ npm install --save-dev babel-plugin-s2s-reducer-root
```

### Example

#### IN:

```
```


#### OUT:

```
// @flow
import { combineReducers } from 'redux';
import App from "../__fixtures__/app/reducer";
import Bob from "../__fixtures__/bob/reducer";

export default combineReducers({
  App,
  Bob
});
```


### Usage

```
{
  ['s2s-reducer-root', {
    input: 'containers/**/reducer.js',
    output: 'reducer.js',
    globOptions: {}
  }]
}
```

#### input

type: `string` <br>
required: true

glob pattern.

#### output

type: `string` <br>
required: true

outputh path.

#### globOptions

See https://github.com/isaacs/node-glob#options

## License

MIT © [akameco](http://akameco.github.io)
