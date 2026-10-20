# REST API automation practice

Jest and Supertest tests for the public
[restful-api.dev](https://restful-api.dev/) objects API. The cases cover
listing objects, fetching selected IDs, and fetching one object.

## Run

```bash
npm ci
npm test
```

These are live integration tests against a third-party practice API. They need
network access, and an outage or behavior change on that site can fail the
suite. Requests are assembled in `commons/`, flows in `main/`, and assertions
in `test/`.
