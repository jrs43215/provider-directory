import { createStore } from 'redux';
import { merge, prepend, remove} from 'ramda';

/**
 * Normally this would be more complex and be split across many files,
 * but that isn't necessary in a small app like this.
 */

// Actions
const ADD_PROVIDER = 'ADD_PROVIDER';
const REMOVE_PROVIDER = 'REMOVE_PROVIDER';

// Reducers

function addProviderReducer(provider, state) {
  const providers = prepend(provider, state.providers);
  return merge(state, { providers });
}

function removeProviderReducer(providerIndex, state) {
  const providers = remove(providerIndex, 1, state.providers);
  return merge(state, { providers });
}

function reducer(state = {}, action) {
  switch (action.type) {
    case ADD_PROVIDER:
      return addProviderReducer(action.provider, state);
    case REMOVE_PROVIDER:
      return removeProviderReducer(action.providerIndex, state);
  }
}

// Action Creators
function addProvider(provider) {
  return {
    type: ADD_PROVIDER,
    provider
  }
}

function removeProvider(providerIndex) {
  return {
    type: REMOVE_PROVIDER,
    providerIndex
  }
}

let store = createStore(reducer);

export { store, addProvider, removeProvider };
