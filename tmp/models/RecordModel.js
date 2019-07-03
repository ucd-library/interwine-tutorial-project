const {BaseModel} = require('@ucd-lib/cork-app-utils');
const RecordService = require('../services/RecordService');
const RecordStore = require('../stores/RecordStore');

class RecordModel extends BaseModel {

  constructor() {
    super();

    this.store = RecordStore;
    this.service = RecordService;
      
    this.register('RecordModel');
  }

}

module.exports = new RecordModel();