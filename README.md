# Product Management API

This is a **Product Management API** built using **Node.js, Express, Sequelize, and MySQL**. It provides endpoints to **create, retrieve, update, delete**, and **search** products with pagination support.

---

## Features

- **Create, Read, Update, Delete (CRUD)** operations on products.
- **Search products** by name or category.
- **Pagination** support for product listing.
- **Validation** on model fields using Sequelize.
- **MySQL** used as the database.

---

## Prerequisites

Make sure you have the following installed:

- **Node.js** (v14 or later)
- **MySQL**
- **npm** (comes with Node.js)

---

## Project Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd <project-folder>
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure the Database

Create a MySQL database and update the database credentials in the sequelize instance in the `databaseConnect.js` file in `config` folder (`../config/databaseConnect.js`).

I had created a database named "product_db". You need to create it manually and supply your `database_name` in the command given below. Eg- `product_db`.

```bash
const sequelize = new Sequelize('database_name', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});
```

### 4. Start the Server

```bash
node app.js
```

### MySQL Command

PS: `YOU NEED TO CREATE A DATABASE IN MYSQL MANUALLY NAMED "product_db" AS IT IS NOT CREATED DYNAMICALLY BY SEQUELIZE.`

```bash
CREATE DATABASE product_db;
USE product_db
```

### Run The Project

1. Start your MySQL server.

2. Start the Project:

```bash
node index.js
```

3. Use tools like `Postman` to interact with API.

All the responses are in JSON, please see you have it installed in your browser to view the JSON responses.

# Thanks For Visiting
