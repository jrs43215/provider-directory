import { map, merge, values } from 'ramda';
import { sortTypes, sortByField } from '../shared/sorting';
import { anyIsNil, findMissing } from '../shared/validation';

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

function sort(field, type, providers) {
  return sortByField(field, type, providers);
}

function validate(provider) {
  const missing = findMissing(values(requiredFields), provider);
  return { missing };
}

export { requiredFields, optionalFields, fields, sort, validate };
