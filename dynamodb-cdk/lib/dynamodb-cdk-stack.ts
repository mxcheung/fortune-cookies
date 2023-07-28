import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb'
import { RemovalPolicy, Stack, StackProps } from 'aws-cdk-lib';

export class CookiesDynamodbCdkStack extends Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

     //define dynamodb table
    const dynamodb_table = new dynamodb.Table(this, id, {
      partitionKey: { name: "fort_id", type: dynamodb.AttributeType.NUMBER },
      removalPolicy: RemovalPolicy.DESTROY,
      tableName: "Cookies3"
      }
    )
  }
}
