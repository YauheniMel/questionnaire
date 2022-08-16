export default function checkFormIsValid(data) {
  const {
    name, surname, date, phone, url, about, stack, project
  } = data;

  if(!name?.match(/^\s{0,}[А-Я][а-я]+\s{0,}$/)) {
    return false;
  }

  if(!surname?.match(/^\s{0,}[А-Я][а-я]+\s{0,}$/)) {
    return false;
  }

  if(!date) {
    return false;
  }

  if(!phone?.match(/^\d-\d{4}-\d\d-\d\d$/)) {
    return false;
  }

  if(!url?.match(/^\s{0,}https:\/\/[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?\s{0,}$/)) {
    return false;
  }

  if(about?.match(/^\s{0,}$/)) {
    return false;
  }

  if(stack?.match(/^\s{0,}$/)) {
    return false;
  }

  if(project?.match(/^\s{0,}$/)) {
    return false;
  }

  if(about?.length > 600 || stack?.length > 600 || project?.length > 600) {
    return false;
  }

  if(about && stack && project) {
    return true;
  }
}
