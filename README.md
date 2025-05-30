# Ely's Esthetics Website (ely.rabbitholesolution.com)

This project is the official website for Ely's Esthetics, a skincare and esthetics service provider. It allows users to browse available services, learn more about the business, and book appointments.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

*   Node.js (version 18 recommended - as specified in `.nvmrc`)
*   npm (comes with Node.js)

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository_url>
    ```
    (Replace `<repository_url>` with the actual URL of the repository)

2.  Navigate to the project directory:
    ```bash
    cd ely.rabbitholesolution.com
    ```

3.  Install the dependencies:
    ```bash
    npm install
    ```

## Running the Project

Once the installation is complete, you can run the project using the following scripts:

### Development Server

To start the development server with hot reloading:

```bash
npm run dev
```
This will typically start the server at `http://localhost:3000`.

### Building the Project

To create a production build:

```bash
npm run build
```
This will generate an optimized version of the application in the `.next` folder.

### Production Server

To start the production server (after building the project):

```bash
npm run start
```
This command starts a Node.js server that serves the built application.

## Running Tests

This project uses Jest for testing. To run the test suite:

```bash
npm test
```
This command will execute all test files found in the `__tests__` directory and any other files matching Jest's test patterns.

## Project Structure

Here's a brief overview of the key directories and their purposes:

*   \`app/\`: Contains the core application code, including pages, layouts, and components specific to Next.js 13+ App Router.
    *   \`app/components/\`: Reusable React components used throughout the application.
    *   \`app/services/\`: Contains pages and components related to specific services offered.
*   \`__tests__/\`: Houses all the test files, primarily using Jest.
*   \`content/\`: Stores content files, such as JSON data, that might be used to populate parts of the website (e.g., banners).
*   \`public/\`: Static assets that are served directly, such as images, fonts, or other files like `main.js`.
*   \`styles/\`: Global styles or style-related configurations.
*   \`.github/workflows/\`: Contains CI/CD pipeline configurations, like the GitHub Actions workflow for continuous integration.

## Technologies Used

*   **Next.js:** A React framework for building server-side rendered and statically generated web applications.
*   **React:** A JavaScript library for building user interfaces.
*   **Jest:** A JavaScript testing framework used for unit and integration testing.
*   **CSS Modules:** For locally scoped CSS to avoid style conflicts and improve modularity.
*   **Node.js:** JavaScript runtime environment used for the backend and build processes.

## Deployment

This project is configured for continuous integration and deployment using GitHub Actions. The workflow can be found in \`.github/workflows/ci.yml\`. Any pushes or merges to the main branch will typically trigger a build and deployment process.
