const objectHandler = {
  set(target, key, value) {
    if (key === '__proto__' || key === 'constructor') {
      throw new Error('Prototype pollution attempt detected!');
    }
    target[key] = value;
    return true;
  },
};

const secureObject = new Proxy({}, objectHandler);

// Example Usage
secureObject.name = 'Product'; // Valid
secureObject.__proto__ = { polluted: true }; // Throws Error
