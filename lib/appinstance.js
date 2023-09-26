const App = require('./app')
let myCoolApp
module.exports = () => {
  if (!myCoolApp) {
    myCoolApp = new App()
  }
  return myCoolApp
}
