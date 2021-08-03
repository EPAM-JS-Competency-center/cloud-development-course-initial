# Task 6 (AWS SQS/SNS)

**After Lecture 6 "Lecture 6: SNS subscription to file upload + Using Lambdas with SQS and SNS"**

## Prerequisites
---

- The task is a continuation of S3 bucket integration and should be done in the same repos
- Task goal is to create to create service to be able to save products which were provided in csv file in database.


## TASK 6.1
---

Create a lambda function called **catalogBatchProcess** in the resources section in **serverless.yml**.

## TASK 6.2
---

Create a SQS queue, called **catalogItemsQueue**, in the resources section in **serverless.yml** file.
Configure the SQS to trigger lambda **catalogBatchProcess** with 5 messages at once via batchSize property.
The lambda function should iterate over all SQS messages and create corresponding products in the products table.

Update the **importFileParser** lambda function (**TASK 5**) to send each CSV record into SQS.


## TASK 6.3
---

Create an SNS topic **createProductTopic** and email subscription in the resources section in **serverless.yml**.
Update the **catalogBatchProcess** lambda function to send an email once it creates products.


## Evaluation criteria
---

Reviewers should verify the lambda functions, SQS and SNS topic and subscription in PR.
 
- **1** - File **serverless.yml** contains configuration for **catalogBatchProcess** function
- **2** - File **serverless.yml** contains policies to allow lambda **catalogBatchProcess** function to interact with SNS and SQS
- **3** - File **serverless.yml** contains configuration for SQS **catalogItemsQueue**
- **4** - File **serverless.yml** contains configuration for SNS Topic **createProductTopic** and email subscription


## Additional (optional) tasks
---

- **+1** **(All languages)** - **catalogBatchProcess** lambda is covered by **unit** tests 
- **+1** **(All languages)** - set a Filter Policy for SNS **createProductTopic** in **serverless.yml** (Create an additional email subscription and distribute messages to different emails depending on the filter for any product attribute) 
