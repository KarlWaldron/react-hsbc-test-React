Incident Management Frontend with React + Vite
This project provides a user interface for managing incidents using React, powered by Vite for fast development and build processes. It integrates seamlessly with a Spring Boot backend via RESTful API calls.

Features
Incident Management: View, create, and delete incidents.
React Hooks: Leverages modern React features such as useState and useEffect.
API Integration: Communicates with a Spring Boot backend.
Vite: Utilizes Vite for fast hot module replacement (HMR) and optimized production builds.
Technologies Used
React: A JavaScript library for building user interfaces.
Vite: A fast build tool and development server.
Axios: A promise-based HTTP client for the browser.
CSS: Styling components.
Project Structure
bash
Copy code
src/
  ├── assets/                # Static assets (images, etc.)
  ├── components/            # React components
  │   ├── IncidentForm.jsx   # Form component for creating incidents
  │   ├── IncidentList.jsx   # Component for displaying the list of incidents
  ├── services/              # API service files
  │   ├── IncidentServices.js # Service to interact with the backend API
  ├── App.jsx                # Main application component
  ├── main.jsx               # Entry point for the React application
  └── index.css              # Global styles
Prerequisites
Node.js: v14 or later
Spring Boot Backend: Ensure the backend service is running
Setup and Installation
1. Clone the Repository
bash
Copy code
git clone https://github.com/your-username/react-hsbc-test.git
cd react-hsbc-test
2. Install Dependencies
bash
Copy code
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
To build the app for production:

bash
Copy code
npm run build
The production-ready files will be in the dist directory.

Proxy Configuration
The React app uses a proxy during development to forward API requests to the Spring Boot backend. This is configured in vite.config.js:

javascript
Copy code
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
    },
  },
});
Available Scripts
npm run dev: Start the development server with HMR.
npm run build: Build the project for production.
npm run preview: Preview the production build locally.
License
This project is licensed under the MIT License. See the LICENSE file for more information.
