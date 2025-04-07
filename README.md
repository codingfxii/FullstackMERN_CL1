#### _**IMPORTANT NOTE**_ - 
This project does have Node.js, Express & MongoDB setup.

## File structure

├───.github
├───client
│   ├───public
│   └───src
│       ├───actions
│       ├───api
│       ├───components
│       │   ├───Form
│       │   └───Posts
│       │       └───Post
│       ├───constants
│       ├───images
│       └───reducers
└───server
    ├───controllers
    ├───models
    └───routes


## Installation


## Clone the repository:

git clone http://172.16.10.188:8888/dushyant/mern-demo-app




## Navigate to the project directory:

cd mern-demo-app




## Install dependencies for both frontend and backend:

## For backend (root folder):

npm install



## For frontend (navigate to the client folder):

cd client
npm install



## Seed Database:

Before seeding dummy data make sure to connect Database successfully, refer to environment variables below that are necessary for the application to run. After that, run the following command from root folder to seed database:

node seed.js






## For starting Backend Server:

Without nodemon, run the following command from root folder:

node ./server/server.js



## With nodemon, run the following command from root folder:

npx nodemon ./server/server.js






## For starting Fronend Server:

  cd client
  npm run dev


## Environment Variables (BACKEND)
Create a .env file in the root of your project and add the following variables (adjust as needed):

# MongoDB URI
MONGODB_URI=<your_mongodb_url>

# MongoDB Database Name
MONGODB_DATABASE=<dbname>

# AUTH_SECRET Secret (For Authentication)
AUTH_SECRET=<your_auth_secret>

# CLIENT URL (Url of react app)
CLIENT_URL=<client_url:PORT>



## Environment Variables (FRONTEND)
Create a .env file in the client folder of your project and add the following variables (adjust as needed):

# Backend API URL
VITE_API_BASE_URL=<your_backend_url>
