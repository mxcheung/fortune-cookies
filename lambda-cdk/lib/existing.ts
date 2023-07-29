import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb'
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as path from 'path';
import { RemovalPolicy, Stack, StackProps, Duration } from 'aws-cdk-lib';

export class LambdaCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

     //lookup dynamodb table
  
    const table = dynamodb.Table.fromTableName(
      this,
        "fortunes",
        "fortunes"
    );



    const api = apigateway.RestApi.fromRestApiAttributes(this, "my-api", {
      restApiId: cdk.Fn.importValue('py1ry2cpsl'),
      rootResourceId: cdk.Fn.importValue('gszbb6r9v4'),
    });

    const lambdaFunction = new lambda.Function(this, 'YourLambdaFunction', {
      runtime: lambda.Runtime.PYTHON_3_9,
      handler: 'cookies.lambda_handler', // Assuming the Python file is named "main.py" and the function is named "lambda_handler"
      code: lambda.Code.fromAsset(path.join(__dirname, '/../lambda')),
      timeout: Duration.minutes(3),
      environment: {
        DYNAMODB_TABLE: 'fortunes'
      }
    });
            
    // Grant the Lambda function read/write permissions to the DynamoDB table
    table.grantReadWriteData(lambdaFunction)

    

    // Create an integration for the Lambda function
    const lambdaIntegration = new apigateway.LambdaIntegration(lambdaFunction);


    // Create a resource and associate the Lambda integration with a default method (GET)
    const helloResource = api.root.addResource('hellocookies');
    helloResource.addMethod('GET', lambdaIntegration);

  }
}
