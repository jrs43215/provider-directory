import { connect } from 'react-redux';
import { reverse } from 'ramda';
import ProviderList from './ProviderList';
import { removeProvider } from '../redux';
import { sort } from '../models';

const mapStateToProps = state => {
  const { field, sortType } = state.currentSort;
  return { providers: }
}

const mapDispatchToProps = dispatch => {
  return {
    removeProvider,
  };
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProviderList);

export default Container;
