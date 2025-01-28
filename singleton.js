class Singleton {
  constructor() {
    if (Singleton.instance) return Singleton.instance;
    this.config = Object.create(null); // Create object with no prototype
    Singleton.instance = this;
  }

  setConfig(key, value) {
    this.validateKey(key);
    this.config[key] = value;
  }

  getConfig(key) {
    return this.config[key];
  }

  validateKey(key) {
    if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
      throw new Error('Invalid key: Prototype pollution attempt detected!');
    }
  }
}

// Singleton instance
const singleton = new Singleton();
