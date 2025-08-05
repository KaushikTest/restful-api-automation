class HttpsRequest {
    constructor(url, method, path, header, queryparam, body, params, headers) {
        this.url = url;
        this.method = method;
        this.path = path;
        this.header = header;
        this.queryparam = queryparam;
        this.body = body;
        this.params = params;
        this.headers = headers;
    }
}

class Header {
    constructor(Authorization, contentType, referer) {
        this.Authorization = Authorization;
        this['Content-Type'] = contentType;
        this.referer = referer;
    }
}

class HeaderBuilder {
    setAuthorization(Authorization) {
        this.Authorization = Authorization;
        return this;
    }

    setContentType(contentType) {
        this['Content-Type'] = contentType;
        return this;
    }

    setReferer(referer) {
        this.referer = referer;
        return this;
    }

    build() {
        return new Header(this.Authorization, this["Content-Type"], this.referer);
    }
}

class HttpsRequestBuilder {
    setUrl(url) {
        this.url = url;
        return this;
    }

    setMethod(method) {
        this.method = method;
        return this;
    }

    setPath(path) {
        this.path = path;
        return this;
    }

    setHeader(header) {
        this.header = header;
        return this;
    }

    setQueryParam(queryparam) {
        this.queryparam = queryparam;
        return this;
    }

    setRequestBody(body) {
        this.body = body;
        return this;
    }

    setParams(params) {
        this.params = params;
        return this;
    }

    setHeaders(headers) {
        this.headers = headers;
        return this;
    }

    build() {
        return new HttpsRequest(this.url, this.method, this.path, this.header, this.queryparam, this.body, this.params, this.headers);
    }
}

export { HttpsRequestBuilder, HeaderBuilder }