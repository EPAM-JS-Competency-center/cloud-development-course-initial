# Task 1 (Cloud Introduction)

## Application Functionality (**MUST HAVE**)

---

By the end of the program your application must be able to do:

1. Products representation on Home page should be based on Product Service API.
2. Products are coming from Product DB.
3. Product images are not randomly generated on client side. Product image, same as another product model information should be stored on BE side in Product DB.
4. Products might be created through CSV product file import from client side.
5. Cart might be created with appropriate product set.
6. Auth logic should be in place

## Tasks

---

### Task 1.1

1. Join our communication channel

- [CloudX AWS Practitioner for JS](https://teams.microsoft.com/l/channel/19%3a73dafd02206d421896229364386d7bd2%40thread.skype/CloudX%2520AWS%2520Practitioner%2520for%2520JS?groupId=a91a4b92-98b1-4d0d-9e21-bd706bd68ed5&tenantId=b41b72d0-4e9f-4c26-8a69-f949f367c91d)

### Task 1.2

1. Revise:

    - What is REST; what are the main principles of it.
    - How to create a basic REST API service using Express.

2.  Read about (if you would like to learn beyond the curriculum):

    - On-Premise architecture
    - Cloud Architecture
    - Cloud benefits
    - What do the region, availability zone, IAM mean?
    - How to use cloud solutions (Read about possible showcases)?
    - What is a serverless architecture?

### Task 1.3

1. Decide which FE framework will be used:

    - [React Front app](https://github.com/EPAM-JS-Competency-center/shop-react-redux-cloudfront).
    - [Angular Front app](https://github.com/EPAM-JS-Competency-center/shop-angular-cloudfront).
    - [Vue Front app](https://github.com/EPAM-JS-Competency-center/shop-vue-vuex-cloudfront).

2. Clone the selected repo, install dependencies, run the app and check if everything is okay

    - Check `package.json` and/or `README.md` for additional details.

3. Since you're going to be building an E-Commerce solution, decide which commodities will be sold in your shop.

    - Mixed, Games, Toys, Electronic devices, etc - you name it!

### Task 1.4

1. Register in AWS following best practices.

    - Do be careful with your root credentials and make sure to protect it properly.

2. Create an IAM user and assign AdministratorAccess policy to it.
3. Using CLI, connect to your AWS account and get the created IAM user information

    - Do remember about AWS credentials setup on your local machine
    - Command example that needs to work from your terminal: `aws iam get-user --user-name=MyUser`

4. Wait for the next task to be announced and help others in the chat if they have any issues
