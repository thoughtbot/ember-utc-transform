import DS from "ember-data";
/* global moment */

export default DS.Transform.extend({
  serialize: function(value) {
    return value ? value.toJSON() : null;
  },

  deserialize: function(value) {
    return moment.utc(value);
  }
});
