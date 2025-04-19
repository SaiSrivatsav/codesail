// srv/server.js
const cds     = require('@sap/cds')
const express = require('express')

cds.on('bootstrap', app => {
  // 1) enable JSON bodies
  app.use(express.json())

  // 2) define your GitHub‑Actions trigger endpoint
  app.post('/trigger', async (req, res) => {
    try {
      const payload = req.body

    //   // only act on pushes to "main"
    //   if (payload.ref === 'refs/heads/main') {
    //     await doPostCommitTasks(payload.commits, payload.after)
    //   }
        console.log("Git Payload start");
        console.log(payload);
        console.log("Git Payload end ");
        
      return res.status(200).json(
        { 
          status: 'Push request received successfully',
          payload: payload
        }
      ) 
    }
    catch (e) {
      console.error('Error in /trigger:', e)
      return res.status(500).json({ error: e.message })
    }
  })
})

module.exports = cds.server

// // your business logic here
// async function doPostCommitTasks(commits, headSha) {
//   console.log(`Received ${commits.length} commits; new HEAD=${headSha}`)
//   // … invoke CAPM services, write to db, kick off jobs, etc. …
// }
