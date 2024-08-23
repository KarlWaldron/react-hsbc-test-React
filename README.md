Incident Management Frontend with React + Vite
This project provides a user interface for managing incidents using React, powered by Vite for fast development and build processes. It integrates seamlessly with a Spring Boot backend via RESTful API calls.

Features

Incident Management: View, create, and delete incidents.

React Hooks: Leverages modern React features such as useState and useEffect.

API Integration: Communicates with a Spring Boot backend.

Vite: Utilizes Vite for fast hot module replacement (HMR) and optimized production builds.

Technologies Used:

React: A JavaScript library for building user interfaces.

Vite: A fast build tool and development server.

Axios: A promise-based HTTP client for the browser.

CSS: Styling components.

Prerequisites

Node.js: v14 or later

Spring Boot Backend: Ensure the backend service is running

Setup and Installation

1. Clone the Repository

git clone https://github.com/your-username/react-hsbc-test.git

cd react-hsbc-test

3. Install Dependencies
npm install

Running the Application

1. Start the Spring Boot Backend
   
Ensure the Spring Boot backend is running on http://localhost:8080.

2. Start the React Development Server
bash

Copy code

npm run dev

Open http://localhost:5173 in your browser to view the app.

Building for Production

Available Scripts
npm run dev: Start the development server with HMR.
npm run build: Build the project for production.
npm run preview: Preview the production build locally.
License
This project is licensed under the MIT License. See the LICENSE file for more information.
