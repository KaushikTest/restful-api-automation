export const BASE_URL = require('supertest')("https://api.restful-api.dev/objects");

export function httpsRequest(request) {
    switch (request.method) {
        case 'get':
            return request.url.get(request.path).send(request.body).query(request.queryparam).set(request.headers);
        case 'post':
            return request.url.post(request.path).send(request.body).query(request.queryparam).set(request.headers);
        case 'put':
            return request.url.put(request.path).send(request.body).query(request.queryparam).set(request.headers);
        case 'patch':
            return request.url.patch(request.path).send(request.body).query(request.queryparam).set(request.headers);
        default:
            return request.url.delete(request.path).send(request.body).query(request.queryparam).set(request.headers);
    }
}