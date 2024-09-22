# 🌍 World Wise - Interactive Map Navigator

World Wise is an interactive map-based application that allows users to navigate a map, mark cities they've visited, and add notes or information about their experiences. This project was built with **Vite** and **React.js** as a way to practice my frontend development skills.

## 🚀 Features

- **City Marking**: Navigate on the map and mark cities you’ve visited before.
- **Notes & Information**: Add custom notes and information for each city.
- **Location Detection**: Automatically detect your location using GPS.
- **Reusable Components**: Custom-built components to enhance modularity.
- **Authentication**: Secured login system with protected routes.
- **Routing**: Dynamic navigation between pages using React Router.

## 🛠️ Tech Stack

- **Vite**: For lightning-fast development.
- **React.js**: Core framework for building the UI.
- **React Router**: For handling navigation and protected routes.
- **Leaflet**: For rendering maps and adding markers.
- **CSS Modules**: Scoped CSS styling for each component.
- **Custom Hooks**: Including hooks like `useGeolocation` and `useURLLocation` for handling location detection.

## ⚙️ Functionality

- **Authentication Context**: Built a context to manage user authentication across the app.
- **Cities & Countries Data**: Context-based state management for storing city and country data.
- **Custom Hooks**:
  - `useGeolocation`: A custom hook to detect the user's device location using GPS.
  - `useURLLocation`: Retrieves latitude and longitude directly from the URL parameters.
- **Dynamic Components**:
  - `AppNav`: Navigation component for easy access to different parts of the app.
  - `City Component`: Displays detailed information about each city.
  - `Button Component`: Reusable button component with various types passed as props.
  - `Map Component`: Displays the interactive map, allowing users to mark and review cities.
  
## 📄 Pages

- **Login Page**: Authenticated login functionality with secure routing.
- **Home Page**: The landing page after login, showcasing options and summaries.
- **Main (App) Page**: The core of the application where users interact with the map and add cities.

## 📚 Learning Outcomes

- Deepened understanding of **React Hooks** like `useState`, `useReducer`, `useContext`.
- Gained hands-on experience with **React Router** for managing routes and implementing authentication.
- Enhanced my knowledge of **custom hooks** development and real-world implementation.
- Improved skills in building reusable **components** and managing complex **state** using context.

## 🗺️ Map Integration

I integrated **Leaflet.js** to create an interactive map where users can:
- Mark cities they’ve visited.
- View their current location using the `useGeolocation` hook.
- Zoom in/out and navigate through various countries and cities.

## 📦 Installation & Setup

To run this project locally, follow these steps:

1. **Clone the repository:**

```bash
git clone https://github.com/your-username/world-wise.git
