[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# FullStack-WebDev-Portfolio

## Description

FullStack-WebDev-Portfolio is a personal portfolio website, built using React, showcasing web development projects and AWS cloud skills. It's designed as a single-page application (SPA) and highlights proficiency in front-end technologies, including extensive use of React and Chakra, and experience with AWS cloud solutions. The portfolio features a modern, responsive design for an optimal user experience on various devices.

## AWS Diagram

![Screenshot](./src/images/AWS%20Submition%20form.png)

# AWS Integration for Contact Form Processing

In this project, I integrated a web form with various AWS services to enable seamless email processing. The architecture involves AWS Amplify, API Gateway, Lambda, Simple Email Service (SES), and the setup of specific IAM policies and roles.

## AWS Amplify

- **Functionality**: Serves as the frontend hosting platform.
- **Role**: Hosts the React application, providing a user interface for the contact form.

## API Gateway

- **Functionality**: Acts as a managed service to create, publish, maintain, monitor, and secure APIs.
- **Role**: Receives form submission requests from the Amplify frontend and routes them to the appropriate Lambda function.

## AWS Lambda

- **Functionality**: Offers a serverless compute service, executing code in response to events.
- **Role**: Processes incoming requests from API Gateway. It extracts form data and prepares it for email dispatch.

## Amazon Simple Email Service (SES)

- **Functionality**: A cloud-based email sending service designed to help digital marketers and application developers send marketing, notification, and transactional emails.
- **Role**: Receives processed email content from Lambda and handles the sending of emails to the specified recipients.

## IAM Policies and Roles

- **Functionality**: Manage permissions in AWS, allowing control over who can access what resources.
- **Role**: Ensures secure access control to AWS services. Specific roles and policies are defined to grant necessary permissions to Lambda for accessing SES and for API Gateway to trigger Lambda functions.

## Workflow Overview

1. **User Interaction**: A user fills out the contact form on the web application hosted on AWS Amplify.
2. **API Gateway**: The form data is sent to API Gateway upon submission.
3. **Lambda Execution**: API Gateway triggers a specified Lambda function, passing the form data.
4. **Email Processing**: The Lambda function processes the data, formats the email, and forwards it to Amazon SES.
5. **Email Dispatch**: Amazon SES sends the email to the intended recipient.

This setup demonstrates a serverless architecture, effectively utilizing AWS services to manage web form submissions without the need for a traditional server setup. The integration showcases how cloud services can be combined to automate and streamline workflows in a scalable and secure manner.

## Usage

To explore the portfolio, visit the deployed URL. The site is structured into various sections: Home, About, Projects, Services, Resume, and Contact. Each section offers detailed insights into different aspects of web development skills, professional experiences, and personal projects.

This is the link of my [GitHub repository](https://github.com/Kirill777-web/FullStack-WebDev-Portfolio)

This is the link of my [AWS Amplify](https://main.d3uq86hhi34ytt.amplifyapp.com)

## Credits

This project was developed with the following technologies:

- React.js for creating a dynamic and interactive user interface.
- Chakra UI components
- Formik and Yup React Form Validation
- AWS Amplify for deployment
- AWS API Gateway
- AWS Lambda
- AWS SES Simple Email Service

## License

Copyright (c) 2023 Kirill Lazutin

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
