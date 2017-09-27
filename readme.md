# babel-plugin-s2s-reducer-root
[![Build Status](https://travis-ci.org/akameco/babel-plugin-s2s-reducer-root.svg?branch=master)](https://travis-ci.org/akameco/babel-plugin-s2s-reducer-root)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

> s2s plugin: compose state types


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

## Related
- [**akameco/s2s**<br>Source to Source](https://github.com/akameco/s2s)
- [**akameco/babel-plugin-s2s-action-root**<br>compose flow + redux action types](https://github.com/akameco/babel-plugin-s2s-action-root)
- [**akameco/babel-plugin-s2s-state-root**<br>compose flow + redux state types](https://github.com/akameco/babel-plugin-s2s-state-root)
- [**akameco/babel-plugin-s2s-action-types**<br>generate redux action types](https://github.com/akameco/babel-plugin-s2s-action-types)
- [**akameco/babel-plugin-s2s-action-creater**<br>generate redux action creater](https://github.com/akameco/babel-plugin-s2s-action-creater)


## License

MIT © [akameco](http://akameco.github.io)
