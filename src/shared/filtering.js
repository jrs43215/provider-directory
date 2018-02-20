import { any, contains, filter, map, toLower, values } from 'ramda';


/**
 * anyStartsWithFilter - takes an array of objects with all string values,
 * and filters it down to any object with at least one field that starts with
 * the given search value.
 *
 * This is case insensitive.
 *
 * @param  {Object[]} objList The array to be filtered.
 * @param  {string} search  The string to filter against
 * @return {Object[]}         The filtered result
 */
function anyContainsFilter(objList, search) {
  const loweredSearch = toLower(search);
  const lowerAll = (l) => map(toLower, l);
  const predicate = (fields) => any(contains(loweredSearch), lowerAll(fields));
  return filter((o) => predicate(values(o)), objList);
}

export { anyContainsFilter };
