# Task 9 (Backend For Frontend)

## Prerequisites
---

- The task is a continuation of **Homework 8**
- The task should be done in the backend repo - the same repo with **product-service** and **import-service** services
- **product-service** and **CART** services should exist and work in your application

## Tasks
---

### Task 9.1
 
Create a folder for the **bff-service** in the same level as for other services in the repo. Create an **express** application in this folder, that listens for all requests and redirects those requests to the appropriate services based on variables provided by the **.env** file.

**bff-service** workflow example:
* Call **bff-service** by the URL: **{bff-service-url}**/**{recipient-service-name}**?var1=someValue
  * **{bff-service-url}** - for example, http://localhost:3000
  * **{recipient-service-name}** - ‘cart’ or ‘product’ (you can use any other mapping of your choice)
  * ?var1=someValue - query string
* Get **recipientURL** from the env variables using **{recipient-service-name}** as a key
* Get request **method** (GET, POST, etc.)
* Make a new request to the needed service using the appropriate **method** and **recipientURL**
* **bff-service** should return the result of the recipient’s request

If **bff-service** cannot find **recipientURL** by the **{recipient-service-name}**, return a 'Cannot process request’ error message with status 502.  
**bff-service** should return the same status code and error message that the recipient service returns to the **bff-service** in case of any error on the recipient service side.  

### Task 9.2

Deploy **bff-service** with Elastic Beanstalk. 
* Platform should be **node.js**
* Application name must follow the following convention **{yours_github_account_login}-bff-api**
* Use the **--cname** option **{yours_github_account_login}-bff-api-{environment_name}**
* Use the **--single** option

**bff-service** should work only with requests from the **product-service** and **CART** services.  
All **product-service** and **CART** services methods should work correctly if requested via **bff-service**

## Evaluation criteria (each mark includes previous mark criteria)
---

Provide your reviewers with the following information:
- link to the repo
- **product-service** service API endpoint URL
- example of the **create product** API call with all needed information: URL, payload, headers, etc.
- **CART** service API endpoint URL
- **bff-service** service URL
- example how to call **product-service** and **CART** services via **bff-service** service URL   
---
* **3** - A working and correct **express** application should be in the **bff-service** folder. Reviewer can start this application locally with any valid configuration in the **.env** file and this application should works as described in the task 9.1
* **5** - The **bff-service** should be deployed with Elastic Beanstalk. The **bff-service** call should be redirected to the appropriate service : **product-service** or **CART**. The response from the **bff-service** should be the same as if **product-service** or **CART** services were called directly.
 
## Additional (optional) tasks
---

* **+1** - Add a cache at the **bff-service** level for a request to the **getProductsList** function of the **product-service**. The cache should expire in 2 minutes.  
How to test:
  * Get products list
  * Create new product
  * Get products list - result shouldn’t have new product
  * Wait more than 2 minutes
  * Get products list - result should have new product
* **+1** - Use **NestJS** to create **bff-service** instead of **express**
