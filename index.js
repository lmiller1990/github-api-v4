const axios = require('axios')

axios.post('https://api.github.com/graphql', {
  headers: {
    `Authorization: bearer ${token}`
  }
})
