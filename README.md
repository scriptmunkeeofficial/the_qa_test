# The Software QA Test

## Purpose
This platform can be used to evaluate the abilities of a potential Software Quality Assruance or Software Quality Engineer or Software Development Engineer in Test cadidate that is apply for an open position with your company.

## Possible Tasks for the SQA/SQE/SDET candidate
1. Write a Test Plan to describe the scope of work surrounding the potential test effort
2. Write Test Cases to validate the sites functionality
3. Write an automate test script to validate the functionality

## Supporting User Story
> *As a admin of the system,  
> I want the ability to create and maintane users  
> So that I can create new users, change existing  
> users information and set/change permissions of  
> a the given user.*

# Managing the QA Test Platform
## Platform Prerequisites
* NodeJS
* Git
* Sqlite3 or MySQL
* Docker

## Starting the Platform
### Stand alone
1. Clone the repo
2. CD into the local repo folder
3. `npm start` or `node ./src/index.js`

### Docker
1. Clone the repo
2. CD into the local repo folder
3. Run `docker-compose`
4. From a browser open `https://...../`

## Base User Accounts
| Username | Password | Role |
|:------:|:-----:|:---:|
| admin | P@ssw0rd | Admin |
| sam | SamIam | User |

## Platform Resources
* [Node JS](https://hub.docker.com/_/node)
* [MySQL](https://hub.docker.com/_/mysql)
* [Sqlite](https://www.sqlite.org/index.html) (non-prod)

## Container Access

### MySQL
shell to `qa-test-mysql`

    docker container exec -it qa-test-mysql /bin/bash

connect to mysql db from mysql container

    mysql -p 

connect to mysql db from host

connect to mysql db from node server

### Node JS
shell into `qa-test-node`

    docker container exec -it qa-test-node /bin/sh


### VirtualBox
Get Container IP Addresses

    VBoxManage guestproperty enumerate default |grep IP

# TODO List:
1. Resolve npm issues with bookshelf, knex, bookshelf-shcema
```npm WARN bookshelf@0.15.1 requires a peer of knex@>=0.13.0 <0.18.0 but none is installed. You must install peer dependencies yourself.
npm WARN bookshelf-schema@0.3.6 requires a peer of bookshelf@>=0.8.2 <0.11 but none is installed. You must install peer dependencies yourself.```

