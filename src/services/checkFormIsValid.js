import { regExps } from './validateField';

export default function checkFormIsValid(data) {
  const { name, surname, date, phone, url, about, stack, project } = data.formData;

  if (!name?.match(regExps.startWithCapitalLetter)) {
    return false;
  }

  if (!surname?.match(regExps.startWithCapitalLetter)) {
    return false;
  }

  if (!date) {
    return false;
  }

  const now = +new Date();

  if (+new Date(date) > now) {
    return false;
  }

  if (!phone?.match(regExps.phone)) {
    return false;
  }

  if (!url?.match(regExps.url)) {
    return false;
  }

  if (about?.match(regExps.emptyField)) {
    return false;
  }

  if (stack?.match(regExps.emptyField)) {
    return false;
  }

  if (!stack?.match(regExps.stack)) {
    return false;
  }

  if (project?.match(regExps.emptyField)) {
    return false;
  }

  const maxLength = 600;

  if (about?.length > maxLength || stack?.length > maxLength || project?.length > maxLength) {
    return false;
  }

  if (!about?.trim() || !stack?.trim() || !project?.trim()) {
    return false;
  }

  return true;
}
