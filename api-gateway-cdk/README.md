# api-gateway-cdk




# step 1 - quickstart

mkdir api-gateway-cdk

cd api-gateway-cdk

cdk init app --language typescript

npm install @aws-cdk/aws-dynamodb @aws-cdk/aws-lambda @aws-cdk/aws-apigateway @aws-cdk/core aws-sdk

# step 2 - replace cdk code

replace cdk  code /lib/api-gateway-cdk-stack.ts




# step 3 - cdk bootstrap and more

cdk bootstrap

cdk synth

cdk deploy

# step 4 permission
attach 

AmazonDynamoDBFullAccess

AmazonDynamoDBReadOnlyAccess

# step 5 test

Response
{
  "statusCode": 200,
  "headers": {
    "Access-Control-Allow-Origin": "*"
  },
  "body": "\"Do not worry about money. The best things in life are free.\""
}

