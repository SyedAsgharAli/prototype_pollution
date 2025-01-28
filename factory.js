class ObjectFactory {
  static createObject(input) {
    const sanitizedObject = Object.keys(input).reduce((acc, key) => {
      if (key !== '__proto__' && key !== 'constructor') {
        acc[key] = input[key];
      }
      return acc;
    }, Object.create(null)); // Object with no prototype
    return sanitizedObject;
  }
}

// Example Usage
const safeObject = ObjectFactory.createObject({ name: 'Product', __proto__: { polluted: true } });
console.log(safeObject.polluted); // undefined
