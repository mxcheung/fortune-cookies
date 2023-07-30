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

# api-gateway-cdk

 aws apigateway get-resources --rest-api-id py1ry2cpsl


# step 1 - quickstart

mkdir api-gateway-cdk

cd api-gateway-cdk

cdk init app --language typescript

npm install @aws-cdk/aws-dynamodb @aws-cdk/aws-lambda @aws-cdk/aws-apigateway @aws-cdk/core aws-sdk @aws-cdk/aws-iam

# step 2 - replace cdk code

replace cdk  code /lib/api-gateway-cdk-stack.ts




# step 3 - cdk bootstrap and more

cdk bootstrap

cdk synth

cdk deploy

# step 4 permission


ARN: arn:aws:execute-api:us-east-1:617611017005:bantcy77j3/*/*/*


# step 5 test

Response Body

Hello, CDK! You have hit {}


    const lambdaIntegration = new apigateway.LambdaIntegration(
      lambda.Function.fromFunctionArn(
        this,
        `existingLambdaId${resource.path}`,
        `arn:aws:lambda:${this.region}:${this.account}:function:${resource.methodTarget}`
      ), {
        proxy: resource.proxy,
        credentialsRole: apiIamRole
      }

