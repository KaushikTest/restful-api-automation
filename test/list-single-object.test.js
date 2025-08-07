
import * as ListObjects from '../main/list-all-objects';
import * as ListSingleObject from '../main/list-single-object';

jest.setTimeout(30000);

describe('listAllObjects', () => {
    it('should return object by Id', async () => {
        const response = await ListObjects.listAllObjects();
        let response_size = response.body.length;
        for (let i = 0; i < response_size; i++) {
            const response_new = await ListSingleObject.listSingleObject(response.body[i].id);
            console.log(i);
            expect(response_new).toBeDefined();
            expect(response_new.status).toBe(200);
            expect(response_new.body).toBeDefined();

        }
    });


});