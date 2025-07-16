🛒 E-commerce REST API
This is a simple Node.js + Express REST API built for an e-commerce backend system. It includes user authentication, product management, cart functionality, and order processing.

🚀 Features
🔐 User Authentication with JWT

👤 Role-based Access: Customer & Admin

📦 Product CRUD (Admin only)

🛒 Cart Management (Customer)

🧾 Order Placement from Cart

🗄 MongoDB Database Integration

🌐 RESTful APIs using Express

👤 Roles
👤 Customer:

Can register and log in

Can view product listings

Can add products to the cart

Can place orders

🛠️ Admin:

Can register and log in

Can view all products

Can add, update, and delete products

📁 Folder Structure
 
ecommerce-api/
├── config/            # DB connection logic
├── controllers/       # Business logic for routes
├── middleware/        # Auth & error handling
├── models/            # Mongoose schemas
├── routes/            # API route files
├── .env               # Environment variables
├── server.js          # Entry point
├── package.json       # Dependencies and scripts
🔧 Tech Stack
Node.js

Express.js

MongoDB with Mongoose

JWT (jsonwebtoken)

bcryptjs (password hashing)

dotenv

📦 API Endpoints
🔐 Authentication
POST /api/auth/register – Register a new user

POST /api/auth/login – Login and receive token

📦 Products
GET /api/products – Get all products

POST /api/products – Add product (admin only)

PUT /api/products/:id – Update product (admin only)

DELETE /api/products/:id – Delete product (admin only)

🛒 Cart
POST /api/cart – Add product to cart (customer)

GET /api/cart – Get user's cart

PUT /api/cart – Update cart item

DELETE /api/cart/:productId – Remove product from cart

🧾 Orders
POST /api/orders – Place an order from cart

GET /api/orders – View order history

📝 Note
Make sure MongoDB is running locally on port 27017.

If installed via the installer, it runs automatically as a service.

You can verify it using MongoDB Compass or by running:

 
🙋‍♂️ Author
Akash V

MCA Student, Jain University