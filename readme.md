# Strapi React GraphQL Blog 📝

A **modern portfolio/blog platform** built with **Strapi**, **React**, and **GraphQL**, featuring a beautiful UI, dynamic content management, and efficient data fetching.

## 📸 Screenshots

### Strapi Admin Panel

![Strapi Admin Panel](/admin.png)

### Single Portfolio Page

![Single Portfolio Page](/single.png)

## 🔍 Description

This project is a full-stack portfolio/blog platform that combines the power of Strapi's headless CMS with a modern React frontend. It's designed to showcase portfolio items with categories, tags, and rich media content.

The project is split into two main parts:
- **Client**: A React application with GraphQL integration
- **Server**: A Strapi backend with GraphQL API

## 📁 Project Structure

```
.
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/        # Page components
│   │   ├── lib/          # Apollo client setup
│   │   └── App.tsx       # Main application component
│   └── package.json
│
└── server/                # Strapi backend
    ├── config/           # Strapi configuration
    ├── src/
    │   ├── api/         # API endpoints
    │   └── components/  # Strapi components
    └── package.json
```

## 🚀 Features

- **Dynamic Portfolio Management** with Strapi CMS
- **Category and Tag System** for content organization
- **Image Gallery** with carousel support
- **Responsive UI** with React Bootstrap
- **GraphQL API** for efficient data fetching
- **TypeScript** for type safety
- **Styled Components** for modern styling

## 🛠️ Tech Stack

### Frontend

- **React 18**
- **TypeScript**
- **Apollo Client** (GraphQL)
- **React Router** (routing)
- **React Bootstrap** (UI components)
- **Styled Components** (styling)
- **FontAwesome** (icons)

### Backend

- **Strapi 4**
- **GraphQL**
- **SQLite** (development database)
- **Upload Provider** for media handling

## ⚙️ Installation

### 1. Clone the Repo

```bash
git clone https://github.com/andrew-dev-p/strapi-react-graphql-blog
cd strapi-react-graphql-blog
```

### 2. Setup Server

```bash
cd server
npm install
npm run develop
```

### 3. Setup Client

```bash
cd ../client
npm install
npm run dev
```

## 🔐 Environment Variables

### 📦 Client (`client/.env`)

```env
VITE_STRAPI_URL=http://localhost:1337
```

### 🔧 Server (`server/.env`)

```env
HOST=0.0.0.0
PORT=1337
APP_KEYS=your-app-keys
API_TOKEN_SALT=your-token-salt
ADMIN_JWT_SECRET=your-jwt-secret
JWT_SECRET=your-jwt-secret
```

## 📱 Features in Detail

### Portfolio Management
- Create and manage portfolio items
- Upload and organize images in galleries
- Categorize content with tags and categories
- Rich text descriptions with markdown support

### UI/UX
- Responsive design for all devices
- Smooth animations and transitions
- Modern glassmorphic design elements
- Intuitive navigation

### Content Organization
- Category-based filtering
- Tag-based content discovery
- Search functionality
- Related content suggestions

## 🧪 Development

### Running the Development Server

```bash
# Terminal 1 - Strapi Backend
cd server
npm run develop

# Terminal 2 - React Frontend
cd client
npm run dev
```

### Building for Production

```bash
# Build the client
cd client
npm run build

# Build the server
cd ../server
npm run build
```

## 📬 Deployment

- **Client**: Can be deployed on **Vercel**, **Netlify**, or any static hosting
- **Server**: Can be deployed on **Heroku**, **DigitalOcean**, or any Node.js hosting
