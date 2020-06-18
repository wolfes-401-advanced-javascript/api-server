'use strict';

const schema = require('./products-schema.js');


class Products {
  
  read() {
    find()
  }

  create() {
    save()
  }

  update() {
    findOneByIdAndUpdate()
  }

  delete() {
    findOneByIdAndDelete()
  }
}

// constructor(schema){
//   this.schema = schema;
// }

// get(_id) {
//   let searchParam = _id ? {_id} : {};
//   return this.schema.find(searchParam);
// }

// create(data) {
//   let newObject = new this.schema(data);
//   return newObject.save(newObject);
// }

// update(_id, data){
//   return this.schema.findByIdAndUpdate(_id, data);
// }

// delete(_id){
//   return this.schema.findByIdAndDelete(_id);
// }

