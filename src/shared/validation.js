import { any, has, isNil, filter } from 'ramda';

/**
 * anyNil - checks if any arguments are null or undefined.
 *
 * @param {...*}
 * @return {boolean}
 */
function anyNil() {
  return any(isNil, arguments);
}

/**
 * findMissing - Finds any null/undefined keys in an object.
 *
 * @param  {string[]} requiredFields = [] the required fields
 * @param  {Object} obj                 object to check
 * @return {string[]}                   array of missing keys
 */
function findMissing(requiredFields = [], obj) {
  const hasField = (field) => has(field, obj);
  return filter(hasField, requiredFields);
}

export { anyNil, findMissing };
