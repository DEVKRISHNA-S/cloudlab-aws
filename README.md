# ☁️ CloudLab

### Learn AWS by Exploring a Real Cloud Application

CloudLab is an interactive AWS learning platform built to make cloud concepts easier to understand through practical examples, interactive lessons, quizzes, challenges, and a real AWS deployment.

Instead of learning AWS services only from theory, CloudLab connects each concept with the architecture and infrastructure used to run an actual web application.

The project is being developed as a college AWS training project with the goal of gaining practical experience with cloud computing, networking, compute, storage, serverless architecture, security, monitoring, and deployment.

---

## 🚀 What is CloudLab?

CloudLab is designed around a simple idea:

> **Don't just learn what an AWS service is. Understand where it fits in a real application.**

The platform contains learning modules covering AWS and cloud fundamentals, including:

- AWS Foundations
- Cloud Computing Fundamentals
- Amazon S3
- Amazon EC2
- AWS Lambda
- Amazon API Gateway
- Amazon VPC
- Amazon Route 53
- Amazon CloudWatch
- AWS IAM
- Cloud Security
- Linux
- Networking
- Subnetting
- Databases
- CloudFront
- AWS Well-Architected Framework

The application also includes interactive quizzes, challenges, progress tracking, architecture explanations, and a simulated terminal environment.

---

# 🎯 Project Objectives

The main objective of this project is to turn AWS training concepts into practical cloud experience.

Through this project, we aim to understand:

- How a web application is deployed on AWS
- How different AWS services work together
- How cloud networking is designed
- How compute resources are managed
- How static content is stored and delivered
- How serverless applications work
- How APIs communicate with frontend applications
- How IAM controls access to AWS resources
- How applications are monitored
- How cloud architecture can be designed for reliability and security

The focus is not simply on using a large number of AWS services, but on understanding the purpose of each service and how it fits into the overall architecture.

---

# 🏗️ AWS Architecture

The planned architecture for CloudLab is:

