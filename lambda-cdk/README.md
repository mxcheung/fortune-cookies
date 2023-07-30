# Welcome to your CDK TypeScript project

This is a blank project for CDK development with TypeScript.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template

# lambda-cdk

https://dev.to/wesleycheek/aws-lambda-function-urls-with-aws-cdk-58ih

https://blog.dennisokeeffe.com/blog/2021-08-13-python-lambda-functions-deployed-with-the-typescript-aws-cdk

https://medium.com/geekculture/how-to-deploy-a-python-lambda-using-aws-cdk-99479fd28a06

mkdir cdk-sample-app

cd cdk-sample-app

cdk init app --language typescript

https://github.com/mavi888/cdk-typescript-lambda/blob/main/lib/cdk-typescript-stack.ts

https://cdkworkshop.com/30-python/30-hello-cdk/200-lambda.html



# step 1 - quickstart

mkdir lambda-cdk

cd lambda-cdk

cdk init app --language typescript

npm install @aws-cdk/aws-dynamodb @aws-cdk/aws-lambda @aws-cdk/aws-apigateway @aws-cdk/core aws-sdk @aws-cdk/aws-iam



# step 2 - replace cdk code

replace cdk  code /lib/lambda-cdk-stack.ts

replace cdk  code /lambda/main.py

aws dynamodb describe-table --table-name Cookies3

replace table arn

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



aws apigateway get-resources --rest-api-id 7og7xceam7
