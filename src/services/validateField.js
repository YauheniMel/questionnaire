export default function validateField(name, value) {
  const emptyFieldRegExp = /^\s{0,}$/;
  switch (name) {
    case 'name':
    case 'surname': {
      const regexp = /^\s{0,}[А-Я][а-я]+\s{0,}$/;

      if(!value || value.match(emptyFieldRegExp)) return 'Поле пустое. Заполните пожалуйста.';

      if(!value.match(regexp) && value.length === 1) {
        return 'Поле должно содержать более одной буквы. Исправьте пожалуйста.'
      }

      if(!value.match(regexp)) {
        return 'Поле должно быть заполнено с большой буквы. И не должно содержать отличных от букв символов. Исправьте пожалуйста.'
      }

      return null;
    }
    case 'date': {
      if(!value || value.match(emptyFieldRegExp)) return 'Поле пустое. Заполните пожалуйста.';

      if(+new Date(value) > +new Date()) return 'Для начала родитесь, а потом возвращайтесь;)';

      return null;
    }
    case 'phone': {
      const regexp = /^\d-\d{4}-\d\d-\d\d$/;

      if(!value || value.match(emptyFieldRegExp)) return 'Поле пустое. Заполните пожалуйста.';

      if(!value.match(regexp)) {
        return 'Номер телефона введен не верно. Верный формат - 7-7777-77-77. Исправьте пожалуйста.'
      }

      return null;
    }
    case 'url': {
      const regexp = /^\s{0,}https:\/\/[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?\s{0,}$/;
      const startURLregExp = /^\s{0,}https:\/\//;

      if(!value || value.match(emptyFieldRegExp)) return 'Поле пустое. Заполните пожалуйста.';

      if(!value.match(startURLregExp)) {
        return 'URL-адрес должен начинаться с https://. Исправьте пожалуйста.';
      }

      if(!value.match(regexp)) {
        return 'URL-адрес указан не верно. Верный формат - https://example.com. Исправьте пожалуйста.';
      }

      return null;
    }
    case 'about':
    case 'stack':
    case 'project': {
      if(!value || value.match(emptyFieldRegExp)) return 'Поле пустое. Заполните пожалуйста.';

      if(value.length > 600) {
        return 'Поле может иметь не более 600 символов. Исправьте пожалуйста.';
      }

      return null;
    }
    default:
      return null;
  }
}
