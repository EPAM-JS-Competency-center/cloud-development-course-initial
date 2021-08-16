
**Task 3 (After Lecture3 "First API with AWS API GatewayAWS Lambda")**  

Task goal - Create first API based microservice to get mocked products (1 product by productId, getall products).
This product microservice is needed to be created in NEW GITHUB PUBLIC REPOSITORY AS DESCRIBED AND SHOWED on lecture.
This product microservice is needed to be created using Serverless Framework, AWS API Gateway, AWS Lambda


**To Complete task 3 you need to do changes in your OWN 2 repositories - BE (backend) and FE (frontend) repository**


**TASK PREREQUISITES:**
Install the latest version of Serverless Framework (https://www.serverless.com/).
Configure credentials for AWS to make them accessible by Serverless.
Create your own public github repository for all future backend work (you might call it how you would like). You will have 2 repos - 1 for frontend, 1 for backend till the end of course.


**You should create branch from master and work in branch (f.e. branch name - task-3) in BE (backend) and in FE (frontend) repository**

**MAIN TASK**
**Add dynamic product representation on Frontend side.**

1. Create a lambda function under the same serverless config file (it can be yml, ts, etc) of product-service. Function is called getProductsList which will be triggered by the HTTP GET method.
The requested URL should be /products
The response from the lambda should be FULL array of products (mock data should be used - this mock data should be stored in Product Service).
This endpoint should be integrated with Frontend app for product list page representation.

2. Create a lambda function under the same serverless config file of product-service. Function is called getProductsById which will be triggered by the HTTP GET method.
The requested URL should be /products/{productId}   (What is product ID in your application is up to you - productName, UUID, etc.)
The response from the lambda should be 1 searched product from an array of products (mock data should be used - this mock data should be stored in Product Service).
This endpoint is not needed to be integrated with Frontend right now.


**EVALUATION CRITERIA:**
Reviewers (for Rolling Scopes Application only) should verify the lambda functions by invoking them through provided URLs.

- **1** - Product-service serverless config contains configuration for 2 lambda functions, API is not working at all, but YAML configuration is correct
- **2** - The getProductsList OR getProductsById lambda function returns a correct response (POINT1)
- **3** - The getProductsById AND getProductsList lambda functions return a correct response code (POINT2)
- **4** - Your own Frontend application is integrated with product service (/products API) and products from product-service are represented on Frontend.  AND POINT1 and POINT2 are done.

**Additional (optional) tasks (but nice to have):**
- **+1** - Async/await is used in lambda functions
- **+1** - ES6 modules are used for product-service implementation
- **+1** - Webpack is configured for product-service
- **+1** **(All languages)** - SWAGGER documentation is created for product-service
- **+1** **(All languages)** - Lambda handlers are covered by basic UNIT tests (NO infrastructure logic is needed to be covered) 
- **+1** **(All languages)** - Lambda handlers (getProductsList, getProductsById) code is written not in 1 single module (file) and separated in codebase.
- **+1** **(All languages)** - Main error scenarious are handled by API ("Product not found" error).


**TASK 3 description teamplate for PR creation:** (for Rolling Scopes Application only)

1. What was done? 
   Example:
   Service is done, but FE is not working...
   
   Additional scope - webpack, swagger, unit tests
2. Link to product-service API - .....
3. LInk to FE MR (YOUR OWN REPOSITORY) - ...

4. In case SWAGGER file is not provided - please provide product schema in PR description

