import { compose, prop, reverse, sortBy, toLower } from 'ramda';
import { anyNil } from './validation';

const sortTypes = { asc: 'asc', desc: 'desc' };

/**
 * sortByField - Sorts an array. Does nothing if field or type is nil.
 *
 * @param  {string} field       field to sort on
 * @param  {string} type        type of sort
 * @param  {Object[]} list = [] providers to be sorted
 * @return {Object[]}           sorted array of providers
 */
function sortByField(field, type, list = []) {
  if (anyNil(field, type)) {
    return list;
  }

  const sortCaseInsensitive = sortBy(compose(toLower, prop(field)));
  const sorted = sortCaseInsensitive(list);

  if (type === sortTypes.desc) {
    return reverse(sorted);
  }

  return sorted;
}

export { sortTypes, sortByField };
