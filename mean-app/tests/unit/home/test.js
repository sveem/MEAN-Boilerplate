const { assert } = require('chai');
const { getMockData } = require('../../../server/routes/api/home/controller/index');

describe('getFireBaseMockData', function () {
    it('should return true for an existing mock data with length 3', async function () {
        const mockData = await getMockData();
        assert.equal(mockData.length, 3);
    });

    it('should return -1 if value not exists', async function () {
        const mockData = await getMockData();
        assert.equal(mockData.indexOf(mockData[4]), -1);
    });
});
