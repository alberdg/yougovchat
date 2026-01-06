# YouGovChat – Backend REST API (Technical Test)

This project was built as a backend technical test to demonstrate:
- API design and HTTP semantics
- Separation of concerns
- Testable business logic
- Production-minded structure for a small service

Although intentionally simple, the code is structured as it would be in a real-world backend service.

It is required to provide a REST API for Premier League Football teams. It provided the enpoints below to interact with the teams:

- GET /teams: Will return the full dataset

- GET /teams/:team_name Will return the given team if found or an HTTP 404 error if not found

- POST /teams Will create a new Premier League team. If the given team exists it will be returned with an HTTP 200 code, if it didn't exist it will be returned with an HTTP 201 code. If the body received is invalid it will return an HTTP 400 code.

- PATCH /teams Will modify a team's image if the team exist and will return an HTTP 200 code along with the modified team. If the team did not exist it will return an HTTP 404 and if the body received is invalid it will will return an HTTP 400 code.

## Application Design

## Design decisions

### Layered architecture
The application follows a simple 3-layer structure (routes, services, models) to keep HTTP concerns separated from business logic. This makes the service easier to test and evolve.

### Idempotent POST
The POST /teams endpoint is idempotent: creating an existing team returns HTTP 200 instead of duplicating data. This simplifies client retries and avoids unintended duplication.

### Error handling and validation
Request validation and error responses are explicit and consistent, returning appropriate HTTP status codes (400, 404, 200, 201).

## API endpoints

| Method | Endpoint            | Description                          |
|-------|---------------------|--------------------------------------|
| GET   | /teams              | Returns all teams                    |
| GET   | /teams/:team_name   | Returns a team by name               |
| POST  | /teams              | Creates a team (idempotent)          |
| PATCH | /teams              | Updates a team's image               |

## Testing strategy

- Service tests focus on business logic and edge cases.
- Route tests validate HTTP behavior, status codes and payloads.

This separation keeps business rules testable without coupling them to the HTTP layer.

## Production considerations

If this service were to evolve into a production system, the next steps would be:

- Introduce a persistence layer (PostgreSQL or DynamoDB) behind a repository interface
- Add request validation using a schema-based approach (e.g. Zod or Joi)
- Introduce pagination and filtering for GET /teams
- Add structured logging and request correlation IDs
- Add integration tests and contract tests
- Containerize the service and add CI checks

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

```
git clone https://github.com/alberdg/yougovchat.git
```

### Prerequisites

- Node.js
- npm

### Installing

```
npm start
```

Once the server is started it will display a console message saying it is listening on the given port.

You could check it is running by visiting http://localhost:{port}/teams or by running a curl request.

## Running the tests

In order to run the unit tests provided you need to execute the command below:

```
npm run test
```

## Deployment

The server will start on port 3001 by default unless environment variable YOUGOV_CHAT_PORT exists in which case will take its value

## Authors

* **Alberto Godar**
