const axios = require('axios')
const token = require('./token')
console.log(token)

axios({
  method: 'post',
  url: 'https://api.github.com/graphql', 
  data: {
    'query': `
    query { 
      repository(owner: "branu-ws", name: "flamingo") {
        issues(last: 5, states:OPEN) {
          edges {
            node {
              title
              url
              labels(first:5) {
                edges {
                  node {
                    name
                  }
                }
              }
            }
          }
        }
      }
    }`
  },
  headers: {
    'Authorization': `bearer ${token}`
  }
})
  .then(res => {
    const rep = res.data.data.repository
    console.log(rep.issues.edges)
  })
