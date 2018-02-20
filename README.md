This was made with Create React App, Redux, and Material-UI. Here is a basic description of the project structure:

The 2 main components are `src/CreateProvider/CreateProvider.js`, and `src/ProviderList/ProviderList.js`. All of the Redux actions, reducers, etc are in `src/redux.js`. CreateProvider and ProviderList each have a `Container.js` in the same folder as them which connects them to the Redux store. Filtering, sorting, and validation is handled by `src/models/providers.js`, which gets most of its logic from utility modules in `src/shared`.


`npm start` can be used to run the project on the development server (recommended), or `npm run-script build` can be used to build the project which can then be opened in a browser. The output of the build is in `/build`. Unfortunately this can't be done with a bit of extra configuration; you'll need to update package.json to have a `homepage` property with the value equal to the path to the build output. `npm run-script build` is primarily intended for production deployments.
