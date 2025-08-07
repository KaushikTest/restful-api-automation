
import * as ListObjects from '../main/list-all-objects';

describe('listAllObjects', () => {
    it('should return a list of objects', async () => {
        const response = await ListObjects.listAllObjects();
        expect(response).toBeDefined();
        expect(response.status).toBe(200);
        expect(response.body).toBeDefined();
        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body.length).toBeGreaterThan(0);
        expect(response.body[0]).toHaveProperty('id');
        expect(response.body[0]).toHaveProperty('name');
    });


});