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

1. Find our communication channel

- If you're coming from Rolling Scopes Scholl - use Discord
- If you're coming from EPAM internal program - use MS Teams

2. Join our communication channel

- For Discord: register a new account if you don't have one and [join the course chat](https://discord.com/invite/ATsHAqCsnw)
- For MS Teams: link will be provided separately

3. Register in [RS App](https://app.rs.school/registry/student?course=aws-2021)

    - The link might be outdated, so be sure to reach out if you have any doubts
    - Feel free to ask any questions in our Discord chat

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

3.  Pass the [test](https://forms.gle/RHBM9HBoSKzumT9v9)

    - You will be able to pass only once!
    - Test will stop accepting answers right after the deadline!

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
