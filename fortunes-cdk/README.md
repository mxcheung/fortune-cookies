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


# fortunes-cdk


```
 aws dynamodb batch-write-item --request-items file://items.json
```

# fortune-cookies
fortune-cookies

DynamoDB

Lambda

API Gateway

S3

X-Ray


[fortune-cookies](https://github.com/ACloudGuru/hands-on-aws-troubleshooting/tree/main/Building_and_Troubleshooting_a_Serverless_Web_Application)https://github.com/ACloudGuru/hands-on-aws-troubleshooting/tree/main/Building_and_Troubleshooting_a_Serverless_Web_Application

# step 1 - quickstart

```
git clone https://github.com/mxcheung/fortune-cookies.git
cd /home/ec2-user/environment/fortune-cookies/fortunes-cdk
. ./install.sh

```

```
cd /home/ec2-user/environment/fortune-cookies/fortunes-cdk
 aws dynamodb batch-write-item --request-items file://items.json
```


```
mkdir fortunes-cdk

cd fortunes-cdk

cdk init app --language typescript

npm install @aws-cdk/aws-dynamodb @aws-cdk/aws-lambda @aws-cdk/aws-apigateway @aws-cdk/core aws-sdk @aws-cdk/aws-iam
```

# step 2 - replace cdk code

replace cdk  code /lib/dynamodb-cdk-stack.ts

copy items.json

# step 3 - cdk bootstrap and more

```
cdk bootstrap

cdk synth

cdk deploy
```

# step 4 - load data

```
 aws dynamodb batch-write-item --request-items file://items.json
```

# step 5 - view cookies page via github pages
View the fortune cookies app here
Static html calls 
   * api gateway
   * aws lambda
   * aws dynamodb
   * 
https://mxcheung.github.io/


Source code for Static html is here
https://github.com/mxcheung/mxcheung.github.io
