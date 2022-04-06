# Task 1 (Cloud Introduction)

## Application Functionality (**MUST HAVE**)
--- 

By the end of the program your application must be able to do:

1. Products representation on Home page should be based on product-service API.
2. Products are still static, but products are hardcoded on BE product-service.
3. Product images are not randomly generated on client side. Product image, same as another product model information should be stored on BE side RDS.
4. Products might be created through CSV product file import from client side.
5. Cart might be created with appropriate product set.
6. Auth logic should be in place 

## Tasks
---

### Task 1.1

1.  Install Discord (you can also use web version), register and [go to chat](https://discord.gg/a24Ndwfj7a)
2.  Register in RS App https://app.rs.school/registry/student?course=aws-2021 (feel free ask questions in chat)

### Task 1.2

1.  Revise:  
     a) What is REST; what are the main principles of it.  
     b) How to create a basic REST API service using Express.
2.  Read about (if you would like to learn beyond the curriculum):  
     a) On-Premise architecture  
     b) Cloud Architecture  
     c) Cloud benefits  
     d) What do the region, availability zone, IAM mean?  
     e) How to use cloud solutions (Read about possible showcases)?  
     f) What is a serverless architecture?
3.  Pass [test](https://forms.gle/RHBM9HBoSKzumT9v9)  
    You will be able to pass only once!

### Task 1.3

1.  Decide which FE framework will be used
    [React Front app](https://github.com/EPAM-JS-Competency-center/shop-react-redux-cloudfront).  
    [Angular Front app](https://github.com/EPAM-JS-Competency-center/shop-angular-cloudfront).
    [Vue Front app](https://github.com/EPAM-JS-Competency-center/shop-vue-vuex-cloudfront).
    Clone, install dependencies, run the app and check if everything is okay.

2.  Decide which commodities will be sold in your shop - Mixed, Games, Toys, Electronic devices... you name it

### Task 1.4

1.  Register in AWS. You can find the instructions in
    [Basic Cloud Introduction Lecture](http://videoportal.epam.com/video/lNZRYplXZ6knZbkdYyXQ)  
    [Advanced Cloud Introduction Lecture](https://videoportal.epam.com/video/59pZaAyL6Aw1B16laNzq)
    [Practical Cloud Introduction Lecture](https://videoportal.epam.com/video/vbdGYlod08Wg11pbaWqy)

2.  Create an IAM user and assign AdministratorAccess policy to it.
3. Using CLI, connect to your AWS account and get the created IAM user information (example: `aws iam get-user --user-name=MyUser`).
4. Wait for the next task and announce in a chat and help others in the chat if they have some issues
