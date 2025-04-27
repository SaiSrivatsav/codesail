// srv/server.js
const cds     = require('@sap/cds')
const express = require('express')
const axios = require('axios')

cds.on('bootstrap', app => {
  // 1) enable JSON bodies
  app.use(express.json())

  // 2) define your GitHub‑Actions trigger endpoint
  app.post('/trigger', async (req, res) => {
    try {
      const git_input = req.body
      console.log("Git Artifacts: ");
      console.log(git_input);
      // only act on pushes to "main"
      if (git_input.ref === 'refs/heads/main') {
        const response = await updatePipelineArtifacts(git_input);
        console.log(response);
        return res.status(200).json({
          status: response
        });
      }else{
        return res.status(200).json({
          status: "Triggered workflow is not for main branch. Pipeline Artifacts won't be updated."
        });
      }
    }
    catch (e) {
      console.error('Error in /trigger:', e)
      return res.status(500).json({ error: e.message });
    }
  })
})

module.exports = cds.server

// your business logic here
async function updatePipelineArtifacts(git_input) {

  try {
    const db = await cds.connect.to('db');
    console.log(db);
    const pipelineArtifacts = await db.run(SELECT.one.from('PipelineArtifacts').where({ repoId: git_input.repository.name}));
    if (!pipelineArtifacts) {
      let response = "Artifact not found for this repo. Pipeline Artifacts have not been updated";
      console.log(response);
      return response;
    }else{
      console.log("Artifact fetched successfully");
      console.log("Pipeline Artifact to be updated: " + pipelineArtifacts);
        return await db.run(UPDATE('PipelineArtifacts').set({
          commitId: git_input.sha,
          gitRunId: git_input.runID,
          artifactId: git_input.artifactId,
          commitMessage: git_input.head_commit.message,
          commitTimestamp: git_input.head_commit.timestamp,
        }).where({ pipelineId: pipelineArtifacts.pipelineId})
      );
    }
  } catch (error) {
    console.log("Error while updating Pipeline Artifacts" + error);
  }
  
}
