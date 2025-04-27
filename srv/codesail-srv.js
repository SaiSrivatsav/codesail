const cds = require('@sap/cds');

class CodesailService extends cds.ApplicationService {
    async init(){
        const db = await cds.connect.to('db');
        const { PipelineArtifacts, StageArtifacts, StageVariables, ReleaseArtifacts } = this.entities;

        return super.init();
    }
}

module.exports = CodesailService;