# Task 4 (Integration with Database)

**Overview of DB solutions (SQL, No-SQL (Dynamodb, Mongo, Redis, Elastic Search), NewSQL) Infrastructure As Code (IaC), deployment sample to deploy RDS")**

## Tasks

---

### Task 4.1

Use AWS Console to create a database instance in RDS with PostgreSQL and default configuration. **(For T-Shape program SQL and NoSQL dbs might be used)**
RDS instance configuration (Please have a look at Lecture Practical part)
Connect to database instance via the tool DBeaver (https://dbeaver.io/download/) or similar tools like DataGrip/PgAdmin and create tables:

Product model:

```
    products:
    id -  uuid (primary key)
    title - text, not null
    description - text
    price - integer
```

Stock model:

```
    stocks:
    product_id - uuid (foreign key from products.id)
    count - integer (There are no more products than this count in stock)
```

Write SQL script to fill tables with test examples. Store it in your GIT repository. Execute it for your DB to fill data.

### Task 4.2

Extend your serverless.yml file with credentials to your database instance and pass it to lambda’s environment variables section.
Integrate GET/products lambda to return a list of products from the database (joined stocks and products tables) Product instance on FE side should be joined model of product and stock by productId.

Do not commit your environment variables in serverless.yml to github!

Recommended to use “pg” module to connect the database from the code https://www.npmjs.com/package/pg. (but not for NoSQL db)

**Example:**

_BE: separate models in RDS_

    Stock model example in DB:

    {
      product_id: '19ba3d6a-f8ed-491b-a192-0a33b71b38c4',
      count: 2
    }


    Product model example in DB:

    {
      id: '19ba3d6a-f8ed-491b-a192-0a33b71b38c4'
      title: 'Product Title',
      description: 'This product ...',
      price: 200
    }

_FE: One product model as a result of BE models join(product and it's stock) _

      Product model example on Frontend side:

      {
        id: '19ba3d6a-f8ed-491b-a192-0a33b71b38c4',
        count: 2
        price: 200,
        title: ‘Product Title’,
        description: ‘This product ...’
      }

What does it mean for end user - user cannot buy more than product.count (no more items in stock) - But this is future functionality on FE side.
Integrate GET/products/{productId} lambda to return a product from the database

### Task 4.3

Implement POST/products lambda and implement its logic so it will be creating a new item in a products table.

Save the URL (API Gateway URL) to execute the implemented lambda functions for later - you'll eed to provide it in the PR (e.g in PR's description) when submitting the task.

### Task 4.4

**Save your work (for Rolling Scopes Application only)**

1. Commit all your work to separate branch (e.g. `task-4` from `master`) in BE (backend) and if needed in FE (frontend) repositories.
2. Create a pull request to the `master` branch.
3. Submit link to the pull request to Crosscheck page in [RS App](https://app.rs.school).

## Evaluation criteria (each mark includes previous mark criteria)

---

Reviewers should verify the lambda functions by invoking them through provided URLs.

- **1** - Task 4.1 is implemented
- **3** - TASK 4.2 is implemented lambda links are provided and returns data
- **4** - TASK 4.3 is implemented lambda links are provided and products is stored in DB (call TASK 4.2 to see the product)
- **5** - Your own Frontend application is integrated with product service (/products API) and products from product-service are represented on Frontend. Link to a working Front-End application is provided for cross-check reviewer.

## Additional (optional) tasks

---

- **+1** **(All languages)** - POST/products lambda functions returns error 400 status code if product data is invalid
- **+1** **(All languages)** - All lambdas return error 500 status code on any error (DB connection, any unhandled error in code)
- **+1** **(All languages)** - All lambdas do console.log for each incoming requests and their arguments
- **+1** **(All languages)** - Transaction based creation of product (in case stock creation is failed then related to this stock product is not created and not ready to be used by the end user and vice versa) (https://devcenter.kinvey.com/nodejs/tutorials/bl-transactional-support)

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