```text
                           ┌───────────────┐
                           │     USER      │
                           └───────┬───────┘
                                   │
                                   ▼
                           ┌───────────────┐
                           │   Route 53    │
                           │      DNS      │
                           └───────┬───────┘
                                   │
                                   ▼
                           ┌───────────────┐
                           │   CloudFront  │
                           │  CDN + HTTPS  │
                           └───────┬───────┘
                                   │
                                   ▼
                           ┌───────────────┐
                           │      S3       │
                           │ Static Assets │
                           └───────────────┘
                                   │
                                   │ API Requests
                                   ▼
                           ┌───────────────┐
                           │ API Gateway   │
                           └───────┬───────┘
                                   │
                                   ▼
                           ┌───────────────┐
                           │    Lambda     │
                           │   Serverless  │
                           └───────┬───────┘
                                   │
                          ┌────────┴────────┐
                          ▼                 ▼
                    ┌───────────┐    ┌────────────┐
                    │    S3     │    │ DynamoDB   │
                    │  Storage  │    │  Database  │
                    └───────────┘    └────────────┘


                           ┌─────────────────────┐
                           │         VPC         │
                           │                     │
                           │    ┌───────────┐    │
                           │    │    EC2    │    │
                           │    │   Server  │    │
                           │    └───────────┘    │
                           │                     │
                           └─────────┬───────────┘
                                     │
                                     ▼
                              ┌─────────────┐
                              │ CloudWatch  │
                              │ Logs/Metric │
                              └─────────────┘


                              ┌─────────────┐
                              │     IAM     │
                              │Access Control│
                              └─────────────┘





# 🖥️ Project Structure

cloudlab/
│
├── index.html
├── about.html
├── architecture.html
├── challenges.html
├── dashboard.html
└── services.html
│
├── css/
│   └── styles.css
│
├── js/
│   ├── main.js
│   ├── progress.js
│   ├── quiz.js
│   └── terminal.js
│
└── lessons/
    ├── apigw.html
    ├── aws-foundations.html
    ├── cloud-fundamentals.html
    ├── cloudwatch.html
    ├── databases-cdn.html
    ├── ec2.html
    ├── iam.html
    ├── lambda.html
    ├── linux.html
    ├── networking.html
    ├── route53.html
    ├── s3.html
    ├── security-services.html
    ├── subnetting.html
    ├── vpc.html
    └── well-architected.html

🛠️ Technologies

Frontend

HTML5

CSS3

JavaScript

Browser APIs

Local Storage

Cloud & AWS

Amazon S3

Amazon CloudFront

Amazon EC2

AWS Lambda

Amazon API Gateway

Amazon VPC

Amazon Route 53

Amazon CloudWatch

AWS IAM

Amazon DynamoDB

🚀 Deployment

The application is being deployed progressively to AWS.

The deployment process follows:

Local Development
       │
       ▼
Amazon S3
       │
       ▼
CloudFront
       │
       ▼
VPC
       │
       ├──────────────► EC2
       │
       └──────────────► Serverless Services
                              │
                              ▼
                         API Gateway
                              │
                              ▼
                            Lambda
                              │
                         ┌────┴────┐
                         ▼         ▼
                        S3      DynamoDB

                    CloudWatch
                         ▲
                         │
                Monitoring & Logs

📌 Deployment Status

The deployment is being completed step-by-step.

[x] Local website working
[x] IAM user created
[x] S3 bucket created
[x] Website files uploaded to S3
[x] S3 static website configuration
[ ] CloudFront distribution
[ ] VPC configuration
[ ] EC2 deployment
[ ] Lambda function
[ ] API Gateway integration
[ ] DynamoDB integration
[ ] CloudWatch monitoring
[ ] Route 53 integration

CloudFront creation is currently pending AWS account verification.

The remaining AWS infrastructure will continue to be implemented
independently while the CloudFront verification is pending.

🔐 Security

Security is an important part of the deployment.

The project uses AWS IAM to control access to resources and follows
basic cloud security practices.

Planned security practices include:

IAM-based access control

IAM roles for AWS services

Least-privilege permissions

Security Groups for EC2

Controlled S3 access

HTTPS through CloudFront

CloudWatch monitoring

Avoiding hard-coded credentials

No AWS access keys, passwords, tokens, or other sensitive credentials
should be committed to this repository.

💰 Cost Considerations

This project is intended as an educational AWS deployment.

Resources are selected with cost awareness in mind.

In particular:

Avoid unnecessary NAT Gateways

Use small/eligible EC2 instances where possible

Remove unused resources after testing

Monitor AWS billing

Avoid unnecessary paid services

Disable resources when they are no longer required

AWS services can have different pricing models, so resources should be
checked and removed when the project is no longer being used.

👥 Team

CloudLab is being developed as a collaborative AWS training project.

Role                Responsibility

AWS Architecture &  Designed the overall architecture, coordinated the
Project Lead        team, integrated the AWS components, and managed
the overall deployment

Frontend & S3       Developed and organized the web application and
Engineer            handled the S3 deployment

Networking & VPC    Designed the VPC, subnets, routing, Internet
Engineer            Gateway, and Security Groups

Compute &           Worked with EC2, Lambda, and API integration
Serverless Engineer

🎓 Educational Purpose

CloudLab was created as part of an AWS training and college project.

The project focuses on applying concepts learned during AWS training to
a practical application.

Rather than creating separate demonstrations for every AWS service, the
project attempts to connect multiple services into one architecture.

For example:

S3
 │
 └── Static Website

EC2
 │
 └── Application Server

Lambda
 │
 └── Serverless Function

API Gateway
 │
 └── API Interface

VPC
 │
 └── Network Infrastructure

IAM
 │
 └── Access Control

CloudWatch
 │
 └── Monitoring

Route 53
 │
 └── DNS

CloudFront
 │
 └── Content Delivery

This allows the team to understand how individual AWS services
contribute to a larger cloud system.

🔮 Future Improvements

Possible future improvements include:

Complete CloudFront integration

Custom domain integration through Route 53

Backend API implementation

DynamoDB-based progress tracking

Real-time CloudWatch dashboards

Application health monitoring

Automated deployment

CI/CD pipeline

Infrastructure as Code

Containerized services

ML/AI deployment experiments

Improved authentication

More interactive cloud simulations

📈 Learning Outcome

By completing this project, the team aims to gain practical experience
in:

AWS cloud architecture

Cloud deployment

Linux administration

Networking

IAM and security

Static website hosting

CDN architecture

Serverless computing

API development

Database integration

Monitoring and observability

Cloud cost awareness

Infrastructure design

The project also provides a foundation for exploring more advanced areas
such as DevOps, MLOps, automation, containers, and machine-learning
deployment on cloud infrastructure.

📄 License

This project is developed for educational and learning purposes as part
of an AWS training project.

⭐ CloudLab

From learning AWS services to understanding how they work together.