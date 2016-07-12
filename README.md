# stc-log

[![NPM version](https://img.shields.io/npm/v/stc-log.svg?style=flat-square)](http://badge.fury.io/js/stc-log)
[![Build Status](https://travis-ci.org/stcjs/stc-log.svg?branch=master)](https://travis-ci.org/stcjs/stc-log)
[![Coverage Status](https://coveralls.io/repos/github/stcjs/stc-log/badge.svg?branch=master)](https://coveralls.io/github/stcjs/stc-log?branch=master)
[![Dependency Status](https://david-dm.org/stcjs/stc-log.svg)](https://david-dm.org/stcjs/stc-log)


Logger for stc



## Install

```sh
npm install stc-log
```

## How to use

```js
import StcLog from 'stc-log'

let instance = new StcLog();
instance.error('error message');
```