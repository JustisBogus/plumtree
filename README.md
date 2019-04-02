# Akademija-Base-2019-03

Contains an empty symfony project with a very simple react example and setup, inside a docker container along with all the necessary services for a simple application.

To get started launch the container stack with:

`docker-compose up -d`

To interact with the application, open the `akademija` container with kitematic or:

`docker-compose exec akademija bash`

To setup react and javascript, run:

`yarn install`

To enable file watching:

`yarn watch`

To simply build the javascript, run the:

`yarn build`

note: react code is in the `assets/js/app.jsx` file.
