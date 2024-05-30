# dev-academy-spring-2024-submission

This is a submission for Solita Dev Academy Finland January 2024: https://github.com/solita/dev-academy-spring-2024-exercise 

## Installation
To install the backend and client packages, run the following command in the root folder
```
npm run install
```

## Starting
Start up the database container in the root folder
```
npm run db:up
```
You can access the Database Admirer in PORT http://localhost:8088, with password **academy**.
![alt](./login.png)

### Development
#### Backend
In the backend folder
```
npm run dev
```
You can access backend in http://localhost:3000/api

#### Client
In the client folder
```
npm run dev
```
You can access client in http://localhost:5173

### Production
To build, run the command
```
npm run build
```
in the root folder. Then start the database container. The app will be accessible in http://localhost:3000 after executing the command
```
npm run start
```
in the root folder

