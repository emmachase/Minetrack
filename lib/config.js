const fs = require('fs')

/**
 {
  "site": {
    "port": 8080,
    "ip": "0.0.0.0"
  },
  "rates": {
    "pingAll": 3000,
    "connectTimeout": 2500
  },
  "oldPingsCleanup": {
    "enabled": false,
    "interval": 3600000
  },
  "logFailedPings": true,
  "logToDatabase": false,
  "graphDuration": 86400000,
  "serverGraphDuration": 180000
 }
 */

const configLocation = process.env.CONFIG_LOCATION || './config.json'

/**
 * @type {{
 *  site: {
 *   port: number,
 *   ip: string
 *  },
 *  rates: {
 *   pingAll: number,
 *   connectTimeout: number
 *  },
 *  oldPingsCleanup: {
 *   enabled: boolean,
 *   interval: number
 *  },
 *  logFailedPings: boolean,
 *  logToDatabase: boolean,
 *  graphDuration: number,
 *  serverGraphDuration: number,
 *  createDailyDatabaseCopy: boolean?
 * }}
 */
const config = JSON.parse(fs.readFileSync(configLocation, 'utf8'))

module.exports = config
