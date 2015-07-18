# Ember UTC Transform

Inspired by [Tom Dale's Post on UTC Dates](http://blog.skylight.io/bringing-sanity-to-javascript-utc-dates-with-moment-js-and-ember-data/)

This README outlines the details of collaborating on this Ember addon.

## Usage

```bash
$ ember install ember-utc-transform
```

```js
import DS from 'ember-data';

export default DS.Model.extend({
  createdAt: DS.attr('utc'),
  updatedAt: DS.attr('utc'),
});
```

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
