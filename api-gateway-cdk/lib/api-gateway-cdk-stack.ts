import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as path from 'path';

// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class ApiGatewayCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    const myLambdaFunction = new lambda.Function(this, 'YourLambdaFunction', {
      runtime: lambda.Runtime.PYTHON_3_9,
      handler: 'main.lambda_handler', // Assuming the Python file is named "main.py" and the function is named "lambda_handler"
      code: lambda.Code.fromAsset(path.join(__dirname, '/../lambda')),
      timeout: cdk.Duration.seconds(10),
      environment: {
        DYNAMODB_TABLE: 'Cookies3'
      }
    });

    // Create an API Gateway
    
    const api = new apigateway.LambdaRestApi(this, 'HelloApi', {
      handler: myLambdaFunction
    });


  }
}
