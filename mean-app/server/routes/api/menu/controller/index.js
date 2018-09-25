// Your controller
const { getMockDAOData, getMongoDAOData } = require('../dao/index');

const getMockData = async () => {
  return getMockDAOData();
 };

 const getMongoData = async () => {
  return getMongoDAOData();
 };

 module.exports = {
   getMockData: getMockData,
   getMongoData: getMongoData  
 }
 