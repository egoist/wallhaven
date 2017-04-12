# wallhaven-api

[![NPM version](https://img.shields.io/npm/v/wallhaven-api.svg?style=flat)](https://npmjs.com/package/wallhaven-api) [![NPM downloads](https://img.shields.io/npm/dm/wallhaven-api.svg?style=flat)](https://npmjs.com/package/wallhaven-api) [![CircleCI](https://circleci.com/gh/egoist/wallhaven-api/tree/master.svg?style=shield)](https://circleci.com/gh/egoist/wallhaven-api/tree/master)  [![codecov](https://codecov.io/gh/egoist/wallhaven-api/branch/master/graph/badge.svg)](https://codecov.io/gh/egoist/wallhaven-api)
 [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/egoist/donate)

## Install

```bash
yarn add wallhaven-api
```

## Usage

```js
const Wallhaven = require('wallhaven-api')

const api = new Wallhaven()

api.search('attack on titans')
  .then(result => {
    console.log(result)
    // => { total: 134, images: [] }
  })
```

## API

### api.search(keyword, [options])

Search wallpapers by given keyword.

#### options.categories

Type: `Array`<br>
Default: `['general', 'anime', 'people']`

#### options.page

Type: `Number`<br>
Default: `1`

### api.deatils(id)

Get the details of a wallpaper by image id.

#### id

Type: `Number`

Image ID.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**wallhaven-api** © [egoist](https://github.com/egoist), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by egoist with help from contributors ([list](https://github.com/egoist/wallhaven-api/contributors)).

> [egoistian.com](https://egoistian.com) · GitHub [@egoist](https://github.com/egoist) · Twitter [@rem_rin_rin](https://twitter.com/rem_rin_rin)
