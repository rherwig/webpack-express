# Webpack + Express Boilerplate
This is a template using webpack and express to render a web application.

## Getting started
Run the following commands, to start development:
```
npm install
npm start
```

This will start a dev server on port `3000`.

The server is started from `public/server.js` whereas the client source
resides in the `src/` directory.

## Production
You can trigger a production build by running
```
npm run build
```

This will copy all the application files to the `public/` directory,
ready to be deployed.