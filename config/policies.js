/**
 * Policy Mappings
 *
 * Policies are simple functions which run before your controllers.
 * You can apply one or more policies to a given controller, or protect
 * its actions individually.
 *
 * Any policy file (e.g. `api/policies/authenticated.js`) can be accessed
 * below by its filename, minus the extension, (e.g. 'authenticated')
 */

module.exports = {
  policies: {
    'v1/UserController': {
      read: ['isAuthenticated', 'isSuperUser'],
      update: ['isAuthenticated', 'isSuperUser'],
      delete: ['isAuthenticated', 'isSuperUser'],
    },

    'v1/user/RegistrationController': {
      // create: ['isAuthenticated', 'isManager'],
    },

    'v1/user/SessionController': {
      refreshToken: ['isAuthenticated'],
    },
  },
};
