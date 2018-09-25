// Your controller
const { getMockData } = require('../dao/index');

const getMockDAOData = async () => {
  return getMockData();
 };

 module.exports = {
   getMockDAOData: getMockDAOData  
 }
 