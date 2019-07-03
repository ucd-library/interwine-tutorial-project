const {BaseService} = require('@ucd-lib/cork-app-utils');
const RecordStore = require('../stores/RecordStore');

class RecordService extends BaseService {

  constructor() {
    super();
    this.store = RecordStore;
  }

}

module.exports = new RecordService();