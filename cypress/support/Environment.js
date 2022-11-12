const env = {
  prod: {
    id: 100,
    name: 'production',
    baseUrl: 'http://qatools.ro',
  },
  uat: {
    id: 100,
    name: 'UAT',
    baseUrl: 'http://qatools.uat',
  },
};

module.exports = {
  getEnv(envVarName) {
    return env[Cypress.env('env')][envVarName];
  },
};
