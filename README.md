This was made with Create React App, Redux, and Material-UI. Here is a basic description of the project structure:

The 2 main components are `src/CreateProvider/CreateProvider.js`, and `src/ProviderList/ProviderList.js`. All of the Redux actions, reducers, etc are in `src/redux.js`. CreateProvider and ProviderList each have a `Container.js` in the same folder as them which connects them to the Redux store. Filtering, sorting, and validation is handled by `src/models/providers.js`, which gets most of its logic from utility modules in `src/shared`.
