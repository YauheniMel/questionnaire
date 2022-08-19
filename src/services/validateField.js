export const regExps = {
  emptyField: /^\s*$/,
  startWithCapitalLetter: /^\s*([А-Я][а-я]+|[A-Z][a-z]+)\s*$/,
  phone: /^\d-\d{4}-\d\d-\d\d$/,
  startURL: /^\s*https:\/\//,
  url: /^\s*https:\/\/[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?\s*$/,
  stack: /^\s*([А-Яа-яA-Za-z0-9 ]+(, )?)*[А-Яа-яA-Za-z0-9 ]$/,
};

export default function validateField(name, value) {
  switch (name) {
    case 'name':
    case 'surname': {
      if (!value || value.match(regExps.emptyField)) return 'Поле пустое. Заполните пожалуйста.';

      if (!value.match(regExps.startWithCapitalLetter) && value.trim().length === 1) {
        return 'Поле должно содержать более одной буквы. Исправьте пожалуйста.';
      }

      if (!value.match(regExps.startWithCapitalLetter)) {
        return 'Поле должно быть заполнено с большой буквы. И не должно содержать отличных от букв символов. Исправьте пожалуйста.';
      }

      return null;
    }
    case 'date': {
      const now = +new Date();

      if (!value || value.match(regExps.emptyField)) return 'Поле пустое. Заполните пожалуйста.';

      if (+new Date(value) > now) return 'Для начала родитесь, а потом возвращайтесь;)';

      return null;
    }
    case 'phone': {
      if (!value || value.match(regExps.emptyField)) return 'Поле пустое. Заполните пожалуйста.';

      if (!value.match(regExps.phone)) {
        return 'Номер телефона введен не верно. Верный формат - 7-7777-77-77. Исправьте пожалуйста.';
      }

      return null;
    }
    case 'url': {
      if (!value || value.match(regExps.emptyField)) return 'Поле пустое. Заполните пожалуйста.';

      if (!value.match(regExps.startURL)) {
        return 'URL-адрес должен начинаться с https://. Исправьте пожалуйста.';
      }

      if (!value.match(regExps.url)) {
        return 'URL-адрес указан не верно. Верный формат - https://example.com. Исправьте пожалуйста.';
      }

      return null;
    }
    case 'stack': {
      const maxLength = 600;

      if (!value || value.match(regExps.emptyField)) return 'Поле пустое. Заполните пожалуйста.';

      if (value.length > maxLength) {
        return 'Поле может иметь не более 600 символов. Исправьте пожалуйста.';
      }

      if (!value.match(regExps.stack)) {
        return 'Поле должно состоять из букв и цифр разделенных запятой с пробелом. Пример: "JavaScript, TypeScript". Исправьте пожалуйста.';
      }

      return null;
    }
    case 'about':
    case 'project': {
      const maxLength = 600;

      if (!value || value.match(regExps.emptyField)) return 'Поле пустое. Заполните пожалуйста.';

      if (value.length > maxLength) {
        return 'Поле может иметь не более 600 символов. Исправьте пожалуйста.';
      }

      return null;
    }
    default:
      return null;
  }
}
