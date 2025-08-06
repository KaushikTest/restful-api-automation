import { HttpsRequestBuilder } from '../commons/https_request_builder';
import { BASE_URL, httpsRequest } from '../commons/path-file';

export async function listObjectByIds(id) {
    let response;
    const request = new HttpsRequestBuilder()
        .setUrl(BASE_URL)
        .setMethod('get')
        .setPath('')
        .setHeader(null)
        .setQueryParam({ id: id })
        .setRequestBody(null)
        .setParams(null)
        .setHeaders({ 'content-type': 'application/json' })
        .build();


    await httpsRequest(request).then(async (server_response) => {
        response = await server_response;
    }).catch((error) => {
        console.error('Error fetching objects:', error);
        throw error;
    });
    return response;

}