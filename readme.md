# Really Good Fake Store


## Description

This app is a mock e-commerce website. The user can view our product or view by category with creating a user account. The user must create an account to be able to add, delete or update qty in their cart. If the user logs out and and logs back in the items in the cart will remain for the user. 


  * [Installation](#install)
  * [Usage](#usage)
  * [Visit deployed Heroku app here]()
  * [View presentation slides here](https://docs.google.com/presentation/d/16h9slhOimONXTGtBx6qNiJgWqWdzq8vWGRG21bLmR60/edit#slide=id.ge6e60ce203_0_52)



## Concept/Motivation

Our project is a mock e-commerce store called Really Good Fake Store. E-commerce websites make up about 10% of the internet. Our goal was to be able to build this mock store with our current coding skills to mock something similar to what we might see on a real job. 

Future development for this project would be:
* Adding a wishlist seperate from the cart function.
* Developing a check out function.
* Creating an algorithm that will show product recommends based off of items the user has looked at. 


## Install

Clone project.
Run the following line of code in your terminal to install all the needed packages: 
```
npm i
```


## Usage

Once all the packages have been installed build your DataBase. You can use Mysql workbench to create your DB or run command line:
```
mysql -u root -p
```
and create your DB there. Once DB has been created run in your terminal:
```
npm run seed
```
to seed your DB. Once your DB is completed go to url:
```
http://localhost:3001
```


## Built With

- Handlebars express
- Bootstrap
- JavaScript
- MySQL
- Node.js
  - dotenv
  - express
  - express-sessions
  - bcrypt
  - mysql2
  - sequelize
  - validator


## Screen shots

![Shot-1](public/img/homepage.png)
![Shot-1](public/img/product_page.png)
![Shot-1](public/img/cart.png)