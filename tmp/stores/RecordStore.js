const {BaseStore} = require('@ucd-lib/cork-app-utils');

class RecordStore extends BaseStore {

  constructor() {
    super();

    this.data = {};
    this.events = {};
  }

}

module.exports = new RecordStore();