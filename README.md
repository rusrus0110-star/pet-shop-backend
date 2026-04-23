# Pet Shop Backend

Backend API for the Pet Shop e-commerce project.

## Related Repository

Frontend repository: [pet-shop-frontend](https://github.com/rusrus0110-star/pet-shop-frontend)

## Overview

This is the backend part of the Pet Shop project. It provides a REST API for working with categories, products, orders, and sale requests.

## Project Structure

- `/database`
  - `/models`
    - `category.js` — category model
    - `product.js` — product model
  - `database.js` — SQLite database connection setup
- `/public`
  - `/category_img` — category images
  - `/product_img` — product images
- `/routes`
  - `categories.js` — category routes
  - `order.js` — order routes
  - `products.js` — product routes
  - `sale.js` — sale request routes
- `index.js` — main server entry point
- `database.sqlite` — SQLite database file
- `package.json` and `package-lock.json` — project dependencies
- `README.md` — project documentation

## Installation and Run

1. Clone the repository:

```bash
git clone <repository-url>
```

API Endpoints

You can test the API with Postman, Thunder Client, or directly in the browser for GET requests.

Main Routes
GET /categories/all — get all categories
GET /categories/:id — get category products by category ID
GET /products/all — get all products
GET /products/:id — get product by ID
POST /order/send — submit an order
POST /sale/send — submit a discount request

Technologies Used
Node.js
Express
Sequelize
SQLite
CORS
Axios
Notes
The backend uses SQLite as the database.
Product and category images are served from the /public directory.
This project is designed as the API layer for the Pet Shop frontend application.
