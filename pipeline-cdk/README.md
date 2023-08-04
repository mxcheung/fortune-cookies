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



# pipeline-cdk

# fortune-cookies
fortune-cookies

DynamoDB

Lambda

API Gateway

S3

X-Ray


[fortune-cookies](https://github.com/ACloudGuru/hands-on-aws-troubleshooting/tree/main/Building_and_Troubleshooting_a_Serverless_Web_Application)https://github.com/ACloudGuru/hands-on-aws-troubleshooting/tree/main/Building_and_Troubleshooting_a_Serverless_Web_Application

# step 1 - quickstart

mkdir pipeline-cdk

cd pipeline-cdk

cdk init app --language typescript

npm install @aws-cdk/aws-dynamodb @aws-cdk/aws-lambda @aws-cdk/aws-apigateway @aws-cdk/core aws-sdk

# step 2 - replace cdk code

replace cdk  code /lib/dynamodb-cdk-stack.ts

copy items.json

# step 3 - cdk bootstrap and more

cdk bootstrap

cdk synth

cdk deploy

