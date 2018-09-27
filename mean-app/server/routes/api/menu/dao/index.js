const mockData = require('../../../../../mockdata/mockdata');
const { yourSchema } = require('../schema/yourSchema');

const getMockDAOData = async () => {
    return mockData;
};

const getMongoDAOData = async () => {
    return yourSchema.find({});
};

module.exports = {
    getMockDAOData: getMockDAOData,
    getMongoDAOData: getMongoDAOData
};
