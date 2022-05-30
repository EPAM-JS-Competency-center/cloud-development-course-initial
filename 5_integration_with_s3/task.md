# Task 5 (Integration with S3)

**After Lecture 5 "Amazon Simple Storage Service (Amazon S3)"**

## Prerequisites

---

- The task is a continuation of Homework 4 and should be done in the same repos
- **(for JS only)** Install the latest version of AWS SDK (https://aws.amazon.com/ru/sdk-for-node-js/)
- **(for JS only)** Install the CSV parser package (https://www.npmjs.com/package/csv-parser)
- Sign in into AWS Console and create a new S3 bucket with a folder, called uploaded

## Tasks

---

### Task 5.1

Create a new service, called **import-service**, with a its own **serverless.yml** file at the same level as product service.

The backend project structure should look like (in JS implementation):

- src/product-service
- src/import-service

Create a lambda function in that **serverless.yml** file, called **importProductsFile**, which will be triggered by the HTTP **GET** method.

The requested URL should be **/import**.

The name of CSV file with products will be passed in a **query string** as a **name** parameter and should be described in the **serverless.yml** file as a **request parameter**.

Update **serverless.yml** with policies to allow lambda functions to interact with **S3**.

A new **Signed URL** should be created with the following **Key: `uploaded/${fileName}`**.

The response from the lambda should be the created **Signed URL**.

The lambda endpoint should be integrated with the frontend by updating **import** property of the API paths configuration.

### Task 5.2

Create a lambda function under the same **serverless.yml** file, called **importFileParser**, which will be triggered by the S3 **s3:ObjectCreated:\*** event.

Configure the event to be triggered only by changes in the **uploaded** folder in S3.

The lambda function should use the **Readable stream** to get an object from S3, parse it via **csv-parser** and log each record to be shown in **CloudWatch**.

The response should be a correct HTTP response code.

### Task 5.3

**Save your work (for Rolling Scopes Application only)**

1. Commit all your work to separate branch (e.g. `task-5`) in your own repository.
2. Create a pull request to the `master` branch.
3. Submit link to the pull request to Crosscheck page in [RS App](https://app.rs.school).

## Evaluation criteria (each mark includes previous mark criteria)

---

Reviewers should verify the lambda functions by invoking them through provided URLs.

- **1** - File **serverless.yml** contains configuration for **importProductsFile** function
- **3** - The **importProductsFile** lambda function returns a correct response which can be used to upload a file into the **S3** bucket
- **4** - Frontend application is integrated with **importProductsFile** lambda
- **5** - The **importFileParser** lambda function is implemented and **serverless.yml** contains configuration for the lambda

## Additional (optional) tasks

---

- **+1** **(for JS only)** - **async/await** is used in lambda functions
- **+1** **(All languages)** - **importProductsFile** lambda is covered by **unit** tests (**(for JS only)** **aws-sdk-mock** can be used to mock S3 methods - https://www.npmjs.com/package/aws-sdk-mock)
- **+1** **(All languages)** - At the end of the **stream** the lambda function should move the file from the **uploaded** folder into the **parsed** folder (move the file means that file should be copied into **parsed** folder, and then deleted from **uploaded** folder)

## Description Teamplate for PRs (for Rolling Scopes Application only)

---

The follwoing should be present in PR's description field:

1. What was done?

   Example:

```
   Service is done, but FE is not working...

   Additional scope - webpack, swagger, unit tests
```

2. Link to product-service API - .....
3. Link to FE PR (YOUR OWN REPOSITORY) - ...

4. In case SWAGGER file is not provided - please provide product schema in PR description
