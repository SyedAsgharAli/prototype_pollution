const RoleModule = (function () {
  const roles = Object.create(null); // Secure roles object

  function addRole(key, value) {
    if (key === '__proto__' || key === 'constructor') {
      throw new Error('Prototype pollution attempt detected!');
    }
    roles[key] = value;
  }

  function getRoles() {
    return { ...roles }; // Return a copy to ensure immutability
  }

  return {
    addRole,
    getRoles,
  };
})();

// Example Usage
RoleModule.addRole('admin', true);
console.log(RoleModule.getRoles());
