# Interactive SIN Validator Web App

A simple interactive web application for validating Canadian Social Insurance Numbers (SIN). This project demonstrates the use of TypeScript, Tailwind CSS, and Prettier for code formatting.

## Features

- Validates Canadian SIN numbers in real-time.
- Simple, Clean and responsive design using Tailwind CSS.
- Very lightweight, runs in the browser. no server, no framework.
- Supports a wide variety of browsers.
- Easy to deploy and maintain.

## Technologies Used

- **TypeScript**: For static typing and modern JavaScript features.
- **Tailwind CSS**: For utility-first styling of the web application.
- **Vite**: For compiling and bundling typescript to ES5 javascript.
- **Jest**: For unit and integration testing.
- **Prettier**: For consistent code formatting.
- **VSCode**: VScode is the preferred code editor for this project.

## Future work

If our code base gets bigger and more complicated, we can:

- Adding ESLint for code quality checks.
- Integrating a backend, such as Express or Next.js, if database storage is required.
- Migrating to React for advanced state management if needed.

## Getting Started

Follow these steps to set up the project on your local machine:

### Prerequisites

Make sure you have **Node.js** and **yarn** installed.

### Installation

Clone the repository:

```bash
git clone https://github.com/omar84/sin-validator.git
cd sin-validator
```

Install dependencies:

```bash
yarn
```

### Development

To quickly get a fresh start, run:

```bash
yarn util:fresh
```

Open a new terminal window, and run:

```bash
yarn build:watch
```

this will re-compile on-the-fly whenever you make changes to your typescript files

Open a new terminal window, and run:

```bash
yarn dev
```

This will open the web app in a new browser window, and it will automatically reload the web app whenever changes are made to the files in `dist` directory

### Testing

Run tests to make sure your app still runs as intended after making changes

```bash
yarn test
```

### Build and deploy the app

Compile typescript to javascript

```bash
yarn build
```

Copy your static files inside `dist` directory, to your production server

```
dist/
├── assets/
├── app.js
└── index.html
```

and that's it!

## Tailwind CSS

This project uses [Tailwind CSS](https://tailwindcss.com/) for styling, configured to only include necessary CSS to keep the bundle small.

### Customization

To add custom styling with Tailwind, use Tailwind utility classes directly in the HTML. For example:

```html
<input class="border border-gray-300 p-4 text-2xl w-full" />
```
