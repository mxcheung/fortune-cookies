# fortunes-cdk



 aws dynamodb batch-write-item --request-items file://items.json

# fortune-cookies
fortune-cookies

DynamoDB

Lambda

API Gateway

S3

X-Ray


[fortune-cookies](https://github.com/ACloudGuru/hands-on-aws-troubleshooting/tree/main/Building_and_Troubleshooting_a_Serverless_Web_Application)https://github.com/ACloudGuru/hands-on-aws-troubleshooting/tree/main/Building_and_Troubleshooting_a_Serverless_Web_Application

# step 1 - quickstart

mkdir fortunes-cdk

cd fortunes-cdk

cdk init app --language typescript

npm install @aws-cdk/aws-dynamodb @aws-cdk/aws-lambda @aws-cdk/aws-apigateway @aws-cdk/core aws-sdk @aws-cdk/aws-iam

# step 2 - replace cdk code

replace cdk  code /lib/dynamodb-cdk-stack.ts

copy items.json

# step 3 - cdk bootstrap and more

cdk bootstrap

cdk synth

cdk deploy

# step 4 - load data
 aws dynamodb batch-write-item --request-items file://items.json
