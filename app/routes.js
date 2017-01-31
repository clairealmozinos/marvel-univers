//
// Create routes
//

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = cb => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes() {
  return [
    {
      path: '/',
      name: 'list characters',
      getComponent(nextState, cb) {
        import('containers/ListCharacters')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: '/:name/:id',
      name: 'character id',
      getComponent(nextState, cb) {
        import('containers/CharacterId')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
