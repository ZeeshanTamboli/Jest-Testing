const functions = {
  userDetails: () => {
    const user = { firstName: 'Zeeshan' };
    user['lastName'] = 'Tamboli';
    return user;
  },

  isNull: () => null,

  checkValue: x => x
};

module.exports = functions;
