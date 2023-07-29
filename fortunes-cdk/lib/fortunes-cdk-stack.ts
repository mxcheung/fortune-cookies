import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb'
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as path from 'path';
import { RemovalPolicy, Stack, StackProps } from 'aws-cdk-lib';

export class FortunesCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

     //define dynamodb table
    const table = new dynamodb.Table(this, id, {
      partitionKey: { name: "fort_id", type: dynamodb.AttributeType.NUMBER },
      removalPolicy: RemovalPolicy.DESTROY,
      tableName: "fortunes"
      }
    )
    
    const lambdaFunction = new lambda.Function(this, 'YourLambdaFunction', {
      runtime: lambda.Runtime.PYTHON_3_9,
      handler: 'cookies.lambda_handler', // Assuming the Python file is named "main.py" and the function is named "lambda_handler"
      code: lambda.Code.fromAsset(path.join(__dirname, '/../lambda')),
      environment: {
        DYNAMODB_TABLE: 'fortunes'
      }
    });
            
    // Grant the Lambda function read/write permissions to the DynamoDB table
    table.grantReadWriteData(lambdaFunction)

    
    // Create an API Gateway
    const api = new apigateway.RestApi(this, 'CookiesApi', {
      restApiName: 'Cookies API',
    });

    // Create an integration for the Lambda function
    const lambdaIntegration = new apigateway.LambdaIntegration(lambdaFunction);


    // Create a resource and associate the Lambda integration with a default method (GET)
    const helloResource = api.root.addResource('hello');
    helloResource.addMethod('GET', lambdaIntegration);
    
  }
}
