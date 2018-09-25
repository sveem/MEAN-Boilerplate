const mockData = require('../../../../../mockdata/mockdata');
const firebase = require('../../../../database/firebase/admin-db');

const getMockDAOData = async () => {
  return mockData;  
};

const getFireBaseDAOData = async () => {
  return firebase.database().ref('/your-collection').once('value');
};

module.exports = {
  getMockDAOData: getMockDAOData,
  getFireBaseDAOData: getFireBaseDAOData
}