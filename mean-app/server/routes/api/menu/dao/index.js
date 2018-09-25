// Your DAO
const mockData = require('../../../../../mockdata/mockdata');
const { yourSchema } = require('../schema/yourSchema');

const getMockData = async () => {
  return mockData;  
}

const getMongoData = async () => {
  return yourSchema.find({});
};


module.exports = {
  getMockData: getMockData,
  getMongoData: getMongoData  
}


