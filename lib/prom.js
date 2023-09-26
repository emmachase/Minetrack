const client = require('prom-client')

const register = new client.Registry()

const gauge = new client.Gauge({
  name: 'minetrack_online_players',
  help: 'The number of players online for a given server',
  labelNames: ['host', 'name'],
  collect () {
    const app = require('./appinstance')()
    app.serverRegistrations.forEach(serverRegistration => {
      const pingHistory = serverRegistration.getPingHistory() // graphData[serverRegistration.graphData.length - 1]
      if (pingHistory.playerCount) {
        const host = serverRegistration.data.ip
        const name = serverRegistration.data.name
        this.set({ host, name }, pingHistory.playerCount)
      }
    })
  }
})

register.registerMetric(gauge)

module.exports = register
