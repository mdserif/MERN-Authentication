# **Below are the Dependencies**
bcrypt - this module is used for password hashing
cors - this module is for cors policy error prevent
dotenv -  this module is to manage .env files
express - this is our web framework
jsonwebtoken -  it is fo the authentication purpose
mogoose - this is to use mongodb in express
nodemailer -  this is for sending mail 
nodemon - this is for automatic running of server


"type":"module" -- it helps us to use es6 syntax in our express project.

"scripts": {
    "start": "node app",
    "dev": "nodemon app"
  }
the above syntax means when we write npm start our then start will script will run and when we write npm dev then nodemon/development script will run.

# **Folder Structure**

# **dotenv**
- Inside the **dotenv** file i have all the data which i dont want show everyone.
- to use the data from dotenv file i have to write "process.env.variable_name"

## **config**
- Inside the config folder I have a file named **connectdb.js**.
- In this file I have a function named connectDB.
- This function is responsible for making the database connection.

# **models**
- Inside the models folder , I have a file named **User.js**
- In this file i have a function named userSchema which is responsible for making the schema for database
- After making the schema I have created the model named "user"

## **controllers**
- Inside the controllers folder, I have file named **userController.js**
- In this file i have used all the logic for registration, login etc.

# **app.js**
- This file is the entry point of our express project.



