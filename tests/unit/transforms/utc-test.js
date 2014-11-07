import {
  moduleFor,
  test
} from "ember-qunit";
/* global moment */

moduleFor("transform:utc", "UtcTransform", {
  // Specify the other units that are required for this test.
  // needs: ['serializer:foo']
});

test("#serialize returns a UTC string", function() {
  var transform = this.subject();
  var utcString = "2014-08-01T00:00:00.000Z";
  var date = moment.utc(utcString);

  equal(transform.serialize(date), utcString);
});

test("#deserialize returns a moment instance", function() {
  var transform = this.subject();
  var deserialized = transform.deserialize("2014-08-01T00:00:00.000Z");

  equal(deserialized.format("LL"), "August 1, 2014");
});
