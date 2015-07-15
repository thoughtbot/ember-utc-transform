import DS from "ember-data";
/* global moment */

export default DS.Transform.extend({
  serialize: function(value) {
    if (value) {
      return value.toJSON();
    } else {
      return null;
    }
  },

  deserialize: function(value) {
    if (value) {
      return moment.utc(value);
    } else {
      return null;
    }
  }
});
