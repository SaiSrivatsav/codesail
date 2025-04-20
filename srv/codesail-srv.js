const cds = require('@sap/cds');

class CodesailService extends cds.ApplicationService {
    async init(){
        const db = await cds.connect.to('db');
        const { PipelineArtifacts, StageArtifacts, StageVariables, ReleaseArtifacts } = this.entities;

        this.on('CREATE', 'PipelineArtifacts', async(req) => {
            console.log("GIT has triggered me");
            return "Triggered successfully";
        });

        return super.init();
    }
}

module.exports = CodesailService;