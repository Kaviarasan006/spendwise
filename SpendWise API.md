💰 SpendWise API

SpendWise is a simple backend API for managing personal expenses. It allows users to store, retrieve, update, and delete expense records using a RESTful API.

The project is designed to demonstrate backend development using Node.js, Express, and MongoDB. It provides endpoints to manage expense data and can be easily connected to any frontend application.

🚀 Features

➕ Add new expenses

📄 View all recorded expenses

✏️ Update existing expenses

❌ Delete expenses

🗄️ MongoDB database integration

⚡ RESTful API built with Express.js

🛠️ Tech Stack

Node.js

Express.js

MongoDB

Mongoose

⚙️ Installation
1️⃣ Clone the repository
git clone https://github.com/Kaviarasan006/spendwise.git
cd spendwise
2️⃣ Install dependencies
npm install
3️⃣ Configure MongoDB

Update your MongoDB connection string inside server.js:

const uri = "your_mongodb_connection_string";
4️⃣ Run the server
node server.js

add this as your .env
PORT=5000
MONGO_URI=mongodb+srv://YOUR_USER_NAME:PASSWORD@cluster0.rvbbqkk.mongodb.net/spendwise?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret_key

Server will run on:

http://localhost:5000
📡 API Endpoints
Method	Endpoint	Description
GET	/expenses	Get all expenses
POST	/expenses	Add new expense
PUT	/expenses/:id	Update expense
DELETE	/expenses/:id	Delete expense
📌 Purpose

This project was created to practice backend API development and database integration using the MERN stack.

📄 License

This project is open-source and available under the MIT License.