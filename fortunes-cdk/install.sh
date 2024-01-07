#!/bin/bash
# Creates fortune cookies via cdk

echo "Welcome fortunes cookier"

mkdir fortunes-cdk

cd fortunes-cdk

cdk init app --language typescript

npm install @aws-cdk/aws-dynamodb @aws-cdk/aws-lambda @aws-cdk/aws-apigateway @aws-cdk/core aws-sdk @aws-cdk/aws-iam
