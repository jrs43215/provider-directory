import {
  any,
  compose,
  isNil,
  merge,
  prop,
  reverse,
  sortBy,
  toLower
} from 'ramda';

// These might seem like they should just be arrays,
// but this will work better with a linter.
const requiredFields = {
  lastName: 'lastName',
  firstName: 'firstName',
  email: 'email',
};

const optionalFields = {
  specialty: 'specialty',
  practiceName: 'practiceName',
};

const fields = merge(requiredFields, optionalFields);

const sortTypes = { asc: 'asc', desc: 'desc' };

// for default positional sort, provide null for either field or type.
function sort(field, type, list = []) {
  if (anyIsNil(field, type)) {
    return list;
  }

  const sortCaseInsensitive = sortBy(compose(toLower, prop(field)));
  const sorted = sortCaseInsensitive(list);

  if (type === sortTypes.desc) {
    return reverse(sorted)
  }

  return sorted;
}

const providers = { requiredFields, optionalFields, sortTypes, sort };

export { providers }
