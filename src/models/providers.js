import { merge, values } from 'ramda';
import { sortByField } from '../shared/sorting';
import { anyContainsFilter } from '../shared/filtering';
import { findMissing } from '../shared/validation';

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

function sortAndFilter(field, type, search, providers) {
  const filtered = anyContainsFilter(providers, search);
  return sortByField(field, type, filtered);
}

function validate(provider) {
  const missing = findMissing(values(requiredFields), provider);
  return { missing };
}

export { requiredFields, optionalFields, fields, sortAndFilter, validate };
