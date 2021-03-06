/* eslint-disable no-console */

const ip = require('ip');

const divider = '\n-----------------------------------';

/**
 * Logger middleware, you can customize it to make messages more personal
 */
const logger = {

  // Called whenever there's an error on the server we want to print
  error: (err) => {
    console.error(err);
  },

  // Called when express.js app starts on given port w/o errors
  appStarted: (port, host, tunnelStarted) => {
    console.log('Server started ! ✓');

    // If the tunnel started, log that and the URL it's available at
    if (tunnelStarted) {
      console.log('Tunnel initialised ✓');
    }

    console.log(`
${'Access URLs:'}${divider}
Localhost: ${`http://${host}:${port}`}
      LAN: ${`http://${ip.address()}:${port}${tunnelStarted ? `\n    Proxy: ${tunnelStarted}` : ''}`}${divider}
${'Press \'CTRL-C\' to stop'}
    `);
  },
};

module.exports = logger;
