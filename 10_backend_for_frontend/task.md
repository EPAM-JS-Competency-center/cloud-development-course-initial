# Task 9 (Backend For Frontend)

## Prerequisites

---

- The task is a continuation of Homework 8
- The task should be done in the backend repo - the same repo with `product-service` and `import-service` services
- Product Service and Cart Service services should exist and work in your application

## Architecture

Find the entire program architecture: [here](../Architecture.pdf).

<details>
  <summary>Task Focus</summary>

  The following image provides more info about task focus.

  <img src="./module_focus.png" />

</details>

## Tasks

---

### Task 9.1

1. Create a new service called `bff-service` at the same level as Product Service and Import Service. The backend project structure should look like this:

```
   backend-repository
      product-service
      import-service
      bff-service
```

2. Create an `Express` application in this folder, that listens for all requests and redirects those requests to the appropriate services based on variables provided by the `.env` file.

3. Here's the workflow example that BFF Service should support:

- Make requests to BFF Service with URL in the following format: `{bff-service-url}/{recipient-service-name}?var1=someValue`

    - `{bff-service-url}` - for example, http://localhost:3000
    - `{recipient-service-name}` - "cart" or "product" (you can use any other mapping of your choice)
    - `?var1=someValue` - query string

- Get `recipientURL` from the env variables using `{recipient-service-name}` as a key
- Get request `method` (GET, POST, etc.)
- Make a new request to the needed service using the appropriate `method` and `recipientURL`
- BFF Service should return the result of the recipient’s request

4. If BFF Service cannot find `recipientURL` by the `{recipient-service-name}`, return a "Cannot process request" error message with status 502.
5. BFF Service should return the same status code and error message that the recipient service returns to the BFF Service in case of any error on the recipient service side.

### Task 9.2

1. Deploy BFF Service with Elastic Beanstalk.

- Platform should be _Node.js_
- Application name must follow the following convention `{yours_github_account_login}-bff-api`
- Use the `--cname` option `{yours_github_account_login}-bff-api-{environment_name}`
- Use the `--single` option

2. BFF Service should work only with requests from the Product Service and Cart Service.
3. All Product Service and Cart Service methods should work correctly if requested via BFF Service

### Task 9.3

1. Commit all your work to separate branch (e.g. `task-9` from the latest `master`) in your own repository.
2. Create a pull request to the `master` branch.
3. Submit link to the pull request to Crosscheck page in [RS App](https://app.rs.school).

## Evaluation criteria (each mark includes previous mark criteria)

---

Provide your reviewers with the following information:

- link to the repo
- Product Service API URL
- Cart Service API URL
- BFF Service API URL
- example of how to call `createProduct` labmda with all needed information: URL, payload, headers, etc.
- example how to call Product Service and Cart Service via BFF Service URL

---

- **3** - A working and correct `Express` application should be in the `bff-service` folder. Reviewer can start this application locally with any valid configuration in the `.env` file and this application should works as described in the Task 9.1
- **5** - The BFF Service should be deployed with Elastic Beanstalk. The BFF Service call should be redirected to the appropriate service : Product Service or Cart Service. The response from the BFF Service should be the same as if Product Service or Cart Service services were called directly.

## Application Functionality (**MUST HAVE**)

---

By this point your application must be able to do:

1. Products representation on Home page should be based on Product Service API.
2. Products are coming from Product DB.
3. Product images are not randomly generated on client side. Product image, same as another product model information should be stored on BE side in Product DB.
4. Products might be created through CSV product file import from client side.
5. Cart might be created with appropriate product set.
6. Auth logic should be in place

## Additional (optional) tasks

---

- **+1** - Add a cache at the BFF Service level for a request to the `getProductsList` lambda function of the Product Service. The cache should expire in 2 minutes.  
  How to test:
  - Get products list
  - Create new product
  - Get products list - result shouldn’t have new product
  - Wait more than 2 minutes
  - Get products list - result should have new product
- **+1** - Use `NestJS` to create BFF Service instead of `Express`

## Description Teamplate for PRs

---

The follwoing should be present in PR's description field:

1. What was done?

   Example:

```
   Service is done, but FE is not working...

   Additional scope - webpack, swagger, unit tests
```

2. Link to BFF Service API - .....
3. Link to FE PR (YOUR OWN REPOSITORY) - ...

4. In case SWAGGER file is not provided - please provide product schema in PR description
