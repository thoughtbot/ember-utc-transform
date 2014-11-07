# ember-utc-transform

Inspired by [Tom Dale's Post on UTC
Dates](http://blog.skylight.io/bringing-sanity-to-javascript-utc-dates-with-moment-js-and-ember-data/)

## Installation

* `git clone` this repository
* `npm install --save ember-utc-transform`
* `ember g ember-utc-transform`

## Usage

Declaring a model's field with `DS.attr("utc")` will leverage `moment.js`
instead of JavaScript's standard `Date` object.

```javascript
// app/models/post.js

export default DS.Model.extend({
  body: DS.attr("string"),
  publishedAt: DS.attr("utc")
});
```

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
