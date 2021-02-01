# YouGovChat Technical Test

It is required to provide a REST API for Premier League Football teams. It provided the enpoints below to interact with the teams:

- GET /teams: Will return the full dataset

- GET /teams/:team_name Will return the given team if found or an HTTP 404 error if not found

- POST /teams Will create a new Premier League team. If the given team exists it will be returned with an HTTP 200 code, if it didn't exist it will be returned with an HTTP 201 code. If the body received is invalid it will return an HTTP 400 code.

- PATCH /teams Will modify a team's image if the team exist and will return an HTTP 200 code along with the modified team. If the team did not exist it will return an HTTP 404 and if the body received is invalid it will will return an HTTP 400 code.

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

## Application Design

### Design

The application has a typical 3 layer structure:

- Routes

Where teams routes are provided, I tried to implement the least business login in these as it should live on services

- Services

teams.ts is a singleton class which provides the application business logic. It relies on the team models to provide the requested functionality

- Models

* team.ts Is the representation of a single team

* create-team-response Contains a team and a numeric http response.

### Tests

There are a few unit tests for routes and services. Routes tests validate responses and services tests are responsible of validating the behavior of team service.

### Technical choices

- Express
https://www.npmjs.com/package/express

I chose Express since the test had to be completed using typescript so Express.js is a well known, stable and community supported module to build a REST API.

- Helmet
https://www.npmjs.com/package/helmet

As its documentation says it is not a silver bullet but it helps to improve security of Express server by setting some important headers.

- Axios
https://www.npmjs.com/package/axios

Chose Axios instead of fetch because it performs automatic transforms of JSON data.


## Authors

* **Alberto Godar
