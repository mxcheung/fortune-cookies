import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb'
import * as path from 'path';
import { table } from 'console';

export class LambdaCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Reference the existing DynamoDB table
    
    let existing_table_arn = 'arn:aws:dynamodb:us-east-1:617611017005:table/Cookies3'
 //   let table = dynamodb.Table.fromTableArn(this, "Cookies3", existing_table_arn)

    let table = dynamodb.Table.fromTableName(this, "Cookies3", "Cookies3")



    const lambdaFunction = new lambda.Function(this, 'YourLambdaFunction', {
      runtime: lambda.Runtime.PYTHON_3_9,
      handler: 'main.lambda_handler', // Assuming the Python file is named "main.py" and the function is named "lambda_handler"
      code: lambda.Code.fromAsset(path.join(__dirname, '/../lambda')),
      environment: {
        DYNAMODB_TABLE: 'fortunes'
      }
    });
            
    // Grant the Lambda function read/write permissions to the DynamoDB table
    table.grantReadWriteData(lambdaFunction)
  }
}
