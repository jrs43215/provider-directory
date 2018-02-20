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
  currentSearch: '',
  selectedProvider: '',
  providers: [],
}

const initialState = {
  currentSort: {
    field: null,
    sortType: null,
  },
  currentSearch: '',
  selectedProvider: '',
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
      uuid: uuid(),
    },
  ],
};

// Actions
//
const ADD_PROVIDER = 'ADD_PROVIDER';
const SELECT_PROVIDER = 'SELECT_PROVIDER';
const REMOVE_PROVIDER = 'REMOVE_PROVIDER';
const CHANGE_SORT = 'CHANGE_SORT';
const CHANGE_SEARCH = 'CHANGE_SEARCH';

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
    case CHANGE_SORT:
      return merge(state, { currentSort: action.sort });
    case CHANGE_SEARCH:
      return merge(state, { currentSearch: action.search });
    case SELECT_PROVIDER:
      return merge(state, { selectedProvider: action.selected });
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

function changeSort(field, sortType) {
  return {
    type: CHANGE_SORT,
    sort: { field, sortType },
  }
}

function changeSearch(search) {
  return {
    type: CHANGE_SEARCH,
    search
  }
}

function selectProvider(providerUuid) {
    return {
      type: SELECT_PROVIDER,
      selected: providerUuid
    }
}

export { reducer, addProvider, removeProvider, changeSort, changeSearch, selectProvider, initialState };
