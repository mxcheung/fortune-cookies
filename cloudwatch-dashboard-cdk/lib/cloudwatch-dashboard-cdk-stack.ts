import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb'
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as path from 'path';
import { RemovalPolicy, Stack, StackProps, Duration } from 'aws-cdk-lib';
import * as cw from 'aws-cdk-lib/aws-cloudwatch';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class CloudwatchDashboardCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'CloudwatchDashboardCdkQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
    
    const dashboard = new cw.Dashboard(this, 'Dash', {
        defaultInterval: Duration.days(7),
        variables: [new cw.DashboardVariable({
          id: 'region2',
          type: cw.VariableType.PATTERN,
          label: 'RegionPattern',
          inputType: cw.VariableInputType.INPUT,
          value: 'us-east-1',
          defaultValue: cw.DefaultValue.value('us-east-1'),
          visible: true,
        })],
      });


  }
}
