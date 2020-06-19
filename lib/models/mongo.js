'use strict';

class Mongo {
  constructor(schema) {
    this.schema = schema;
  }

  read(_id) {
    let searchParam = _id ? {_id} : {};
    return schema.find(searchParam);
  }

  create(data) {
    let newEntry = new schema(data);
    return newEntry.save(newEntry);
  }

  update(_id, data) {
    return schema.findByIdAndUpdate(_id, data);
  }

  delete(_id) {
    return schema.findByIdAndDelete(_id);
  }
}

module.exports = Mongo;