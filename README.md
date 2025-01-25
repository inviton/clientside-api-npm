# @inviton/clientside-api

[![npm package][npm-img]][npm-url]
[![Downloads][downloads-img]][downloads-url]
[![Issues][issues-img]][issues-url]

> Inviton clientside api library

## Install

```bash
npm install @inviton/clientside-api
```

## About the library
NPM library bringing alternative to embedding our clientside API via InvitonApiObject loader pattern

## Documentation
Documentation with some practical examples for the most common use cases can be found at https://inviton.eu/assets/doc/js-api/index.html. Also Typescript's type files are provided for easier navigation

## Usage

```ts
import { invitonApi } from '@inviton/clientside-api';

(function() {
    invitonApi.ticketSelector.renderForIds({
        eventIds: [10500],
        targetElement: document.getElementById('invitonApiWrap')
    })
})();


```