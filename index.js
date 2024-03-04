const app = require('./src/app') // the actual Express application
const logger = require('./src/utils/logger')

app.listen(5000, () => {
  logger.info(`Server running on port 5000`)
})
