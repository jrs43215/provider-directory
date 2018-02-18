import { createStore } from 'redux';
import { filter, merge, prepend } from 'ramda';
import uuid from 'uuid/v4';
/**
 * Normally this would be more complex and be split across many files,
 * but that isn't necessary in a small app like this.
 */

// Predefined states
const defaultState = {
  currentSort: {
    field: null,
    sortType: null,
  },
  providers: [],
}

const initialState = {
  currentSort: {
    field: null,
    sortType: null,
  },
  providers: [
    {
      lastName: 'Harris',
      firstName: 'Mike',
      email: 'mharris@updox.com',
      specialty: 'Pediatrics',
      practiceName: 'Harris Pediatrics',
      uuid: uuid(),
    },
    {
      lastName: 'Wijoyo',
      firstName: 'Bimo',
      email: 'bwijoyo@updox.com',
      specialty: 'Podiatry',
      practiceName: 'Wijoyo Podiatry',
      uuid: uuid(),
    },
    {
      lastName: 'Rose',
      firstName: 'Nate',
      email: 'nrose@updox.com',
      specialty: 'Surgery',
      practiceName: 'Rose Cutters',
      uuid: uuid(),
    },
    {
      lastName: 'Carlson',
      firstName: 'Mike',
      email: 'mcarlson@updox.com',
      specialty: 'Orthopedics',
      practiceName: 'Carlson Orthopedics',
      uuid: uuid(),
    },
    {
      lastName: 'Witting',
      firstName: 'Mike',
      email: 'mwitting@updox.com',
      specialty: 'Pediatrics',
      practiceName: "Witting's Well Kids Pediatrics",
      uuid: uuid(),
    },
    {
      lastName: 'Juday',
      firstName: 'Tobin',
      email: 'tjuday@updox.com',
      specialty: 'General Medicine',
      practiceName: 'Juday Family Practice',
    },
  ],
};
// Actions
const ADD_PROVIDER = 'ADD_PROVIDER';
const REMOVE_PROVIDER = 'REMOVE_PROVIDER';

// Reducers

function addProviderReducer(provider, state) {
  const withUuid = merge({ uuid: uuid() }, provider);
  const providers = prepend(withUuid, state.providers);
  return merge(state, { providers });
}

function removeProviderReducer(providerUuid, state) {
  const providers = filter(p => p.uuid !== providerUuid, state.providers);
  return merge(state, { providers });
}

function reducer(state = defaultState, action) {
  switch (action.type) {
    case ADD_PROVIDER:
      return addProviderReducer(action.provider, state);
    case REMOVE_PROVIDER:
      return removeProviderReducer(action.providerIndex, state);
    default:
      return state;
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

export { reducer, addProvider, removeProvider, initialState };
