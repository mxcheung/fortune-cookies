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
