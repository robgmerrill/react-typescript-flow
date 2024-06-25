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

# Interview Challenge

1. Display a list of books when page loads.
2. Add new book functionality.

The back end of the full stack app is complete. This would be a good place to begin to understand what endpoints you will need to interact with on the front end. After checking out `server.ts`, `app.ts`, `bookRoutes.ts` and `bookController.ts` I would then move on to the front end.

To examine what needs to be done on the front end please examine the current functionality of the running app. First, try to figure out why the books are not being displayed on page load. After you have done that, work on enabling that functionality.

After you have completed this task, you may then begin to work on the add book functionality that isn't currently enabled. Examine in the browser that this functionality doesn't work. Then focus in on the code to try to detect where changes need to be made.
