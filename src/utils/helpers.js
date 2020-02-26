// Rewrite array of objects into object. Sort by object id.
const arrayToObject = array =>
  Object.keys(array).reduce((obj, key) => {
    const initElement = obj;
    initElement[array[key].id] = array[key];
    return initElement;
  }, {});

export default arrayToObject;
