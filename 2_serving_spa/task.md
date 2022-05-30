# Task 2 (Serve SPA in AWS S3 and Cloudfront Services)

## Prerequisites

---

_NOTE: This should have already been done in Task 1, but as a reminder._

- **Install** the latest version of Serverless Framework (https://www.serverless.com/).
- **Configure** credentials for AWS to make them accessible by Serverless.
- **Fork** Any (React, Angular, Vue) Shop single page app from https://github.com/EPAM-JS-Competency-center
- **Install** dependencies…
- **Check** if everything works for you...

## Tasks

---

### Task 2.1

**manual deployment**

1. In the AWS Console **create** and **configure** **S3 bucket** where you will host your app (follow instructions in training materials).
2. **Build** and **manually upload** the MyShop! app to the created S3 bucket. Check if the app is available through the Internet over **_http://{your-bucket-name}.s3-website-{aws-region}.amazonaws.com_** .
3. **Create** a _CloudFront distribution_ for your app as it was described in training materials. **Check** your S3 bucket policy changes. **Check** if the app is available through the Internet over given CloudFront URL.
4. **Make** some minor but visible changes in the app, **build** and **upload** them to your bucket, and create CloudFront distribution invalidation.

### Task 2.2

**automated deployment using serverless-finch + serverless single-page-app plugins**

1. **Add** and **configure** _serverless_ and _serverless-finch_ plugin. Add necessary npm script(s) to build and deploy your app from your machine in an automated way. (_See the_ [demo repo](https://github.com/boale/serverlessTestApp)). **Check** if everything works correctly for you. (_Please note, that after uploading an application's build to the S3 bucket you need to create manually a CloudFront invalidation_).
2. **Destroy** created AWS infrastructure (S3 bucket and CloudFront distribution) from the previous part and steps. **Make sure** nothing is left.
3. **Add** and **configure** _serverless-single-page-app-plugin_ as it is implemented in the demo repository. **Add** necessary npm script(s) to build, upload to your S3 bucket, and invalidate CloudFront cache from your machine in an automated way. Check if everything works fine and all changes appear on the Web. (_Please note, that you don’t need to manually create CloudFront invalidations any more_).

### Task 2.3

**Save your work (for Rolling Scopes Application only)**

1. Store the links to CloudFront URL and S3-website in README.md file.
2. Commit all your work to separate branch (e.g. `task-2`) in your own repository.
3. Create a pull request to the `master` branch.
4. Submit link to the pull request to Crosscheck page in [RS App](https://app.rs.school).

## Evaluation criteria (each mark includes previous mark criteria)

---

- **0** - Nothing has been done.
  _(Link to repository is not provided. Nothing to check.)_
- **3** - S3 bucket has been created and configured properly. The app has been uploaded to the bucket and is available though the Internet. Nothing else has been done.
  _(Link to S3 bucket/website is provided. There is no Pull Request in the YOUR OWN frontend repository.)_
- **4** - In addition to the previous work a CloudFront distribution is created and configured properly and the site is served now with CloudFront and is available through the Internet over CloudFront URL, not S3-website link (due to changes in bucket’s policy...).
  _(Link to CloudFront website is provided. S3-website shows 403 Access Denied error. There is no Pull Request in the YOUR OWN frontend repository.)_
- **5** - Serverless-finch and serverless-single-page-app plugins are added and configured. The app can be built and deployed by running npm script command.
  _(Link to CloudFront website is provided. PR with all changes is submitted in the YOUR OWN frontend repository and its link is provided for review.)_

NOTE: YOU SHOULD WORK IN YOUR OWN FORKED REPOSITORY, NOT IN COMMON

## Description Teamplate for PRs (for Rolling Scopes Application only)

---

The follwoing should be present in PR's description field:

1. What was done?

   Example:

```
   Service is done, but FE is not working...

   Additional scope - webpack, swagger, unit tests
```

2. Link to FE PR (YOUR OWN REPOSITORY) - ...

