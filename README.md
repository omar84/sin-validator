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
- **Jest**: For unit testing.
- **Prettier**: For consistent code formatting.
- **VSCode**: VScode is the preferred code editor for this project.

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
index.html
app.js
```

and that's it!

## Tailwind CSS

This project uses [Tailwind CSS](https://tailwindcss.com/) for styling.

### How Tailwind is Used

Tailwind CSS is loaded as a minified CDN version, so there’s no need to compile or build Tailwind CSS separately. This approach keeps the project simple and lightweight, ideal for smaller apps that don’t require custom configurations.

### Customization

To add custom styling with Tailwind, use Tailwind utility classes directly in the HTML. For example:

```html
<input class="border border-gray-300 p-4 text-2xl w-full" />
```

If you need additional Tailwind customizations in the future, you can switch to a local Tailwind build and configure it via a tailwind.config.js file. However, for this project, we’re focusing on using the CDN version to keep things simple.
