# dynamodb-cdk



 aws dynamodb batch-write-item --request-items file://items.json

# fortune-cookies
fortune-cookies

DynamoDB

Lambda

API Gateway

S3

X-Ray


[fortune-cookies](https://github.com/ACloudGuru/hands-on-aws-troubleshooting/tree/main/Building_and_Troubleshooting_a_Serverless_Web_Application)https://github.com/ACloudGuru/hands-on-aws-troubleshooting/tree/main/Building_and_Troubleshooting_a_Serverless_Web_Application

# quickstart - step 1

mkdir dynamodb-cdk

cd dynamodb-cdk

cdk init app --language typescript

npm install @aws-cdk/aws-dynamodb @aws-cdk/aws-lambda @aws-cdk/aws-apigateway @aws-cdk/core aws-sdk

# replace cdk code - step 2

replace cdk  code /lib/dynamodb-cdk-stack.ts

#  cdk bootstrap and more - step 3
cdk bootstrap
cdk synth
cdk deploy

#  load data - step 4
 aws dynamodb batch-write-item --request-items file://items.json
