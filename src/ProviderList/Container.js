import { connect } from 'react-redux';
import ProviderList from './ProviderList';
import { removeProvider, changeSort, changeSearch, selectProvider } from '../redux';
import { sortAndFilter } from '../models/providers';

const mapStateToProps = state => {
  const { field, sortType } = state.currentSort;
  const providers = sortAndFilter(field, sortType, state.currentSearch, state.providers);
  return { providers, sortType, sortField: field, selected: state.selectedProvider };
}

const mapDispatchToProps = dispatch => {
  return {
    removeProvider: (uuid) => dispatch(removeProvider(uuid)),
    changeSort: (field, type) => dispatch(changeSort(field, type)),
    changeSearch: (search) => dispatch(changeSearch(search)),
    selectProvider: (uuid) => dispatch(selectProvider(uuid)),
  };
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProviderList);

export default Container;
