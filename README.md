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

## Contributing

See the [CONTRIBUTING] document.
Thank you, [contributors]!

  [CONTRIBUTING]: CONTRIBUTING.md
  [contributors]: https://github.com/thoughtbot/ember-utc-transform/graphs/contributors

## License

ember-utc-transform is Copyright (c) 2015 thoughtbot, inc.
It is free software, and may be redistributed
under the terms specified in the [LICENSE] file.

  [LICENSE]: /LICENSE.md

## About

ember-utc-transform is maintained by [Sean Doyle][seanpdoyle].

![thoughtbot](https://thoughtbot.com/logo.png)

  [seanpdoyle]: https://github.com/seanpdoyle

ember-utc-transform is maintained and funded by thoughtbot, inc.
The names and logos for thoughtbot are trademarks of thoughtbot, inc.

We love open source software!
See [our other projects][community]
or [hire us][hire] to help build your product.

  [community]: https://thoughtbot.com/community?utm_source=github
  [hire]: https://thoughtbot.com/hire-us?utm_source=github
