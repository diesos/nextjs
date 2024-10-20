# Todo List Project with Next.js, Tailwind CSS, and PocketBase

This is a Todo List application developed using Next.js with Tailwind CSS for front-end styling and PocketBase for the backend API to handle CRUD operations. This project provides a modern and responsive interface for managing tasks efficiently.

## Live Preview

- **You can view my deployed version here**: https://diesos-nextnote.netlify.app/

## Features

- **Next.js**: Utilizes server-side rendering and static site generation for improved performance and SEO.
- **Tailwind CSS**: Utility-first CSS framework for creating responsive and customizable user interfaces.
- **PocketBase**: A lightweight, self-hosted backend solution that offers API CRUD capabilities for managing tasks.

## Technologies Used

- **Next.js**: React-based framework for building the front end.
- **Tailwind CSS**: CSS framework for styling and layout.
- **PocketBase**: Backend server for managing data and API interactions.

## Installation

### Prerequisites

- Node.js (v18 or above)
- NPM or Yarn package manager
- PocketBase (download from [PocketBase](https://pocketbase.io/))

### Setup Instructions

1. **Clone the repository**:

   ```sh
   git clone https://github.com/diesos/nextjs.git
   cd nextjs
   ```

2. **Install dependencies**:

   ```sh
   npm install
   # or
   yarn install
   ```

3. **Start the PocketBase server**:

   - Download PocketBase according to your operating system.
   - Paste the PocketBase file in the root of your project
   - Run the following command:

   ```sh
   ./pocketbase serve
   ```

4. **Create a `.env.local` file** in the root directory to store environment variables:

   ```env
   NEXT_PUBLIC_DB_HOST=http://127.0.0.1:8090
   ```

   Ensure that this URL corresponds to your running PocketBase instance.

5. **Start the Next.js development server**:
   ```sh
   npm run dev
   # or
   yarn dev
   ```
   The app will be available at [http://localhost:3000](http://localhost:3000).

## Usage

- Access the Todo List application at [http://127.0.0.1:8090/\_/](http://127.0.0.1:8090/_/) with admin access for the creation fo the collection.
- Use the PocketBase backend to manage your tasks through CRUD operations.

### Scripts

- **`npm run dev`**: Starts the development server.
- **`npm run build`**: Builds the application for production.
- **`npm run start`**: Runs the built app in production mode.

## Folder Structure

- **`/pages`**: Contains the Next.js pages for routing.
- **`/components`**: Reusable UI components for the Todo List. (shadcn)
- **`/styles`**: Global and component-specific styles, including Tailwind CSS.
- **`/utils`**: Helper functions and utilities.

## API Endpoints (PocketBase)

Ensure PocketBase is running to access API endpoints for CRUD operations:

- **Create**: POST `/api/todo`
- **Read**: GET `/api/todo/{id}`
- **Update**: PUT `/api/todo/{id}`
- **Delete**: DELETE `/api/todo/{id}`

These endpoints allow for easy interaction between the Next.js frontend and the PocketBase backend.

## Deployment

1. **Build the application for production**:
   ```sh
   npm run build
   ```
2. **Start the production server**:
   ```sh
   npm run start
   ```

You can also deploy to platforms like **Vercel**, **Netlify**, or **AWS** for a scalable production setup.

## Contributing

Feel free to submit issues, feature requests, and pull requests to improve this project.

## License

This project is licensed under the MIT License.

## Acknowledgements

- **Next.js**: Framework for building server-side rendered applications.
- **Tailwind CSS**: CSS library for styling.
- **PocketBase**: Simple backend solution for data management.

---

Feel free to modify any sections or reach out if you have any questions!

**Happy coding!**
