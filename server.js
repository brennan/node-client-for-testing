const Analytics = require('analytics-node')
const analytics = new Analytics('<add writeKey here>', {
  host: 'https://www.segment.build',
  flushAt: 1
})

analytics.identify({
  userId: '123'
})

analytics.track({
  event: 'Test Event',
  userId: '123'
})

analytics.page({
  name: 'Test Page',
  userId: '123'
})
