Office of Head Start Training & Technical Assistance Data Platform
=============================================

Welcome to the home of the OHS TTADP.


Getting Started
---------------

Make sure Docker is installed. To check run `docker ps`

Run `yarn docker:deps`. This builds the frontend and backend docker containers and install dependencies. You only need to run this step the first time you fire up the app and when dependencies are added/updated/removed. Running `yarn docker:start` starts the backend and frontend, browse to `http://localhost:3000` to hit the frontend and `http://localhost:3000/api` to hit the backend. Copying `.env` to `.env.dev`, substituting in your user id and group id will cause any files created in docker containers to be owned by your user on your host.

The frontend [proxies requests](https://create-react-app.dev/docs/proxying-api-requests-in-development/) to paths it doesn't recognize to the backend.

Running Tests
-------------

Run `yarn docker:deps` to install dependencies. Run `yarn docker:test` to run all tests for the frontend and backend.

Other Commands
--------------

| Yarn Command | Description |
|-|-|
| `yarn docker:deps` | Install dependencies for the frontend and backend |
| `yarn docker:start` | Starts the backend and frontend docker containers |
| `yarn docker:stop` | Stops the backend and frontend docker containers |
| `yarn docker:test` | Runs tests for the frontend and backend in docker containers |
| `yarn docker:lint` | Runs the linter for the frontend and backend in docker containers |
| `yarn deps` | Install dependencies for the frontend and backend |
| `yarn start` | Starts the backend and frontend |
| `yarn server` | Starts the backend |
| `yarn client` | Start the frontend |
| `yarn test` | Run tests for only the backend |
| `yarn test:ci` | Run tests for the backend with coverage and output results to xml files|
| `yarn test:all` | Run `yarn test:ci` for both the frontend and backend |
| `yarn lint` | Run the linter only for the backend |
| `yarn lint:ci` | Run the linter for the the backend with results output to xml files |
| `yarn lint:all` | Run `yarn lint:ci` for both the frontend and backend |

Deployment
----------

Deployment to `Staging` and `Production` environments is automated through the CI/CD pipeline.

* The `main` branch deploys to `Staging`.
* The `production` branch deploys to `Production`
