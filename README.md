# find-up-glob-cli

<!-- badge -->
[![travis status](https://img.shields.io/travis/tanhauhau/find-up-glob-cli.svg)](https://travis-ci.org/tanhauhau/find-up-glob-cli)
[![npm version](https://img.shields.io/npm/v/find-up-glob-cli.svg)](https://www.npmjs.com/package/find-up-glob-cli)
[![npm download](https://img.shields.io/npm/dt/find-up-glob-cli.svg)](https://www.npmjs.com/package/find-up-glob-cli)
[![david dependency](https://img.shields.io/david/tanhauhau/find-up-glob-cli.svg)]()
<!-- endbadge -->

> Find a file by walking up parent directories
> 
> Like [find-up-cli](https://github.com/sindresorhus/find-up-cli) but using [minimatch](https://github.com/isaacs/minimatch)

# Installation

```bash
$ npm install --global find-up-glob-cli
```

# Usage

```
/
└── Users
    └── tanhauhau
        ├── unicorn.png
        └── foo
            └── bar
                ├── a.js
                └── b.js
            └── awesome.txt
            └── super.txt
```

```bash
$ echo $PWD
/Users/tanhauhau/foo/bar

$ find-up-glob *.js
/Users/tanhauhau/foo/bar/a.js
/Users/tanhauhau/foo/bar/b.js
```

# Related

* [find-up](https://www.npmjs.com/package/find-up) 
* [find-up-glob](https://www.npmjs.com/package/find-up-glob) API

# License
MIT
