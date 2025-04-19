namespace codesail.db;
using { managed } from '@sap/cds/common';

entity PipelineArtifacts : managed {
    key pipelineId: UUID;
        repoId: String @mandatory;
        repoName: String @mandatory;
        owner: String @mandatory;
        branch: String default 'main';
        commitId: String;
        applicationId: String @mandatory;
        applicationName: String;
        mtarFile: String @mandatory;
        mtarFilePath: String @mandatory;
        autoDeploy: Boolean default false;
        stages: Association to many StagesArtifacts on stages.pipelineId = $self;
        releases: Association to many ReleaseArtifacts on releases.pipelineId = $self;
};

entity StagesArtifacts: managed{
    key pipelineId: Association to PipelineArtifacts;
    key stageId: UUID;
        stageName: String @mandatory;
        activated: Boolean;
        approver: String;
        autoDeploy: Boolean default false;
        variables: Association to many StageVariables on variables.stageId = $self;
};

entity ReleaseArtifacts: managed{
    key pipelineId: Association to PipelineArtifacts;
    key stageId: Association to StagesArtifacts;
    key releaseId: UUID;
        subaccount: String;
        branch: String;
        commitId: String;
        lastRun: DateTime;
        stageDeploymentStatus: String;
        releaseStatus: String;
        startedOn: DateTime;
        startedBy: String;
        approvalStatus: String;
        approvedBy: String;
        approvedOn: String;
        rejectionComments: String;
}

entity StageVariables: managed{
    key pipelineId: Association to PipelineArtifacts;
    key stageId: Association to StagesArtifacts;
        variableId: UUID;
        subaccount: String;
        apiEndpoint: String;
        organization: String;
        space: String;
        username: String;
        password: String;
}




