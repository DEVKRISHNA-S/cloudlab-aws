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

☁️ CloudLab

Learn AWS by Exploring a Real Cloud Application

CloudLab is an interactive AWS learning platform built to make cloud
concepts easier to understand through practical examples, interactive
lessons, quizzes, challenges, and a real AWS deployment.

Instead of learning AWS services only from theory, CloudLab connects
each concept with the architecture and infrastructure used to run an
actual web application.

The project is being developed as a college AWS training project with
the goal of gaining practical experience with cloud computing,
networking, compute, storage, serverless architecture, security,
monitoring, and deployment.

🚀 What is CloudLab?

CloudLab is designed around a simple idea:

Don't just learn what an AWS service is. Understand where it fits in
a real application.

The platform contains learning modules covering AWS and cloud
fundamentals, including:

AWS Foundations

Cloud Computing Fundamentals

Amazon S3

Amazon EC2

AWS Lambda

Amazon API Gateway

Amazon VPC

Amazon Route 53

Amazon CloudWatch

AWS IAM

Cloud Security

Linux

Networking

Subnetting

Databases

CloudFront

AWS Well-Architected Framework

The application also includes interactive quizzes, challenges, progress
tracking, architecture explanations, and a simulated terminal
environment.

🎯 Project Objectives

The main objective of this project is to turn AWS training concepts into
practical cloud experience.

Through this project, we aim to understand:

How a web application is deployed on AWS

How different AWS services work together

How cloud networking is designed

How compute resources are managed

How static content is stored and delivered

How serverless applications work

How APIs communicate with frontend applications

How IAM controls access to AWS resources

How applications are monitored

How cloud architecture can be designed for reliability and security

The focus is not simply on using a large number of AWS services, but on
understanding the purpose of each service and how it fits into the
overall architecture.

🏗️ AWS Architecture

The planned architecture for CloudLab is:

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

The architecture is being implemented progressively. Individual AWS
services will be added and tested as the project develops.

☁️ AWS Services

Amazon S3

Amazon S3 is used for storing the static components of the application.

The website files include:

HTML

CSS

JavaScript

Images

Other static assets

The frontend is being deployed to an S3 bucket.

S3 is also planned to be used for application storage and backups where
appropriate.

Amazon CloudFront

CloudFront is planned as the content delivery layer for the application.

It will sit between users and the S3 origin to provide:

Content delivery

HTTPS

Caching

Improved performance

Secure access to the S3 origin

The CloudFront deployment is currently pending AWS account verification.

Amazon EC2

EC2 is being used to demonstrate traditional cloud compute.

The EC2 portion of the project will cover:

Launching a Linux instance

Connecting through SSH

Installing software

Running an application/server

Security Groups

Instance configuration

Server management

Monitoring

The EC2 environment will be placed within the project's VPC.

AWS Lambda

Lambda is used to demonstrate serverless computing.

A Lambda function will provide backend functionality without requiring a
continuously running server.

The planned flow is:

Frontend
   │
   ▼
API Gateway
   │
   ▼
Lambda
   │
   ▼
Response

This allows the project to demonstrate the difference between
traditional EC2-based compute and serverless compute.

Amazon API Gateway

API Gateway will provide an API interface between the frontend and
serverless backend.

The planned architecture is:

Browser
   │
   │ HTTP Request
   ▼
API Gateway
   │
   ▼
Lambda
   │
   ▼
Response

This will demonstrate how frontend applications can communicate with AWS
serverless services.

Amazon VPC

The VPC provides the networking foundation for the project.

The planned VPC configuration includes:

VPC

CIDR block

Public subnets

Private subnets

Route tables

Internet Gateway

Security Groups

The VPC is primarily used to demonstrate how cloud networking works and
how resources can be isolated and controlled.

AWS IAM

IAM is used for authentication and authorization.

The project demonstrates:

IAM users

IAM roles

IAM policies

Permissions

Least privilege

Service roles

AWS services such as EC2 and Lambda will use IAM roles to access the
resources they require.

Amazon CloudWatch

CloudWatch is used for monitoring and observability.

The project will use CloudWatch for:

Logs

Metrics

Application monitoring

EC2 monitoring

Lambda monitoring

Error tracking

Alarms

The objective is to understand not only how to deploy an application,
but also how to observe what is happening after deployment.

Amazon Route 53

Route 53 is included in the architecture to demonstrate AWS DNS
concepts.

Route 53 can be used to:

Manage DNS records

Route domain requests

Connect custom domains with AWS resources

Manage hosted zones

A custom domain is not required for the initial deployment of the
project.

Amazon DynamoDB

DynamoDB is planned for application data that benefits from a serverless
NoSQL database.

Possible use cases include:

User progress

Quiz results

Challenge data

Application metadata

The database layer will be added only where it provides a meaningful
function to the application.

📚 Learning Modules

CloudLab contains multiple learning modules.

AWS Foundations

Introduction to:

AWS

Cloud computing

Regions

Availability Zones

Shared Responsibility Model

Cloud service models

AWS pricing concepts

Cloud Fundamentals

Covers:

IaaS

PaaS

SaaS

Public cloud

Private cloud

Hybrid cloud

Scalability

Elasticity

Availability

Amazon EC2

Covers:

EC2 instances

AMIs

Instance types

Security Groups

SSH

Linux servers

Instance lifecycle

AWS IAM

Covers:

Users

Groups

Policies

Roles

Permissions

Least privilege

Amazon S3

Covers:

Buckets

Objects

Storage classes

Versioning

Permissions

Static website hosting

AWS Lambda

Covers:

Serverless computing

Functions

Events

Execution

Permissions

Serverless architecture

Amazon API Gateway

Covers:

APIs

HTTP requests

API endpoints

Lambda integration

Frontend-to-backend communication

Amazon VPC

Covers:

VPC

CIDR

Subnets

Public subnets

Private subnets

Route tables

Internet Gateway

Security Groups

Networking

Covers:

IP addresses

CIDR

Subnetting

Routing

Network architecture

Public and private networking

Linux

Provides practical Linux command examples and a simulated terminal
environment for learning basic server administration.

Amazon CloudWatch

Covers:

Logs

Metrics

Monitoring

Alarms

Application observability

Amazon Route 53

Covers:

DNS

Hosted zones

DNS records

Domain routing

AWS DNS architecture

Security Services

Introduces common AWS security concepts and services used to protect
cloud applications.

Databases & CDN

Introduces:

DynamoDB

CloudFront

Caching

Content delivery

Distributed applications

AWS Well-Architected Framework

Introduces the major principles behind designing reliable, secure,
efficient, and cost-conscious cloud applications.

🧪 Interactive Features

CloudLab is designed to be more interactive than a traditional
documentation website.

The platform includes:

Interactive learning lessons

AWS architecture explanations

Knowledge checks

Quizzes

Cloud challenges

Progress tracking

Linux command examples

Simulated terminal

Architecture walkthroughs

AWS service explanations

The intention is to allow users to learn a concept and immediately see
how it relates to a real cloud application.

🖥️ Project Structure

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