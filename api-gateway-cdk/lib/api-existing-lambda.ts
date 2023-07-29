import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as lambda from 'aws-cdk-lib/aws-lambda';


export class ApiGatewayCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

      // Define the existing Lambda function
    const myLambdaFunction = lambda.Function.fromFunctionArn(
      this,
      'myLambdaFunction',
      'arn:aws:lambda:us-east-1:617611017005:function:LambdaCdkStack-YourLambdaFunction3B2F78C5-OTtSEa3z2T3'
    );

    
    const myLambdaFunction2 = lambda.Function.fromFunctionName(
      this,
        "LambdaCdkStack-YourLambdaFunction3B2F78C5-OTtSEa3z2T3x",
        "LambdaCdkStack-YourLambdaFunction3B2F78C5-OTtSEa3z2T3x"
    );

    
    // Create an API Gateway
    const api = new apigateway.RestApi(this, 'HelloApi', {
      restApiName: 'Hello API',
    });

    // Create an integration for the Lambda function
    const lambdaIntegration = new apigateway.LambdaIntegration(myLambdaFunction);


    // Create a resource and associate the Lambda integration with a default method (GET)
    const helloResource = api.root.addResource('hello');
    helloResource.addMethod('GET', lambdaIntegration);

  }
}
