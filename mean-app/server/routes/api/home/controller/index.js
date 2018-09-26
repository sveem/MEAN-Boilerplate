const { getMockDAOData, getFireBaseDAOData } = require('../dao/index');

const getMockData = async () => {
    return getMockDAOData();
};

const getFireBaseData = async () => {
    return getFireBaseDAOData();
};

module.exports = {
    getMockData: getMockData,
    getFireBaseData: getFireBaseData
};
