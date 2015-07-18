import {
  moduleFor,
  test
} from 'ember-qunit';
import moment from 'moment';

moduleFor('transform:utc', 'UtcTransform');

test('#serialize returns a UTC string', function(assert) {
  const transform = this.subject();
  const utcString = '2014-08-01T00:00:00.000Z';
  const date = moment.utc(utcString);

  assert.equal(transform.serialize(date), utcString);
});

test('#deserialize returns null for null date string', function(assert) {
  const transform = this.subject();

  assert.equal(transform.deserialize(null), null);
});

test('#deserialize returns a moment instance', function(assert) {
  const transform = this.subject();
  const deserialized = transform.deserialize('2014-08-01T00:00:00.000Z');

  assert.equal(deserialized.format('LL'), 'August 1, 2014');
});
