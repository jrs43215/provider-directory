import { any, isNil } from 'ramda';

/**
 * Normally a 'helpers' or 'utils' module is an anti-pattern,
 * and you'd want to separate these out into more specific groups.
 */

/**
 * Check if any argument is null or undefined.
 */
 function anyNil() {
   return any(isNil, arguments);
 }
