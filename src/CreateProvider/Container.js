import { connect } from 'react-redux';
import CreateProvider from './CreateProvider';
import { addProvider } from '../redux';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return {
    addProvider: (provider) => dispatch(addProvider(provider))
  };
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateProvider);

export default Container;
