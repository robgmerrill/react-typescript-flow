# Interview Challenge

Frontend (React + TypeScript):

1. Display a list of books.
2. Add a new book.

# Full-Stack Book Manager

This is a simple full-stack application for managing a list of books, built with React, TypeScript, and Node.js.

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone <repo-url>
   cd fullstack-book-manager
   ```

2. Install client dependencies:

```bash
cd client
npm install
```

3. Install server dependencies:

```bash
cd ../server
npm install
```

### Running the Application

4. Start the server:

```bash
cd server
npm run dev
```

5. Start the client:

```bash
cd client
npm start
```

The application should now be running at http://localhost:3000.

Folder Structure

```
fullstack-book-manager/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── BookList.tsx
│   │   │   ├── AddBook.tsx
│   │   ├── context/
│   │   │   ├── BookContext.tsx
│   │   ├── App.tsx
│   │   ├── index.tsx
│   ├── tsconfig.json
│   ├── package.json
├── server/
│   ├── src/
│   │   ├── controllers/
│   │   │   ├── bookController.ts
│   │   ├── routes/
│   │   │   ├── bookRoutes.ts
│   │   ├── app.ts
│   │   ├── server.ts
│   ├── tsconfig.json
│   ├── package.json
├── .gitignore
├── README.md

```
