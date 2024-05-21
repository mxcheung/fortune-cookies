#!/bin/bash
# Creates pipeline via cdk

echo "Welcome fortunes pipeline"

cd /home/ec2-user/environment/fortune-cookies/fortunes-cdk

cdk init app --language typescript

npm install @aws-cdk/aws-dynamodb @aws-cdk/aws-lambda @aws-cdk/aws-apigateway @aws-cdk/core aws-sdk @aws-cdk/aws-iam


cdk bootstrap

cdk synth

cdk deploy
