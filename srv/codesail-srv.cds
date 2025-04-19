namespace codesail.srv;
using { codesail.db as db } from '../db/codesail-schema';

@path:'/codesail'
service CodesailSrv {
    entity PipelineArtifacts as projection on db.PipelineArtifacts;
    entity StageArtifacts as projection on db.StagesArtifacts;
    entity StageVariables as projection on db.StageVariables;
    entity ReleaseArtifacts as projection on db.ReleaseArtifacts;
}