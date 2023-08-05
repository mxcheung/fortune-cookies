import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
  
import { App, Stack, StackProps } from '@aws-cdk/core';
import { Repository } from '@aws-cdk/aws-codecommit';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb'
import * as codebuild from 'aws-cdk-lib/aws-codebuild'

import * as codepipeline from 'aws-cdk-lib/aws-codepipeline';
import * as codepipeline_actions from 'aws-cdk-lib/aws-codepipeline-actions';
import * as codecommit from 'aws-cdk-lib/aws-codecommit';

import * as s3 from 'aws-cdk-lib/aws-s3';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as path from 'path';

import { Pipeline, Artifact } from '@aws-cdk/aws-codepipeline';
import {
    CodeCommitSourceAction,
    CodeBuildAction,
} from '@aws-cdk/aws-codepipeline-actions';
import { PipelineProject } from '@aws-cdk/aws-codebuild';

export class PipelineCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'PipelineCdkQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
    
    // Create the Lambda function
    const lambdaFunction = new lambda.Function(this, 'MyLambdaFunction', {
      runtime: lambda.Runtime.PYTHON_3_9,
      handler: 'cookies.lambda_handler',
      code: lambda.Code.fromAsset(path.join(__dirname, '../lambda')), // Replace '../lambda-code' with the path to your Lambda function code
    });


    // Create the S3 bucket
    const bucket = new s3.Bucket(this, 'MyS3Bucket');
    
    
    
    // Create the CodeCommit repository
    const codeCommitRepo = new codecommit.Repository(this, 'Repository', {
        repositoryName: 'MyRepositoryName',
        description: 'Some description.', // optional property
    });
    
    // Create the CodePipeline
    const pipeline = new codepipeline.Pipeline(this, 'MyPipeline');
    
    const sourceArtifact = new codepipeline.Artifact();
        // Define the source action (CodeCommit repository)
    const sourceAction = new codepipeline_actions.CodeCommitSourceAction({
      actionName: 'CodeCommit',
      repository: codeCommitRepo,
      output: sourceArtifact,
      branch: 'main', // or any other branch you want to trigger the pipeline on
    });

    const project = new codebuild.PipelineProject(this, 'MyProject');

    // Define the build action (using AWS CodeBuild, modify as needed)
    const buildAction = new codepipeline_actions.CodeBuildAction({
      actionName: 'Build',
      project: project,// specify your CodeBuild project here,
      input: sourceArtifact
    });

    // Add the source and build actions to the pipeline
    pipeline.addStage({
      stageName: 'Source',
      actions: [sourceAction],
    });

    pipeline.addStage({
      stageName: 'Build',
      actions: [buildAction],
    });
    


  }
}
