# Task 7 (Authorization)

## Prerequisites

---

- The task is a continuation of **Homework 6** and should be done in the same repo.

## Tasks

---

### Task 7.1

Create a new service, called **authorization-service**, with its own **serverless.yml** file at the same level as product and import services.

The backend project structure should look like:

- backend-repository/product-service
- backend-repository/import-service
- backend-repository/authorization-service

Create **basicAuthorizer** lambda function in authorization service in **serverless.yml** file. This lambda should have at least one environment variable with credentials: {yours_github_account_login}=TEST_PASSWORD

- {yours_github_account_login} - your GitHub account name. Login for test user should be your GitHub account name (example: vasiapupkin)
- TEST_PASSWORD - password string. Password for test user must be «TEST_PASSWORD»

**basicAuthorizer** lambda should take **Basic authorization_token**, decode it and check that credentials provided by token exist in the lambda environment variable. This lambda should return 403 HTTP status if access is denied for this user (invalid **authorization_token**) and 401 HTTP status if Authorization header is not provided.

**NOTE:** do not send credentials to the GitHub. Use **.env** file and **serverless-dotenv-plugin** serverless plugin to add environment variables to the lambda. Add **.env** file to **.gitignore** file.

.env file example:
vasiapupkin=TEST_PASSWORD

### Task 7.2

Add Lambda authorization (**basicAuthorizer** lambda) to the **/import** path of the **import-service** API Gateway.

### Task 7.3

Request from the client application to the **/import** path of the **import-service** should have Basic Authorization header:
Authorization: Basic **authorization_token**
where **authorization_token** is equal base64-encoded({yours_github_account_login}:TEST_PASSWORD)
(For example, `Authorization: Basic sGLzdRxvZmw0ZXs0UGFzcw==`)
Client should get **authorization_token** value from browser localStorage

### Task 7.4

**Save your work (for Rolling Scopes Application only)**

1. Commit all your work to separate branch (e.g. `task-7`) in your own repository.
2. Create a pull request to the `master` branch.
3. Submit link to the pull request to Crosscheck page in [RS App](https://app.rs.school).

## Evaluation criteria (each mark includes previous mark criteria)

---

Provide your reviewers with the link to the repo, client application and URLs to execute the **/import** path of the **import-service**

- **1** - **authorization-service** is added to the repo, has correct **basicAuthorizer** lambda and correct **serverless.yaml** file
- **3** - **import-service** serverless.yaml file has authorizer configuration for the **importProductsFile** lambda. Request to the **importProductsFile** lambda should work only with correct **authorization_token** being decoded and checked by **basicAuthorizer** lambda. Response should be in 403 HTTP status if access is denied for this user (invalid **authorization_token**) and in 401 HTTP status if Authorization header is not provided.
- **5** - update client application to send Authorization: Basic **authorization_token** header on import. Client should get **authorization_token** value from browser localStorage https://developer.mozilla.org/ru/docs/Web/API/Window/localStorage
  **authorization_token** = localStorage.getItem('**authorization_token**')

## Additional (optional) tasks

---

**recommended for personal growth and further interviews, but this part would not be evauated on cross-check**

- **+1** - Client application should display alerts for the responses in 401 and 403 HTTP statuses. This behavior should be added to the **nodejs-aws-fe-main/src/index.tsx** file
- **just practice, no evaluation** - Add Login page and protect **getProducts** lambda by the Cognito Authorizer
  - Create Cognito User Pool using a demo from the lecture. Leave **email** in a list of standard required attributes. Checkbox **Allow users to sign themselves up** should be checked. Also, set **email** as an attribute that you want to verify.
  - Add **App Client** to the User Pool
  - In the **App client settings** section select all **Identity Providers**. Fill the **Callback URL(s)** field with your Client Application URL (f.e. http://localhost:3000/). Allow only **Implicit grant** OAuth Flow. Allow all **OAuth Scopes**
  - Create Domain name
  - After all of these manipulations, you can open your **login page** by clicking on the **Launch Hosted UI** link in the **App client settings**
  - Provide this link to your reviewers. The reviewer can just confirm that everything works for him too.
  - Add Cognito authorizer to the **getProducts** lambda. Use **Authorization** as a **Token Source**
  - How to make sure that everything works as expected:
    - Open login page and **Sign up** a new user. Use a real email address to create this user
    - Verify user using code from the email
    - After verification and after every login you will be redirected to the Client application. URL should contain **id_token** which can be used to access the **getProducts** lambda
    - Call **getProducts** lambda using **id_token** as a value for the **Authorization** header
  - Remove authorization from the **getProducts** after your task will be checked
